import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  HomeIcon,
  FolderIcon,
  DocumentIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';
import Breadcrumbs from './index';
import { ThemeProvider } from '../../../theme/ThemeProvider';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A modern, accessible breadcrumb navigation component that supports:
- Icons for each breadcrumb item
- Custom separators
- Truncation for long paths
- Dark mode support
- Hover animations
- Full keyboard navigation
- ARIA compliance
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-full max-w-4xl p-4">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const defaultItems = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    icon: <HomeIcon className="w-4 h-4" />,
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '/projects',
    icon: <FolderIcon className="w-4 h-4" />,
  },
  {
    id: 'design-system',
    label: 'Design System',
    href: '/projects/design-system',
    icon: <DocumentIcon className="w-4 h-4" />,
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    onItemClick: (item) => console.log('Clicked:', item),
  },
};

export const WithCustomSeparator: Story = {
  args: {
    items: defaultItems,
    separator: <ChevronDoubleRightIcon className="w-3 h-3" />,
    onItemClick: (item) => console.log('Clicked:', item),
  },
};

export const WithTruncation: Story = {
  args: {
    items: [
      ...defaultItems,
      {
        id: 'components',
        label: 'Components',
        href: '/projects/design-system/components',
        icon: <FolderIcon className="w-4 h-4" />,
      },
      {
        id: 'navigation',
        label: 'Navigation',
        href: '/projects/design-system/components/navigation',
        icon: <FolderIcon className="w-4 h-4" />,
      },
      {
        id: 'breadcrumbs',
        label: 'Breadcrumbs',
        href: '/projects/design-system/components/navigation/breadcrumbs',
        icon: <DocumentIcon className="w-4 h-4" />,
      },
    ],
    maxItems: 3,
    onItemClick: (item) => console.log('Clicked:', item),
  },
};

export const WithoutIcons: Story = {
  args: {
    items: defaultItems.map(({ id, label, href }) => ({ id, label, href })),
    onItemClick: (item) => console.log('Clicked:', item),
  },
}; 