import React, { useState, useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const tooltipVariants = cva(
  'absolute z-50 px-2 py-1 text-sm rounded-md shadow-lg transition-opacity duration-200',
  {
    variants: {
      variant: {
        default: 'bg-gray-900 text-white',
        light: 'bg-white text-gray-900 border border-gray-200',
      },
      placement: {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      placement: 'top',
    },
  }
);

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  variant?: VariantProps<typeof tooltipVariants>['variant'];
  placement?: VariantProps<typeof tooltipVariants>['placement'];
  className?: string;
  delay?: number;
  disabled?: boolean;
}

/**
 * A tooltip component that displays additional information when hovering over or focusing on an element.
 * 
 * @example
 * ```tsx
 * <Tooltip content="This is a tooltip">
 *   <button>Hover me</button>
 * </Tooltip>
 * ```
 * 
 * @remarks
 * Tooltips should be used sparingly and only for non-essential information. They are not a replacement for proper labeling.
 * 
 * Accessibility considerations:
 * - Tooltips are automatically hidden from screen readers when not visible
 * - Uses appropriate ARIA attributes for accessibility
 * - Supports keyboard navigation
 * - Follows WCAG guidelines for tooltip implementation
 */
export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, children, variant, placement, className, delay = 0, disabled = false, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const showTooltip = () => {
      if (disabled) return;
      setIsMounted(true);
      timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
    };

    const hideTooltip = () => {
      if (disabled) return;
      setIsVisible(false);
      timeoutRef.current = setTimeout(() => setIsMounted(false), 200);
    };

    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    return (
      <div
        ref={ref}
        className="relative inline-block"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        {...props}
      >
        {children}
        {isMounted && (
          <div
            ref={tooltipRef}
            role="tooltip"
            className={cn(
              tooltipVariants({ variant, placement }),
              isVisible ? 'opacity-100' : 'opacity-0',
              className
            )}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip'; 