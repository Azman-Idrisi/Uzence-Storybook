// src/components/Tag/Tag.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Tag, type TagProps } from './Tag';
import { Check, X, AlertTriangle, Info } from 'lucide-react';

type Story = StoryObj<typeof Tag>;

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'error', 'warning'] as const,
      description: 'The visual style of the tag',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'] as const,
      description: 'The size of the tag',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tag is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'The content of the tag',
    },
    icon: {
      control: 'select',
      options: ['none', 'check', 'x', 'alertTriangle', 'info'],
      mapping: {
        none: undefined,
        check: Check,
        x: X,
        alertTriangle: AlertTriangle,
        info: Info,
      },
      description: 'Icon to display before the text',
    },
    trailingIcon: {
      control: 'select',
      options: ['none', 'check', 'x', 'alertTriangle', 'info'],
      mapping: {
        none: undefined,
        check: Check,
        x: X,
        alertTriangle: AlertTriangle,
        info: Info,
      },
      description: 'Icon to display after the text',
    }
  },
};

export default meta;

// Base Tag story
export const Default: Story = {
  args: {
    children: 'Tag',
    variant: 'primary',
    size: 'medium',
  } as TagProps,
};

// Variants showcase
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tag variant="primary">Primary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="warning">Warning</Tag>
    </div>
  ),
};

// Sizes showcase
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Tag size="small">Small</Tag>
      <Tag size="medium">Medium</Tag>
      <Tag size="large">Large</Tag>
    </div>
  ),
};

// Icons showcase
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tag icon={Info}>With Info Icon</Tag>
      <Tag variant="success" icon={Check}>Completed</Tag>
      <Tag variant="error" icon={X}>Rejected</Tag>
      <Tag variant="warning" icon={AlertTriangle}>Warning</Tag>
      <Tag trailingIcon={X}>Dismissible</Tag>
    </div>
  ),
};

// States showcase
export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tag>Default State</Tag>
      <Tag disabled>Disabled State</Tag>
    </div>
  ),
};

// Combined example
export const ExampleUsage: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Status Tags:</h3>
        <div className="flex flex-wrap gap-2">
          <Tag variant="success" icon={Check} size="small">Active</Tag>
          <Tag variant="error" icon={X} size="small">Failed</Tag>
          <Tag variant="warning" icon={AlertTriangle} size="small">Pending</Tag>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Categories:</h3>
        <div className="flex flex-wrap gap-2">
          <Tag>Design</Tag>
          <Tag>Development</Tag>
          <Tag>Marketing</Tag>
          <Tag disabled>Archived</Tag>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Interactive:</h3>
        <div className="flex flex-wrap gap-2">
          <Tag trailingIcon={X} onClick={() => console.log('Remove tag')}>Removable Tag</Tag>
        </div>
      </div>
    </div>
  ),
};