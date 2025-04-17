# Uzence Design System

A modern, accessible, and customizable design system built with React, TypeScript, and Tailwind CSS. This design system provides a comprehensive set of reusable components and design tokens to ensure consistency across applications.

![Design System Preview](public/assets/preview.png)

## Features

- 🎨 **Comprehensive Component Library** - Modern, responsive components with animations
- 🎯 **TypeScript Support** - Full type safety and autocompletion
- 🎭 **Dark/Light Theme Support** - Seamless theme switching with context
- ♿ **Accessibility First** - WCAG 2.1 compliant components
- 📱 **Responsive Design** - Mobile-first approach
- 🧪 **Test Coverage** - Comprehensive testing suite
- 📚 **Storybook Documentation** - Interactive component playground
- 🎨 **Tailwind CSS Integration** - Utility-first styling
- ⚡ **Framer Motion** - Smooth animations and transitions

## Installation

```bash
# Clone the repository
git clone https://github.com/Azman-Idrisi/Uzence-Storybook.git

# Install dependencies
npm install

# Start the development server
npm start
```

## Usage

### Basic Setup

```tsx
import { ThemeProvider, Breadcrumbs, Button } from '@uzence/design-system';

function App() {
  const breadcrumbItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'products', label: 'Products', href: '/products' },
    { id: 'details', label: 'Product Details', href: '/products/details' }
  ];

  return (
    <ThemeProvider>
      <Breadcrumbs items={breadcrumbItems} />
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}
```

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run storybook` - Launches Storybook
- `npm test` - Runs the test suite
- `npm run build` - Creates a production build
- `npm run build-storybook` - Builds the Storybook documentation

## Component Documentation

Explore our components in [Storybook](https://uzence-storybook-93cl5zcd9-mohammad-azmans-projects.vercel.app/?path=/docs/components-button--docs).

### Available Components

#### Navigation
- **Breadcrumbs** - Modern navigation trail with:
  - Icon support
  - Custom separators
  - Path truncation
  - Hover animations
  - Dark mode support
  - Full keyboard navigation

#### Core Components
- Button
- Input
- Card
- Modal
- Tooltip
- Dropdown
- And more...

## Design Tokens

Our design system includes:

- **Colors**
  - Brand colors (primary, secondary)
  - Semantic colors (success, warning, error)
  - Dark/light mode variants
- **Typography**
  - Font families: Modern sans-serif stack
  - Type scale: 12px to 48px
  - Font weights: 400 (regular), 500 (medium), 600 (semibold)
- **Spacing**
  - 4px base unit
  - Consistent spacing scale (4px to 64px)
- **Shadows**
  - Elevation levels (sm, md, lg, xl)
  - Dark mode optimized
- **Border Radius**
  - Consistent rounded corners (sm: 4px, md: 6px, lg: 8px)
- **Breakpoints**
  - Mobile: 640px
  - Tablet: 768px
  - Desktop: 1024px
  - Wide: 1280px


1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Local Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Run tests
npm test
```

## Testing

We use Jest and React Testing Library for our test suite. Each component includes:
- Unit tests
- Integration tests
- Accessibility tests
- Snapshot tests

## Accessibility

Our components follow WCAG 2.1 guidelines with:
- Semantic HTML
- ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader support
- Color contrast compliance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Heroicons](https://heroicons.com/)

## Contact

For any questions or support, please reach out to:
- Email: [idrisiazman@gmail.com]
- GitHub: [@Azman-Idrisi](https://github.com/Azman-Idrisi)
