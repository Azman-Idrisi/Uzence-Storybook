// src/components/ColorSystem/ColorUsageGuide.tsx
import React from 'react';
import { colorTokens } from '../../styles/tokens/colors';

interface ColorUsageExampleProps {
  title: string;
  description: string;
  doExample: React.ReactNode;
  dontExample: React.ReactNode;
}

const ColorUsageExample: React.FC<ColorUsageExampleProps> = ({
  title,
  description,
  doExample,
  dontExample,
}) => {
  return (
    <div className="mb-12 border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-50 p-4 border-b border-gray-200">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-200">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="ml-2 font-medium">Do</span>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            {doExample}
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="ml-2 font-medium">Don't</span>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            {dontExample}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ColorUsageGuideProps {
  theme?: 'light' | 'dark';
}

export const ColorUsageGuide: React.FC<ColorUsageGuideProps> = ({ theme = 'light' }) => {
  const tokens = colorTokens[theme];
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Color Usage Guidelines</h1>
      <p className="text-gray-600 mb-8">These guidelines demonstrate how to effectively use the color system in your B2B enterprise application.</p>
      
      <ColorUsageExample
        title="Primary Actions"
        description="Use primary colors for main CTAs and the most important actions."
        doExample={
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              <button style={{backgroundColor: tokens.primary.base, color: tokens.primary.contrast}} className="px-4 py-2 rounded-md">Save Changes</button>
              <button style={{backgroundColor: tokens.background.surface, color: tokens.text.primary, border: `1px solid ${tokens.border.default}`}} className="px-4 py-2 rounded-md">Cancel</button>
            </div>
            <p className="text-sm text-gray-500 mt-2">Primary button clearly stands out as the main action</p>
          </div>
        }
        dontExample={
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              <button style={{backgroundColor: tokens.primary.base, color: tokens.primary.contrast}} className="px-4 py-2 rounded-md">Save</button>
              <button style={{backgroundColor: tokens.secondary.base, color: tokens.secondary.contrast}} className="px-4 py-2 rounded-md">Submit</button>
              <button style={{backgroundColor: tokens.tertiary.base, color: tokens.tertiary.contrast}} className="px-4 py-2 rounded-md">Publish</button>
            </div>
            <p className="text-sm text-gray-500 mt-2">Multiple competing primary-styled buttons create confusion</p>
          </div>
        }
      />
      
      <ColorUsageExample
        title="Semantic Color Usage"
        description="Use semantic colors consistently to communicate status and feedback."
        doExample={
          <div className="space-y-4">
            <div style={{backgroundColor: tokens.success.lightest, border: `1px solid ${tokens.success.light}`, color: tokens.success.dark}} className="p-3 rounded-md">
              <div className="font-medium">Success Message</div>
              <div className="text-sm">Your changes have been saved successfully.</div>
            </div>
            <div style={{backgroundColor: tokens.error.lightest, border: `1px solid ${tokens.error.light}`, color: tokens.error.dark}} className="p-3 rounded-md">
              <div className="font-medium">Error Message</div>
              <div className="text-sm">There was a problem saving your changes.</div>
            </div>
          </div>
        }
        dontExample={
          <div className="space-y-4">
            <div style={{backgroundColor: tokens.primary.lightest, border: `1px solid ${tokens.primary.light}`, color: tokens.primary.dark}} className="p-3 rounded-md">
              <div className="font-medium">Success Message</div>
              <div className="text-sm">Your changes have been saved successfully.</div>
            </div>
            <div style={{backgroundColor: tokens.secondary.lightest, border: `1px solid ${tokens.secondary.light}`, color: tokens.secondary.dark}} className="p-3 rounded-md">
              <div className="font-medium">Error Message</div>
              <div className="text-sm">There was a problem saving your changes.</div>
            </div>
          </div>
        }
      />
      
      <ColorUsageExample
        title="Text Hierarchy"
        description="Use text color variations to establish clear content hierarchy."
        doExample={
          <div className="space-y-4">
            <h3 style={{color: tokens.text.primary}} className="text-lg font-medium">Account Settings</h3>
            <p style={{color: tokens.text.secondary}} className="text-base">
              Configure your account preferences and notification settings.
            </p>
            <p style={{color: tokens.text.tertiary}} className="text-sm">
              Last updated: April 18, 2025
            </p>
          </div>
        }
        dontExample={
          <div className="space-y-4">
            <h3 style={{color: tokens.text.primary}} className="text-lg font-medium">Account Settings</h3>
            <p style={{color: tokens.text.primary}} className="text-base">
              Configure your account preferences and notification settings.
            </p>
            <p style={{color: tokens.text.primary}} className="text-sm">
              Last updated: April 18, 2025
            </p>
          </div>
        }
      />
      
      <ColorUsageExample
        title="Form Validation"
        description="Use semantic colors consistently for form validation states."
        doExample={
          <div className="space-y-6">
            <div>
              <label style={{color: tokens.text.primary}} className="block text-sm font-medium mb-1">Email</label>
              <input type="text" className="w-full p-2 border rounded-md" style={{borderColor: tokens.border.default}} />
            </div>
            <div>
              <label style={{color: tokens.error.base}} className="block text-sm font-medium mb-1">Password</label>
              <input type="password" className="w-full p-2 border rounded-md" style={{borderColor: tokens.error.base}} />
              <p style={{color: tokens.error.base}} className="mt-1 text-sm">Password must be at least 8 characters</p>
            </div>
          </div>
        }
        dontExample={
          <div className="space-y-6">
            <div>
              <label style={{color: tokens.text.primary}} className="block text-sm font-medium mb-1">Email</label>
              <input type="text" className="w-full p-2 border rounded-md" style={{borderColor: tokens.border.default}} />
            </div>
            <div>
              <label style={{color: tokens.primary.base}} className="block text-sm font-medium mb-1">Password</label>
              <input type="password" className="w-full p-2 border rounded-md" style={{borderColor: tokens.primary.base}} />
              <p style={{color: tokens.primary.base}} className="mt-1 text-sm">Password must be at least 8 characters</p>
            </div>
          </div>
        }
      />
      
      <ColorUsageExample
        title="Data Visualization"
        description="Use consistent color schemes for data visualization and maintain accessibility."
        doExample={
          <div className="space-y-2">
            <div className="flex items-center">
              <div style={{backgroundColor: tokens.primary.base}} className="w-16 h-6 mr-2 rounded"></div>
              <span>Current Month</span>
            </div>
            <div className="flex items-center">
              <div style={{backgroundColor: tokens.secondary.base}} className="w-16 h-6 mr-2 rounded"></div>
              <span>Previous Month</span>
            </div>
            <div className="flex items-center">
              <div style={{backgroundColor: tokens.tertiary.base}} className="w-16 h-6 mr-2 rounded"></div>
              <span>Target</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">Colors are distinct and labeled</p>
          </div>
        }
        dontExample={
          <div className="space-y-2">
            <div className="flex items-center">
              <div style={{backgroundColor: tokens.primary.base}} className="w-16 h-6 mr-2 rounded"></div>
              <span>Series 1</span>
            </div>
            <div className="flex items-center">
              <div style={{backgroundColor: tokens.primary.light}} className="w-16 h-6 mr-2 rounded"></div>
              <span>Series 2</span>
            </div>
            <div className="flex items-center">
              <div style={{backgroundColor: tokens.primary.lighter}} className="w-16 h-6 mr-2 rounded"></div>
              <span>Series 3</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">Too similar colors make differentiation difficult</p>
          </div>
        }
      />
      
      <ColorUsageExample
        title="Color with Text"
        description="Always ensure sufficient contrast for text legibility."
        doExample={
          <div className="space-y-4">
            <div style={{backgroundColor: tokens.primary.base}} className="p-4 rounded-md">
              <p style={{color: tokens.primary.contrast}} className="font-medium">High contrast text on primary background</p>
            </div>
            <div style={{backgroundColor: tokens.background.surface}} className="p-4 rounded-md">
              <p style={{color: tokens.text.primary}} className="font-medium">High contrast text on light background</p>
            </div>
          </div>
        }
        dontExample={
          <div className="space-y-4">
            <div style={{backgroundColor: tokens.primary.base}} className="p-4 rounded-md">
              <p style={{color: tokens.primary.light}} className="font-medium">Low contrast text on primary background</p>
            </div>
            <div style={{backgroundColor: tokens.background.surface}} className="p-4 rounded-md">
              <p style={{color: tokens.text.tertiary}} className="font-medium">Low contrast text on light background</p>
            </div>
          </div>
        }
      />
    </div>
  );
};

// Stories for Color Usage Guide
// src/components/ColorSystem/ColorUsageGuide.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

const metaUsage = {
  title: 'Design System/Colors/Usage Guidelines',
  component: ColorUsageGuide,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Color Usage Guidelines

This guide demonstrates best practices for using the color system in your B2B enterprise application.
It provides visual examples of correct and incorrect usage of colors to help maintain consistency,
accessibility, and proper visual hierarchy throughout your interface.

## Key Principles

1. **Consistency**: Use colors consistently to establish patterns that users can recognize
2. **Hierarchy**: Use color to establish visual hierarchy and guide users' attention
3. **Meaning**: Use semantic colors to convey specific meanings (success, error, etc.)
4. **Accessibility**: Ensure sufficient contrast for all text and interactive elements
5. **Restraint**: Limit the number of colors used in a single view to prevent visual overload
        `,
      },
    },
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
  },
} satisfies Meta<typeof ColorUsageGuide>;

export default metaUsage;
type StoryUsage = StoryObj<typeof ColorUsageGuide>;

export const LightThemeUsage: StoryUsage = {
  args: {
    theme: 'light',
  },
};

export const DarkThemeUsage: StoryUsage = {
  args: {
    theme: 'dark',
  },
};