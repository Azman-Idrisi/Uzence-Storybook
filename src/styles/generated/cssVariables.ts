// src/styles/generated/cssVariables.ts
import { colorTokens, ThemeMode, generateColorCSSVariables } from '../tokens/colors';
import fs from 'fs';
import path from 'path';

// Generate CSS variables for both themes
const lightThemeCSS = generateColorCSSVariables('light');
const darkThemeCSS = generateColorCSSVariables('dark');

// Combined CSS with dark mode
const combinedCSS = `${lightThemeCSS}

.dark {
${darkThemeCSS.split('\n').slice(1, -1).map(line => `  ${line}`).join('\n')}
}`;

// Ensure directory exists
const outputDir = path.resolve(__dirname, '../generated');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write to CSS file
fs.writeFileSync(
  path.join(outputDir, 'colors.css'),
  combinedCSS
);

// Create a JavaScript module for easy importing
const jsModule = `// Auto-generated color definitions
// Do not edit manually

module.exports = {
  colors: ${JSON.stringify(colorTokens, null, 2)}
};
`;

fs.writeFileSync(
  path.join(outputDir, 'colors.js'),
  jsModule
);

console.log('✅ Color CSS variables and JS module generated successfully!');