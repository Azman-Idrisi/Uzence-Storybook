import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'The placement of the tooltip',
      table: {
        defaultValue: { summary: 'top' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'light'],
      description: 'The visual style of the tooltip',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// Base tooltip story
export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <Button>Hover me</Button>,
  },
};

// Placement variants
export const Placements: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-8">
      <Tooltip content="Top placement" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Bottom placement" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Left placement" placement="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip content="Right placement" placement="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
};

// Theme variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-8">
      <Tooltip content="Default variant" variant="default">
        <Button>Default</Button>
      </Tooltip>
      <Tooltip content="Light variant" variant="light">
        <Button>Light</Button>
      </Tooltip>
    </div>
  ),
};

// With delay
export const WithDelay: Story = {
  args: {
    content: 'This tooltip appears after 500ms',
    delay: 500,
    children: <Button>Hover me (with delay)</Button>,
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    content: 'This tooltip is disabled',
    disabled: true,
    children: <Button>Disabled tooltip</Button>,
  },
};

// Complex content
export const ComplexContent: Story = {
  args: {
    content: (
      <div className="flex flex-col gap-1">
        <span className="font-bold">Complex Tooltip</span>
        <span className="text-sm">With multiple lines and formatting</span>
      </div>
    ),
    children: <Button>Complex content</Button>,
  },
}; 