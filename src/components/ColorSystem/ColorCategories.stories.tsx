// src/components/ColorSystem/ColorCategories.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { colorTokens } from '../../styles/tokens/colors';

interface ColorCategoryShowcaseProps {
  category: string;
  theme: 'light' | 'dark';
  title?: string;
  description?: string;
}

const ColorCategoryShowcase: React.FC<ColorCategoryShowcaseProps> = ({ 
  category, 
  theme = 'light',
  title,
  description 
}) => {
  // @ts-ignore: Dynamic accessing of token categories
  const colors = colorTokens[theme][category];
  
  if (!colors) {
    return <div>Invalid color category</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{title || category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      {description && <p className="text-gray-600 mb-6">{description}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(colors).map(([name, value]) => (
          <div key={name} className="border border-gray-200 rounded-md overflow-hidden">
            <div 
              className="h-24 w-full" 
              style={{ backgroundColor: value as string }}
            />
            <div className="p-4 bg-white">
              <div className="font-medium">{name}</div>
              <div className="text-sm text-gray-500 mt-1">{String(value)}</div>
              <div className="mt-3 text-sm">
                <code className="bg-gray-100 px-2 py-1 rounded text-xs">{`text-${category}-${name}`}</code>
                <code className="bg-gray-100 px-2 py-1 rounded text-xs ml-2">{`bg-${category}-${name}`}</code>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const meta = {
  title: 'Design System/Colors/Categories',
  component: ColorCategoryShowcase,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    category: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'background', 'surface', 'border', 'text', 'success', 'info', 'warning', 'error'],
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
  },
} satisfies Meta<typeof ColorCategoryShowcase>;

export default meta;
type Story = StoryObj<typeof ColorCategoryShowcase>;

// Brand color stories
export const PrimaryColors: Story = {
  args: {
    category: 'primary',
    theme: 'light',
    title: 'Primary Colors',
    description: 'Primary colors represent the main brand colors and should be used for primary actions, key UI elements, and main navigation items.',
  },
};

export const SecondaryColors: Story = {
  args: {
    category: 'secondary',
    theme: 'light',
    title: 'Secondary Colors',
    description: 'Secondary colors complement the primary palette and should be used for secondary actions, supporting UI elements, and visual variety.',
  },
};

export const TertiaryColors: Story = {
  args: {
    category: 'tertiary',
    theme: 'light',
    title: 'Tertiary Colors',
    description: 'Tertiary colors provide additional accent colors for charts, graphs, and visual differentiation where needed.',
  },
};

// UI color stories
export const BackgroundColors: Story = {
  args: {
    category: 'background',
    theme: 'light',
    title: 'Background Colors',
    description: 'Background colors define the base canvas of different sections of the application.',
  },
};

export const SurfaceColors: Story = {
  args: {
    category: 'surface',
    theme: 'light',
    title: 'Surface Colors',
    description: 'Surface colors define the background of components and containers like cards, modals, and panels.',
  },
};

export const BorderColors: Story = {
  args: {
    category: 'border',
    theme: 'light',
    title: 'Border Colors',
    description: 'Border colors establish visual boundaries between elements and provide structure to the interface.',
  },
};

export const TextColors: Story = {
  args: {
    category: 'text',
    theme: 'light',
    title: 'Text Colors',
    description: 'Text colors ensure proper readability and hierarchy of content throughout the application.',
  },
};

// Semantic color stories
export const SuccessColors: Story = {
  args: {
    category: 'success',
    theme: 'light',
    title: 'Success Colors',
    description: 'Success colors indicate positive outcomes, successful operations, and approvals. Use these for confirmation messages, completed steps, and positive feedback.',
  },
};

export const InfoColors: Story = {
  args: {
    category: 'info',
    theme: 'light',
    title: 'Info Colors',
    description: 'Info colors are used for neutral informational content, system messages, and general guidance. They should feel helpful without urgency.',
  },
};

export const WarningColors: Story = {
  args: {
    category: 'warning',
    theme: 'light',
    title: 'Warning Colors',
    description: 'Warning colors indicate potential issues that require attention but are not critical. Use for alerts that do not prevent operations but need awareness.',
  },
};

export const ErrorColors: Story = {
  args: {
    category: 'error',
    theme: 'light',
    title: 'Error Colors',
    description: 'Error colors signify critical issues, failures, and problems that need immediate attention. Use for validation errors, failed operations, and destructive actions.',
  },
};