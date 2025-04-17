import React, { useState, useCallback } from 'react';
import { Table, Column } from './Table';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
}

const mockData: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2023-04-15T10:30:00',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'active',
    lastLogin: '2023-04-14T15:45:00',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Editor',
    status: 'inactive',
    lastLogin: '2023-04-10T09:20:00',
  },
];

const columns: Column<User>[] = [
  {
    key: 'name',
    header: 'Name',
    sortable: true,
  },
  {
    key: 'email',
    header: 'Email',
    sortable: true,
  },
  {
    key: 'role',
    header: 'Role',
    sortable: true,
  },
  {
    key: 'status',
    header: 'Status',
    sortable: true,
    render: (value) => (
      <span
        className={`px-2 py-1 rounded-full text-xs font-semibold ${
          value === 'active'
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
        }`}
      >
        {value}
      </span>
    ),
  },
  {
    key: 'lastLogin',
    header: 'Last Login',
    sortable: true,
    render: (value) => new Date(value).toLocaleString(),
  },
];

export function TableExample() {
  const [data, setData] = useState<User[]>(mockData);
  const [loading, setLoading] = useState(false);

  const handleSort = useCallback((key: keyof User, direction: 'asc' | 'desc') => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const sortedData = [...data].sort((a, b) => {
        if (direction === 'asc') {
          return a[key] > b[key] ? 1 : -1;
        }
        return a[key] < b[key] ? 1 : -1;
      });
      setData(sortedData);
      setLoading(false);
    }, 500);
  }, [data]);

  const handleFilter = useCallback((value: string) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const filteredData = mockData.filter(
        (item) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.role.toLowerCase().includes(value.toLowerCase())
      );
      setData(filteredData);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>
      <Table
        columns={columns}
        data={data}
        loading={loading}
        onSort={handleSort}
        onFilter={handleFilter}
        className="shadow-lg"
        emptyStateMessage="No users found"
      />
    </div>
  );
} 