import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './index';

const meta: Meta<typeof ProgressBar> = {
  title: 'Data Display/Progress Bar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    max: {
      control: { type: 'number', min: 1 },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
    },
    showLabel: {
      control: 'boolean',
    },
    labelPosition: {
      control: 'select',
      options: ['top', 'bottom', 'inside'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 75,
    size: 'md',
    variant: 'default',
    showLabel: true,
    labelPosition: 'top',
  },
};

export const Small: Story = {
  args: {
    value: 50,
    size: 'sm',
    variant: 'default',
    showLabel: true,
    labelPosition: 'top',
  },
};

export const Large: Story = {
  args: {
    value: 90,
    size: 'lg',
    variant: 'default',
    showLabel: true,
    labelPosition: 'top',
  },
};

export const Success: Story = {
  args: {
    value: 100,
    size: 'md',
    variant: 'success',
    showLabel: true,
    labelPosition: 'top',
  },
};

export const Warning: Story = {
  args: {
    value: 60,
    size: 'md',
    variant: 'warning',
    showLabel: true,
    labelPosition: 'top',
  },
};

export const Error: Story = {
  args: {
    value: 30,
    size: 'md',
    variant: 'error',
    showLabel: true,
    labelPosition: 'top',
  },
};

export const LabelInside: Story = {
  args: {
    value: 45,
    size: 'md',
    variant: 'default',
    showLabel: true,
    labelPosition: 'inside',
  },
};

export const LabelBottom: Story = {
  args: {
    value: 80,
    size: 'md',
    variant: 'default',
    showLabel: true,
    labelPosition: 'bottom',
  },
};

export const WithoutLabel: Story = {
  args: {
    value: 70,
    size: 'md',
    variant: 'default',
    showLabel: false,
  },
};

export const CustomMax: Story = {
  args: {
    value: 150,
    max: 200,
    size: 'md',
    variant: 'default',
    showLabel: true,
    labelPosition: 'top',
  },
}; 