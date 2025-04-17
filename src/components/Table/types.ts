export interface Column<T> {
  key: keyof T;
  header: string;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  onSort?: (key: keyof T, direction: 'asc' | 'desc') => void;
  onFilter?: (value: string) => void;
  className?: string;
  emptyStateMessage?: string;
}

export type SortDirection = 'asc' | 'desc' | null; 