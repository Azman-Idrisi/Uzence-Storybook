import type { Meta, StoryObj } from '@storybook/react';
import TreeView from './index';
import { FolderIcon, DocumentIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof TreeView> = {
  title: 'Components/TreeView',
  component: TreeView,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A fully accessible TreeView component with keyboard navigation and ARIA support.

### Features
- Expandable/collapsible tree structure
- Keyboard navigation (arrow keys, Enter/Space)
- Checkbox support
- Light/Dark mode
- Custom icons
- ARIA roles and attributes
- Responsive design
- Smooth animations

### Keyboard Navigation
- \`ArrowRight\`: Expand node
- \`ArrowLeft\`: Collapse node
- \`Enter\` or \`Space\`: Toggle node
- \`Tab\`: Navigate between nodes
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TreeView>;

const sampleData = [
  {
    id: '1',
    label: 'Documents',
    icon: <FolderIcon className="w-4 h-4" />,
    children: [
      {
        id: '1-1',
        label: 'Work',
        icon: <FolderIcon className="w-4 h-4" />,
        children: [
          {
            id: '1-1-1',
            label: 'Project A',
            icon: <DocumentIcon className="w-4 h-4" />,
          },
          {
            id: '1-1-2',
            label: 'Project B',
            icon: <DocumentIcon className="w-4 h-4" />,
          },
        ],
      },
      {
        id: '1-2',
        label: 'Personal',
        icon: <FolderIcon className="w-4 h-4" />,
        children: [
          {
            id: '1-2-1',
            label: 'Resume',
            icon: <DocumentIcon className="w-4 h-4" />,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    label: 'Downloads',
    icon: <FolderIcon className="w-4 h-4" />,
    children: [
      {
        id: '2-1',
        label: 'Images',
        icon: <FolderIcon className="w-4 h-4" />,
      },
    ],
  },
];

export const Default: Story = {
  args: {
    data: sampleData,
    ariaLabel: 'File Explorer',
  },
};

export const WithCheckboxes: Story = {
  args: {
    data: sampleData,
    showCheckboxes: true,
    ariaLabel: 'File Explorer with Checkboxes',
  },
};

export const DarkMode: Story = {
  args: {
    data: sampleData,
    ariaLabel: 'File Explorer Dark Mode',
  },
  parameters: {
    themes: {
      defaultTheme: 'dark',
    },
  },
};

export const CustomStyling: Story = {
  args: {
    data: sampleData,
    className: 'w-96 h-96 overflow-auto',
    ariaLabel: 'Custom Styled File Explorer',
  },
}; 