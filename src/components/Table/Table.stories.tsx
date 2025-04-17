import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './index';
import { Column } from './types';

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

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSort: { action: 'sorted' },
    onFilter: { action: 'filtered' },
  },
};

export default meta;
type Story = StoryObj<typeof Table<User>>;

export const Default: Story = {
  args: {
    columns,
    data: mockData,
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    loading: false,
    emptyStateMessage: 'No users found',
  },
};

export const WithFiltering: Story = {
  args: {
    columns,
    data: mockData,
    loading: false,
    onFilter: (value) => console.log('Filtering with:', value),
  },
};

export const WithSorting: Story = {
  args: {
    columns,
    data: mockData,
    loading: false,
    onSort: (key, direction) => console.log('Sorting by:', key, direction),
  },
};

export const WithCustomStyling: Story = {
  args: {
    columns,
    data: mockData,
    loading: false,
    className: 'shadow-lg border-2 border-blue-500',
  },
}; 