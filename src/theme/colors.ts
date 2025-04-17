export const baseColors = {
  // Primary Colors
  blue: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',  // Primary default
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
  },
  
  // Secondary Colors
  purple: {
    50: '#F5F3FF',
    100: '#EDE9FE',
    200: '#DDD6FE',
    300: '#C4B5FD',
    400: '#A78BFA',
    500: '#8B5CF6',  // Secondary default
    600: '#7C3AED',
    700: '#6D28D9',
    800: '#5B21B6',
    900: '#4C1D95',
  },

  // Tertiary Colors
  teal: {
    50: '#F0FDFA',
    100: '#CCFBF1',
    200: '#99F6E4',
    300: '#5EEAD4',
    400: '#2DD4BF',
    500: '#14B8A6',  // Tertiary default
    600: '#0D9488',
    700: '#0F766E',
    800: '#115E59',
    900: '#134E4A',
  },

  // Neutral Colors
  gray: {
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
  },

  // Semantic Colors
  success: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',  // Success default
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
  },
  warning: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',  // Warning default
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },
  error: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',  // Error default
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },
  info: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',  // Info default
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
  },
};

export const lightTheme = {
  // Surface & Background Layers
  surface: {
    primary: baseColors.gray[50],
    secondary: '#FFFFFF',
    tertiary: baseColors.gray[100],
  },
  background: {
    default: '#FFFFFF',
    subtle: baseColors.gray[50],
    muted: baseColors.gray[100],
    emphasized: baseColors.gray[200],
  },
  border: {
    default: baseColors.gray[200],
    subtle: baseColors.gray[100],
    emphasized: baseColors.gray[300],
  },

  // Text Colors
  text: {
    primary: baseColors.gray[900],
    secondary: baseColors.gray[600],
    tertiary: baseColors.gray[500],
    disabled: baseColors.gray[400],
  },

  // Brand Colors
  brand: {
    primary: baseColors.blue[500],
    primaryHover: baseColors.blue[600],
    primaryActive: baseColors.blue[700],
    primarySubtle: baseColors.blue[50],
    
    secondary: baseColors.purple[500],
    secondaryHover: baseColors.purple[600],
    secondaryActive: baseColors.purple[700],
    secondarySubtle: baseColors.purple[50],
    
    tertiary: baseColors.teal[500],
    tertiaryHover: baseColors.teal[600],
    tertiaryActive: baseColors.teal[700],
    tertiarySubtle: baseColors.teal[50],
  },

  // Semantic Colors
  semantic: {
    success: baseColors.success[500],
    successHover: baseColors.success[600],
    successSubtle: baseColors.success[50],
    
    warning: baseColors.warning[500],
    warningHover: baseColors.warning[600],
    warningSubtle: baseColors.warning[50],
    
    error: baseColors.error[500],
    errorHover: baseColors.error[600],
    errorSubtle: baseColors.error[50],
    
    info: baseColors.info[500],
    infoHover: baseColors.info[600],
    infoSubtle: baseColors.info[50],
  },
};

export const darkTheme: typeof lightTheme = {
  // Surface & Background Layers
  surface: {
    primary: baseColors.gray[800],
    secondary: baseColors.gray[900],
    tertiary: baseColors.gray[700],
  },
  background: {
    default: baseColors.gray[900],
    subtle: baseColors.gray[800],
    muted: baseColors.gray[700],
    emphasized: baseColors.gray[600],
  },
  border: {
    default: baseColors.gray[700],
    subtle: baseColors.gray[800],
    emphasized: baseColors.gray[600],
  },

  // Text Colors
  text: {
    primary: baseColors.gray[50],
    secondary: baseColors.gray[300],
    tertiary: baseColors.gray[400],
    disabled: baseColors.gray[500],
  },

  // Brand Colors
  brand: {
    primary: baseColors.blue[400],
    primaryHover: baseColors.blue[300],
    primaryActive: baseColors.blue[200],
    primarySubtle: baseColors.blue[900],
    
    secondary: baseColors.purple[400],
    secondaryHover: baseColors.purple[300],
    secondaryActive: baseColors.purple[200],
    secondarySubtle: baseColors.purple[900],
    
    tertiary: baseColors.teal[400],
    tertiaryHover: baseColors.teal[300],
    tertiaryActive: baseColors.teal[200],
    tertiarySubtle: baseColors.teal[900],
  },

  // Semantic Colors
  semantic: {
    success: baseColors.success[400],
    successHover: baseColors.success[300],
    successSubtle: baseColors.success[900],
    
    warning: baseColors.warning[400],
    warningHover: baseColors.warning[300],
    warningSubtle: baseColors.warning[900],
    
    error: baseColors.error[400],
    errorHover: baseColors.error[300],
    errorSubtle: baseColors.error[900],
    
    info: baseColors.info[400],
    infoHover: baseColors.info[300],
    infoSubtle: baseColors.info[900],
  },
}; 