import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './index';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Data Display/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile accordion component that allows users to show and hide content sections.

### Features
- Multiple variants (default, bordered, filled)
- Different sizes (sm, md, lg)
- Support for single or multiple expanded items
- Keyboard accessible
- Dark mode support
- Disabled state support
- Customizable content

### Accessibility
- Uses proper ARIA attributes for screen readers
- Keyboard navigation support (Enter/Space to toggle)
- Focus management
- Proper heading structure
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'filled'],
      description: 'Visual style of the accordion',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the accordion items',
    },
    allowMultiple: {
      control: 'boolean',
      description: 'Allow multiple items to be expanded at once',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const sampleItems = [
  {
    id: '1',
    title: 'What is an accordion?',
    content: 'An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content.',
  },
  {
    id: '2',
    title: 'How to use this component',
    content: 'Simply pass an array of items with id, title, and content. You can control the expanded state, allow multiple items to be open, and customize the appearance.',
  },
  {
    id: '3',
    title: 'Accessibility considerations',
    content: 'This component is built with accessibility in mind, supporting keyboard navigation, proper ARIA attributes, and screen reader compatibility.',
    disabled: true,
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    variant: 'default',
    size: 'md',
    allowMultiple: false,
  },
};

export const Bordered: Story = {
  args: {
    items: sampleItems,
    variant: 'bordered',
    size: 'md',
    allowMultiple: true,
  },
};

export const Filled: Story = {
  args: {
    items: sampleItems,
    variant: 'filled',
    size: 'md',
    allowMultiple: false,
  },
};

export const Small: Story = {
  args: {
    items: sampleItems,
    variant: 'default',
    size: 'sm',
    allowMultiple: false,
  },
};

export const Large: Story = {
  args: {
    items: sampleItems,
    variant: 'default',
    size: 'lg',
    allowMultiple: false,
  },
};

export const WithDefaultExpanded: Story = {
  args: {
    items: sampleItems,
    variant: 'default',
    size: 'md',
    allowMultiple: false,
    defaultExpandedIds: ['1'],
  },
}; 