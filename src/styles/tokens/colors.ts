// src/styles/tokens/colors.ts

// Define color palette with 10 shades per color
export const basePalette = {
    blue: {
      50: '#EBF5FF',
      100: '#D1E9FF',
      200: '#A8D1FF',
      300: '#7FB9FF',
      400: '#56A0FF',
      500: '#2D87FF',
      600: '#0062E0',
      700: '#004EBD',
      800: '#003A9A',
      900: '#002677',
    },
    teal: {
      50: '#EFFCF9',
      100: '#CEFAF0',
      200: '#9DF5E4',
      300: '#6CEFDC',
      400: '#3BE9D4',
      500: '#22D5C1',
      600: '#1AAFAD',
      700: '#148B8C',
      800: '#0E6A6A',
      900: '#084A4A',
    },
    amber: {
      50: '#FFF9EB',
      100: '#FFF0C6',
      200: '#FFE299',
      300: '#FFD26D',
      400: '#FFC240',
      500: '#FFA900',
      600: '#E69100',
      700: '#CC7A00',
      800: '#AD6200',
      900: '#8F4F00',
    },
    red: {
      50: '#FFF0F0',
      100: '#FFDEDE',
      200: '#FFBDBD',
      300: '#FF9797',
      400: '#FF7171',
      500: '#FF4C4C',
      600: '#E53535',
      700: '#CC2020',
      800: '#A61313',
      900: '#7F0909',
    },
    green: {
      50: '#EEFAF3',
      100: '#CFF2DE',
      200: '#A0E9BF',
      300: '#72DE9F',
      400: '#45D380',
      500: '#18C760',
      600: '#12A850',
      700: '#0E8A41',
      800: '#096C32',
      900: '#054F24',
    },
    purple: {
      50: '#F5F0FF',
      100: '#E6DEFF',
      200: '#CCBDFF',
      300: '#B39CFF',
      400: '#997AFF',
      500: '#7F58FF',
      600: '#6535E5',
      700: '#4F21C7',
      800: '#391588',
      900: '#260A66',
    },
    neutral: {
      0: '#FFFFFF',
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
      1000: '#000000',
    },
  };
  
  // Theme definitions (light and dark)
  export type ThemeMode = 'light' | 'dark';
  
  // Token structure
  export interface ColorTokens {
    // Brand colors
    primary: {
      [key: string]: string;
    };
    secondary: {
      [key: string]: string;
    };
    tertiary: {
      [key: string]: string;
    };
    
    // UI colors
    background: {
      [key: string]: string;
    };
    surface: {
      [key: string]: string;
    };
    border: {
      [key: string]: string;
    };
    text: {
      [key: string]: string;
    };
    
    // Semantic colors
    success: {
      [key: string]: string;
    };
    info: {
      [key: string]: string;
    };
    warning: {
      [key: string]: string;
    };
    error: {
      [key: string]: string;
    };
  }
  
  // Define theme-specific color tokens
  export const colorTokens: Record<ThemeMode, ColorTokens> = {
    light: {
      primary: {
        lightest: basePalette.blue[50],
        lighter: basePalette.blue[100],
        light: basePalette.blue[300],
        base: basePalette.blue[600],
        dark: basePalette.blue[700],
        darker: basePalette.blue[800],
        darkest: basePalette.blue[900],
        contrast: basePalette.neutral[0],
      },
      secondary: {
        lightest: basePalette.teal[50],
        lighter: basePalette.teal[100],
        light: basePalette.teal[300],
        base: basePalette.teal[600],
        dark: basePalette.teal[700],
        darker: basePalette.teal[800],
        darkest: basePalette.teal[900],
        contrast: basePalette.neutral[0],
      },
      tertiary: {
        lightest: basePalette.purple[50],
        lighter: basePalette.purple[100],
        light: basePalette.purple[300],
        base: basePalette.purple[600],
        dark: basePalette.purple[700],
        darker: basePalette.purple[800],
        darkest: basePalette.purple[900],
        contrast: basePalette.neutral[0],
      },
      background: {
        app: basePalette.neutral[50],
        card: basePalette.neutral[0],
        subtle: basePalette.neutral[100],
      },
      surface: {
        default: basePalette.neutral[0],
        raised: basePalette.neutral[0],
        overlay: basePalette.neutral[0],
        sunken: basePalette.neutral[50],
      },
      border: {
        subtle: basePalette.neutral[200],
        default: basePalette.neutral[300],
        strong: basePalette.neutral[400],
      },
      text: {
        primary: basePalette.neutral[900],
        secondary: basePalette.neutral[700],
        tertiary: basePalette.neutral[500],
        disabled: basePalette.neutral[400],
        inverse: basePalette.neutral[0],
      },
      success: {
        lightest: basePalette.green[50],
        lighter: basePalette.green[100],
        light: basePalette.green[300],
        base: basePalette.green[600],
        dark: basePalette.green[700],
        darker: basePalette.green[800],
        contrast: basePalette.neutral[0],
      },
      info: {
        lightest: basePalette.blue[50],
        lighter: basePalette.blue[100],
        light: basePalette.blue[300],
        base: basePalette.blue[600],
        dark: basePalette.blue[700],
        darker: basePalette.blue[800],
        contrast: basePalette.neutral[0],
      },
      warning: {
        lightest: basePalette.amber[50],
        lighter: basePalette.amber[100],
        light: basePalette.amber[300],
        base: basePalette.amber[600],
        dark: basePalette.amber[700],
        darker: basePalette.amber[800],
        contrast: basePalette.neutral[900],
      },
      error: {
        lightest: basePalette.red[50],
        lighter: basePalette.red[100],
        light: basePalette.red[300],
        base: basePalette.red[600],
        dark: basePalette.red[700],
        darker: basePalette.red[800],
        contrast: basePalette.neutral[0],
      },
    },
    dark: {
      primary: {
        lightest: basePalette.blue[900],
        lighter: basePalette.blue[800],
        light: basePalette.blue[600],
        base: basePalette.blue[500],
        dark: basePalette.blue[300],
        darker: basePalette.blue[200],
        darkest: basePalette.blue[100],
        contrast: basePalette.neutral[900],
      },
      secondary: {
        lightest: basePalette.teal[900],
        lighter: basePalette.teal[800],
        light: basePalette.teal[600],
        base: basePalette.teal[500],
        dark: basePalette.teal[300],
        darker: basePalette.teal[200],
        darkest: basePalette.teal[100],
        contrast: basePalette.neutral[900],
      },
      tertiary: {
        lightest: basePalette.purple[900],
        lighter: basePalette.purple[800],
        light: basePalette.purple[600],
        base: basePalette.purple[500],
        dark: basePalette.purple[300],
        darker: basePalette.purple[200],
        darkest: basePalette.purple[100],
        contrast: basePalette.neutral[900],
      },
      background: {
        app: basePalette.neutral[900],
        card: basePalette.neutral[800],
        subtle: basePalette.neutral[700],
      },
      surface: {
        default: basePalette.neutral[800],
        raised: basePalette.neutral[700],
        overlay: basePalette.neutral[700],
        sunken: basePalette.neutral[900],
      },
      border: {
        subtle: basePalette.neutral[700],
        default: basePalette.neutral[600],
        strong: basePalette.neutral[500],
      },
      text: {
        primary: basePalette.neutral[50],
        secondary: basePalette.neutral[300],
        tertiary: basePalette.neutral[400],
        disabled: basePalette.neutral[600],
        inverse: basePalette.neutral[900],
      },
      success: {
        lightest: basePalette.green[900],
        lighter: basePalette.green[800],
        light: basePalette.green[600],
        base: basePalette.green[500],
        dark: basePalette.green[300],
        darker: basePalette.green[200],
        contrast: basePalette.neutral[900],
      },
      info: {
        lightest: basePalette.blue[900],
        lighter: basePalette.blue[800],
        light: basePalette.blue[600],
        base: basePalette.blue[500],
        dark: basePalette.blue[300],
        darker: basePalette.blue[200],
        contrast: basePalette.neutral[900],
      },
      warning: {
        lightest: basePalette.amber[900],
        lighter: basePalette.amber[800],
        light: basePalette.amber[600],
        base: basePalette.amber[500],
        dark: basePalette.amber[300],
        darker: basePalette.amber[200],
        contrast: basePalette.neutral[900],
      },
      error: {
        lightest: basePalette.red[900],
        lighter: basePalette.red[800],
        light: basePalette.red[600],
        base: basePalette.red[500],
        dark: basePalette.red[300],
        darker: basePalette.red[200],
        contrast: basePalette.neutral[900],
      },
    },
  };
  
  // Accessibility Guidelines
  export const accessibilityGuidelines = {
    wcagAA: {
      normalText: {
        minContrastRatio: 4.5,
        recommendation: "Use text.primary on background.app or surface.default for normal text to ensure readability.",
      },
      largeText: {
        minContrastRatio: 3.0,
        recommendation: "Large text (18pt+ or 14pt+ bold) can use text.secondary on light backgrounds."
      },
      uiComponents: {
        minContrastRatio: 3.0,
        recommendation: "For UI components like buttons, ensure text has sufficient contrast with the background."
      },
    },
    wcagAAA: {
      normalText: {
        minContrastRatio: 7.0,
        recommendation: "For maximum accessibility, use high contrast combinations like text.primary on background.app."
      },
      largeText: {
        minContrastRatio: 4.5,
        recommendation: "For large text meeting AAA standards, use text.primary instead of text.secondary."
      },
    },
    colorUseGuidelines: {
      colorBlindness: "Avoid relying solely on color to convey information. Add patterns, icons, or text labels.",
      interactionStates: "Use consistent color changes to indicate hover, active, and focus states.",
      limitedPalette: "Limit the number of colors in a single view to avoid overwhelming users. Primary and neutral colors should dominate.",
    }
  };
  
  // Color Token CSS Variables Generator
  export const generateColorCSSVariables = (theme: ThemeMode): string => {
    const tokens = colorTokens[theme];
    let cssVars = `:root {\n`;
    
    // Process each color category
    Object.entries(tokens).forEach(([category, colors]) => {
      Object.entries(colors).forEach(([shade, value]) => {
        cssVars += `  --color-${category}-${shade}: ${value};\n`;
      });
    });
    
    cssVars += `}\n`;
    return cssVars;
  };