import React from 'react';
import { ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useTheme } from '../../../theme/ThemeProvider';
import { BreadcrumbsProps, BreadcrumbItem } from './types';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = <ChevronRightIcon className="w-4 h-4" />,
  maxItems,
  className = '',
  onItemClick,
}) => {
  const { isDarkMode, theme } = useTheme();

  const displayItems = React.useMemo(() => {
    if (!maxItems || items.length <= maxItems) return items;

    const firstItem = items[0];
    const lastItem = items[items.length - 1];
    const truncatedItems: BreadcrumbItem[] = [
      firstItem,
      {
        id: 'truncated',
        label: '...',
        icon: <EllipsisHorizontalIcon className="w-4 h-4" />,
      },
      lastItem,
    ];

    return truncatedItems;
  }, [items, maxItems]);

  return (
    <nav
      aria-label="Breadcrumb"
      className={`${className}`}
    >
      <ol className="flex items-center space-x-2">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isClickable = !isLast && item.id !== 'truncated';

          return (
            <li
              key={item.id}
              className="flex items-center"
            >
              <motion.div
                className={`flex items-center ${
                  isClickable
                    ? `cursor-pointer hover:text-${theme.brand.primary} transition-colors duration-150`
                    : ''
                }`}
                whileHover={isClickable ? { scale: 1.05 } : undefined}
                whileTap={isClickable ? { scale: 0.95 } : undefined}
                onClick={() => isClickable && onItemClick?.(item)}
              >
                {item.icon && (
                  <span className={`mr-1 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {item.icon}
                  </span>
                )}
                <span
                  className={`text-sm font-medium ${
                    isLast
                      ? isDarkMode
                        ? 'text-gray-200'
                        : 'text-gray-900'
                      : isDarkMode
                      ? 'text-gray-400'
                      : 'text-gray-500'
                  }`}
                >
                  {item.label}
                </span>
              </motion.div>
              
              {!isLast && (
                <span
                  className={`mx-2 ${
                    isDarkMode ? 'text-gray-600' : 'text-gray-400'
                  }`}
                  aria-hidden="true"
                >
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 