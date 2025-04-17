import React, { useState, useCallback, useMemo } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { TableProps, SortDirection } from './types';

export function Table<T>({
  columns,
  data,
  loading = false,
  onSort,
  onFilter,
  className = '',
  emptyStateMessage = 'No data available',
}: TableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: SortDirection;
  }>({ key: null, direction: null });
  const [filterValue, setFilterValue] = useState('');
  const { isDarkMode } = useTheme();

  const handleSort = useCallback(
    (key: keyof T) => {
      if (!columns.find((col) => col.key === key)?.sortable) return;

      let direction: SortDirection = 'asc';
      if (sortConfig.key === key) {
        direction = sortConfig.direction === 'asc' ? 'desc' : null;
      }

      setSortConfig({ key, direction });
      if (onSort) {
        onSort(key, direction as 'asc' | 'desc');
      }
    },
    [sortConfig, columns, onSort]
  );

  const handleFilter = useCallback(
    (value: string) => {
      setFilterValue(value);
      onFilter?.(value);
    },
    [onFilter]
  );

  const getSortIcon = (key: keyof T) => {
    if (sortConfig.key !== key) return '↕️';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction || loading) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortConfig.direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (aValue instanceof Date && bValue instanceof Date) {
        return sortConfig.direction === 'asc'
          ? aValue.getTime() - bValue.getTime()
          : bValue.getTime() - aValue.getTime();
      }

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig.key, sortConfig.direction, loading]);

  return (
    <div
      className={`rounded-lg overflow-hidden border ${
        isDarkMode ? 'border-gray-700' : 'border-gray-200'
      } ${className}`}
    >
      {onFilter && (
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <input
            type="text"
            placeholder="Search..."
            value={filterValue}
            onChange={(e) => handleFilter(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search table"
          />
        </div>
      )}

      <div className="overflow-x-auto">
        <table
          className="w-full"
          role="table"
          aria-label="Data table"
        >
          <thead>
            <tr role="row">
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={`px-6 py-3 text-left text-xs font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-500'
                  } uppercase tracking-wider ${
                    column.sortable ? 'cursor-pointer hover:text-gray-400' : ''
                  }`}
                  onClick={() => column.sortable && handleSort(column.key)}
                  role="columnheader"
                  aria-sort={
                    sortConfig.key === column.key
                      ? sortConfig.direction === 'asc'
                        ? 'ascending'
                        : 'descending'
                      : 'none'
                  }
                >
                  <div className="flex items-center gap-2">
                    {column.header}
                    {column.sortable && (
                      <span className="text-sm">{getSortIcon(column.key)}</span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {loading ? (
              <tr role="row">
                <td
                  colSpan={columns.length}
                  className="px-6 py-4 text-center"
                  role="cell"
                >
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                  </div>
                </td>
              </tr>
            ) : sortedData.length === 0 ? (
              <tr role="row">
                <td
                  colSpan={columns.length}
                  className="px-6 py-4 text-center"
                  role="cell"
                >
                  {emptyStateMessage}
                </td>
              </tr>
            ) : (
              sortedData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  role="row"
                  className={`${
                    isDarkMode
                      ? 'hover:bg-gray-800 hover:text-white'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {columns.map((column) => (
                    <td
                      key={String(column.key)}
                      className="px-6 py-4 whitespace-nowrap text-sm"
                      role="cell"
                    >
                      {column.render
                        ? column.render(row[column.key], row)
                        : String(row[column.key])}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
} 