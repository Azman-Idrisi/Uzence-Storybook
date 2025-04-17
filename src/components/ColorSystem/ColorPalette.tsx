// src/components/ColorSystem/ColorPalette.tsx
import React from 'react';
import { basePalette, colorTokens, accessibilityGuidelines } from '../../styles/tokens/colors';

interface ColorSwatchProps {
  color: string;
  name: string;
  value: string;
  textColor?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, name, value, textColor = 'text-black' }) => {
  return (
    <div className="flex flex-col">
      <div 
        className="h-16 w-full rounded-t-md flex items-end p-2" 
        style={{ backgroundColor: color }}
      />
      <div className="p-2 bg-white border border-t-0 border-gray-200 rounded-b-md">
        <div className="font-medium text-sm">{name}</div>
        <div className="text-xs text-gray-500">{value}</div>
      </div>
    </div>
  );
};

interface ColorCategoryProps {
  title: string;
  colors: Record<string, string>;
  description?: string;
}

const ColorCategory: React.FC<ColorCategoryProps> = ({ title, colors, description }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {Object.entries(colors).map(([name, value]) => (
          <ColorSwatch 
            key={name} 
            color={value} 
            name={name} 
            value={value}
          />
        ))}
      </div>
    </div>
  );
};

interface AccessibilityGuidelineProps {
  guidelines: typeof accessibilityGuidelines;
}

const AccessibilityGuidelines: React.FC<AccessibilityGuidelineProps> = ({ guidelines }) => {
  return (
    <div className="mb-8 bg-gray-50 p-4 rounded-md">
      <h2 className="text-xl font-bold mb-4">Accessibility Guidelines</h2>
      
      <h3 className="text-lg font-semibold mt-4">WCAG 2.1 AA</h3>
      <div className="ml-4 mb-4">
        <p><strong>Normal Text:</strong> {guidelines.wcagAA.normalText.minContrastRatio}:1 contrast ratio</p>
        <p className="text-sm text-gray-600">{guidelines.wcagAA.normalText.recommendation}</p>
        
        <p className="mt-2"><strong>Large Text:</strong> {guidelines.wcagAA.largeText.minContrastRatio}:1 contrast ratio</p>
        <p className="text-sm text-gray-600">{guidelines.wcagAA.largeText.recommendation}</p>
        
        <p className="mt-2"><strong>UI Components:</strong> {guidelines.wcagAA.uiComponents.minContrastRatio}:1 contrast ratio</p>
        <p className="text-sm text-gray-600">{guidelines.wcagAA.uiComponents.recommendation}</p>
      </div>
      
      <h3 className="text-lg font-semibold mt-4">WCAG 2.1 AAA</h3>
      <div className="ml-4 mb-4">
        <p><strong>Normal Text:</strong> {guidelines.wcagAAA.normalText.minContrastRatio}:1 contrast ratio</p>
        <p className="text-sm text-gray-600">{guidelines.wcagAAA.normalText.recommendation}</p>
        
        <p className="mt-2"><strong>Large Text:</strong> {guidelines.wcagAAA.largeText.minContrastRatio}:1 contrast ratio</p>
        <p className="text-sm text-gray-600">{guidelines.wcagAAA.largeText.recommendation}</p>
      </div>
      
      <h3 className="text-lg font-semibold mt-4">Color Use Guidelines</h3>
      <div className="ml-4">
        <ul className="list-disc list-inside">
          <li>{guidelines.colorUseGuidelines.colorBlindness}</li>
          <li>{guidelines.colorUseGuidelines.interactionStates}</li>
          <li>{guidelines.colorUseGuidelines.limitedPalette}</li>
        </ul>
      </div>
    </div>
  );
};

interface ColorPaletteProps {
  theme?: 'light' | 'dark';
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({ theme = 'light' }) => {
  const tokens = colorTokens[theme];
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Enterprise B2B Color System - {theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Base Color Palette</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(basePalette).map(([colorName, shades]) => (
            <div key={colorName} className="mb-4">
              <h3 className="text-lg font-semibold mb-2 capitalize">{colorName}</h3>
              <div className="grid grid-cols-5 gap-2">
                {Object.entries(shades).map(([shade, value]) => (
                  <div key={shade} className="flex flex-col items-center">
                    <div 
                      className="h-12 w-12 rounded-md mb-1" 
                      style={{ backgroundColor: value }}
                    />
                    <span className="text-xs">{shade}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ColorCategory 
        title="Primary Colors" 
        colors={tokens.primary}
        description="Primary colors should be used for main buttons, key highlighted elements, and the dominant brand color throughout the app."
      />
      
      <ColorCategory 
        title="Secondary Colors" 
        colors={tokens.secondary}
        description="Secondary colors should be used for supporting actions, secondary buttons, and to provide contrast with primary elements."
      />
      
      <ColorCategory 
        title="Tertiary Colors" 
        colors={tokens.tertiary}
        description="Tertiary colors should be used sparingly for accents, highlights, and to create visual variety."
      />
      
      <ColorCategory 
        title="Background Colors" 
        colors={tokens.background}
        description="Background colors define the base canvas of the application and different content areas."
      />
      
      <ColorCategory 
        title="Surface Colors" 
        colors={tokens.surface}
        description="Surface colors define container backgrounds for cards, modals, and other UI elements."
      />
      
      <ColorCategory 
        title="Border Colors" 
        colors={tokens.border}
        description="Border colors provide visual separation between elements and define boundaries."
      />
      
      <ColorCategory 
        title="Text Colors" 
        colors={tokens.text}
        description="Text colors ensure optimal readability with appropriate contrast on different backgrounds."
      />
      
      <h2 className="text-xl font-bold mb-4">Semantic Colors</h2>
      <p className="text-sm text-gray-600 mb-4">Semantic colors convey specific meanings and should be used consistently throughout the application for intuitive user experience.</p>
      
      <ColorCategory 
        title="Success" 
        colors={tokens.success}
        description="Use success colors for positive outcomes, completions, confirmations, and approvals."
      />
      
      <ColorCategory 
        title="Info" 
        colors={tokens.info}
        description="Use info colors for informational messages, tips, and general guidance."
      />
      
      <ColorCategory 
        title="Warning" 
        colors={tokens.warning}
        description="Use warning colors for alerts, indicating potential issues that require attention."
      />
      
      <ColorCategory 
        title="Error" 
        colors={tokens.error}
        description="Use error colors for critical issues, failures, required fields, and destructive actions."
      />
      
      <AccessibilityGuidelines guidelines={accessibilityGuidelines} />
    </div>
  );
};