import React, { useState, useEffect } from 'react';

interface ThemeToggleProps {
  initialTheme?: 'light' | 'dark';
  onChange?: (theme: 'light' | 'dark') => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  initialTheme = 'light',
  onChange 
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(initialTheme);
  
  useEffect(() => {
    // Update document with the current theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Call onChange callback if provided
    if (onChange) {
      onChange(theme);
    }
  }, [theme, onChange]);
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-md p-2 transition-colors"
      style={{
        backgroundColor: theme === 'light' ? '#F3F4F6' : '#374151', 
        color: theme === 'light' ? '#111827' : '#F9FAFB'
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      )}
      <span className="ml-2">{theme === 'light' ? 'Dark' : 'Light'} Mode</span>
    </button>
  );
};

// ThemeToggle.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

const metaToggle = {
  title: 'Design System/Colors/Theme Toggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Theme Toggle Component

A simple component that allows users to switch between light and dark themes.
This component manages the theme state and updates the document classes accordingly.

## Usage

\`\`\`tsx
import { ThemeToggle } from './components/ColorSystem/ThemeToggle';

function App() {
  const handleThemeChange = (theme) => {
    console.log(\`Theme changed to \${theme}\`);
  };

  return (
    <div>
      <ThemeToggle initialTheme="light" onChange={handleThemeChange} />
    </div>
  );
}
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    initialTheme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
    onChange: { action: 'themeChanged' },
  },
} satisfies Meta<typeof ThemeToggle>;

export default metaToggle;
type StoryToggle = StoryObj<typeof ThemeToggle>;

export const Default: StoryToggle = {
  args: {
    initialTheme: 'light',
  },
};

export const DarkMode: StoryToggle = {
  args: {
    initialTheme: 'dark',
  },
};