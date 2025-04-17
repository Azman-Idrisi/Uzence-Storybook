import type { Meta, StoryObj } from '@storybook/react';
import TopNav from './index';
import {
  HomeIcon,
  UserGroupIcon,
  FolderIcon,
  Cog6ToothIcon,
  BellIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { ThemeProvider } from '../../../theme/ThemeProvider';

const meta: Meta<typeof TopNav> = {
  title: 'Navigation/TopNav',
  component: TopNav,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A responsive top navigation bar component with support for:
- Brand/logo
- Navigation items with dropdowns
- Right-side actions
- Mobile responsiveness
- Dark mode
- Keyboard navigation
- ARIA compliance
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TopNav>;

const sampleItems = [
  {
    id: 'home',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    id: 'team',
    label: 'Team',
    icon: <UserGroupIcon />,
    children: [
      {
        id: 'members',
        label: 'Members',
        icon: <UserGroupIcon />,
      },
      {
        id: 'projects',
        label: 'Projects',
        icon: <FolderIcon />,
      },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Cog6ToothIcon />,
    disabled: true,
  },
];

const sampleActions = (
  <div className="flex items-center space-x-4">
    <button
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150"
      aria-label="Notifications"
    >
      <BellIcon className="w-6 h-6" />
    </button>
    <button
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150"
      aria-label="Profile"
    >
      <UserCircleIcon className="w-6 h-6" />
    </button>
  </div>
);

export const Default: Story = {
  args: {
    brand: (
      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
        Logo
      </div>
    ),
    items: sampleItems,
    actions: sampleActions,
  },
};

export const WithoutMobileMenu: Story = {
  args: {
    brand: (
      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
        Logo
      </div>
    ),
    items: sampleItems,
    actions: sampleActions,
    showMobileMenu: false,
  },
};

export const MinimalNav: Story = {
  args: {
    brand: (
      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
        Logo
      </div>
    ),
    items: sampleItems.slice(0, 2),
  },
};

export const WithCustomStyling: Story = {
  args: {
    brand: (
      <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
        Custom
      </div>
    ),
    items: sampleItems,
    actions: sampleActions,
    className: 'bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900',
  },
}; 