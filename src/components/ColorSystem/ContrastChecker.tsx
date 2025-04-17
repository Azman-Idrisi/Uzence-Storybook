import React, { useState } from 'react';
import { basePalette } from '../../styles/tokens/colors';

// Function to calculate contrast ratio
const calculateContrastRatio = (foreground: string, background: string): number => {
  // Convert hex to RGB
  const hexToRgb = (hex: string): number[] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16),
        ]
      : [0, 0, 0];
  };
  // Calculate relative luminance
  const luminance = (rgb: number[]): number => {
    const a = rgb.map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };
  const rgb1 = hexToRgb(foreground);
  const rgb2 = hexToRgb(background);
  const l1 = luminance(rgb1);
  const l2 = luminance(rgb2);
  
  const ratio = l1 > l2 
    ? (l1 + 0.05) / (l2 + 0.05)
    : (l2 + 0.05) / (l1 + 0.05);
  
  return Math.round(ratio * 100) / 100;
};

// Function to determine WCAG compliance level
const getComplianceLevel = (ratio: number): string => {
  if (ratio >= 7) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  if (ratio >= 3) return 'AA Large';
  return 'Fail';
};

// Function to get text color for contrast display
const getContrastColor = (level: string): string => {
  switch (level) {
    case 'AAA': return '#166534'; // green-800
    case 'AA': return '#047857'; // emerald-700
    case 'AA Large': return '#92400e'; // amber-700
    default: return '#b91c1c'; // red-700
  }
};

interface ContrastCheckerProps {
  defaultForeground?: string;
  defaultBackground?: string;
}

export const ContrastChecker: React.FC<ContrastCheckerProps> = ({
  defaultForeground = basePalette.blue[600],
  defaultBackground = basePalette.neutral[0],
}) => {
  const [foreground, setForeground] = useState(defaultForeground);
  const [background, setBackground] = useState(defaultBackground);
  const [foregroundCustom, setForegroundCustom] = useState('');
  const [backgroundCustom, setBackgroundCustom] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  
  // Calculate contrast ratio
  const ratio = calculateContrastRatio(foreground, background);
  const complianceLevel = getComplianceLevel(ratio);
  const contrastColor = getContrastColor(complianceLevel);
  
  // Generate color options for dropdowns
  const colorOptions = Object.entries(basePalette).flatMap(([colorName, shades]) => 
    Object.entries(shades).map(([shadeName, value]) => ({
      label: `${colorName}-${shadeName}`,
      value,
    }))
  );
  
  const handleCustomToggle = () => {
    setShowCustomInput(!showCustomInput);
    if (!showCustomInput) {
      setForegroundCustom(foreground);
      setBackgroundCustom(background);
    } else {
      // Validate custom colors
      const isValidHex = (color: string) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
      
      if (isValidHex(foregroundCustom)) {
        setForeground(foregroundCustom);
      }
      
      if (isValidHex(backgroundCustom)) {
        setBackground(backgroundCustom);
      }
    }
  };

  // Helper to display sample text with the selected colors
  const SampleText = () => (
    <div 
      className="p-6 rounded-lg shadow-sm mb-6"
      style={{ backgroundColor: background }}
    >
      <p style={{ color: foreground, fontSize: '1.5rem', fontWeight: 'bold' }}>
        Sample Text
      </p>
      <p style={{ color: foreground }}>
        This is a sample text showcasing the contrast between the selected colors.
      </p>
    </div>
  );

  // Helper to display the compliance badge
  const ComplianceBadge = () => (
    <div className="flex items-center mb-4">
      <div 
        className="px-3 py-1 rounded-full font-semibold text-white"
        style={{ backgroundColor: contrastColor }}
      >
        {complianceLevel}
      </div>
      <div className="ml-2 text-lg font-medium">
        Ratio: {ratio}:1
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Color Contrast Checker</h2>
      
      <SampleText />
      <ComplianceBadge />
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">WCAG Guidelines</h3>
        <ul className="space-y-1 text-sm">
          <li><span className="font-semibold">AAA:</span> Contrast ratio of at least 7:1</li>
          <li><span className="font-semibold">AA:</span> Contrast ratio of at least 4.5:1</li>
          <li><span className="font-semibold">AA Large:</span> Contrast ratio of at least 3:1 for large text</li>
        </ul>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Foreground Color Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Foreground Color (Text)
          </label>
          
          {showCustomInput ? (
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              placeholder="#000000"
              value={foregroundCustom}
              onChange={(e) => setForegroundCustom(e.target.value)}
            />
          ) : (
            <select
              className="w-full p-2 border rounded mb-2"
              value={foreground}
              onChange={(e) => setForeground(e.target.value)}
            >
              {colorOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
          
          <div 
            className="h-8 w-full rounded mb-2" 
            style={{ backgroundColor: showCustomInput ? foregroundCustom : foreground }}
          />
        </div>
        
        {/* Background Color Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Background Color
          </label>
          
          {showCustomInput ? (
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              placeholder="#FFFFFF"
              value={backgroundCustom}
              onChange={(e) => setBackgroundCustom(e.target.value)}
            />
          ) : (
            <select
              className="w-full p-2 border rounded mb-2"
              value={background}
              onChange={(e) => setBackground(e.target.value)}
            >
              {colorOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
          
          <div 
            className="h-8 w-full rounded mb-2" 
            style={{ backgroundColor: showCustomInput ? backgroundCustom : background }}
          />
        </div>
      </div>
      
      <div className="mt-4">
        <button
          onClick={handleCustomToggle}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          {showCustomInput ? 'Use Palette Colors' : 'Enter Custom Colors'}
        </button>
      </div>
      
      <div className="mt-8 text-sm text-gray-600">
        <p>
          This tool helps ensure your color combinations meet WCAG 2.1 accessibility standards.
          For text to be accessible, it should have sufficient contrast with its background.
        </p>
      </div>
    </div>
  );
};