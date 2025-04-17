import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from './index';
import { CheckCircleIcon, ClockIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { TimelineItem } from './types';

const meta: Meta<typeof Timeline> = {
  title: 'Data Display/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact'],
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    showConnectors: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

const defaultItems: TimelineItem[] = [
  {
    id: '1',
    title: 'Project Started',
    description: 'Initial setup and planning phase',
    date: '2024-01-01',
    status: 'completed',
    icon: <CheckCircleIcon className="h-4 w-4" />,
  },
  {
    id: '2',
    title: 'Development Phase',
    description: 'Core features implementation',
    date: '2024-02-15',
    status: 'in-progress',
    icon: <ClockIcon className="h-4 w-4" />,
  },
  {
    id: '3',
    title: 'Testing Phase',
    description: 'QA and bug fixing',
    date: '2024-03-30',
    status: 'upcoming',
    icon: <ExclamationCircleIcon className="h-4 w-4" />,
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    variant: 'default',
    orientation: 'vertical',
    showConnectors: true,
  },
};

export const Compact: Story = {
  args: {
    items: defaultItems,
    variant: 'compact',
    orientation: 'vertical',
    showConnectors: true,
  },
};

export const Horizontal: Story = {
  args: {
    items: defaultItems,
    variant: 'default',
    orientation: 'horizontal',
    showConnectors: true,
  },
};

export const WithoutConnectors: Story = {
  args: {
    items: defaultItems,
    variant: 'default',
    orientation: 'vertical',
    showConnectors: false,
  },
};

export const MixedStatus: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Completed Task',
        description: 'This task has been completed successfully',
        date: '2024-01-01',
        status: 'completed',
      },
      {
        id: '2',
        title: 'In Progress Task',
        description: 'Currently working on this task',
        date: '2024-02-15',
        status: 'in-progress',
      },
      {
        id: '3',
        title: 'Upcoming Task',
        description: 'This task is planned for the future',
        date: '2024-03-30',
        status: 'upcoming',
      },
    ],
    variant: 'default',
    orientation: 'vertical',
    showConnectors: true,
  },
}; 