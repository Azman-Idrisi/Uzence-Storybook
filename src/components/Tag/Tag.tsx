// src/components/Tag/Tag.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';

const tagVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-blue-100 text-blue-800 hover:bg-blue-200 focus:ring-blue-500",
        success: "bg-green-100 text-green-800 hover:bg-green-200 focus:ring-green-500",
        error: "bg-red-100 text-red-800 hover:bg-red-200 focus:ring-red-500",
        warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 focus:ring-yellow-500",
      },
      size: {
        small: "text-xs px-2 py-0.5 gap-1",
        medium: "text-sm px-3 py-1 gap-1.5",
        large: "text-base px-4 py-1.5 gap-2",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      disabled: false,
    },
  }
);

export type TagVariants = VariantProps<typeof tagVariants>;

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement>, TagVariants {
  /**
   * The display text for the tag
   */
  children: React.ReactNode;
  /**
   * Optional icon to display before the text
   */
  icon?: LucideIcon;
  /**
   * Optional icon to display after the text
   */
  trailingIcon?: LucideIcon;
  /**
   * Whether the tag is disabled
   */
  disabled?: boolean;
  /**
   * Additional CSS classes to apply
   */
  className?: string;
}

/**
 * Tag component used to categorize content or display statuses
 */
const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ children, variant, size, disabled, icon: Icon, trailingIcon: TrailingIcon, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={tagVariants({ variant, size, disabled, className })}
        role="button"
        aria-disabled={disabled || undefined}
        {...props}
      >
        {Icon && <Icon className={size === 'small' ? 'w-3 h-3' : size === 'medium' ? 'w-4 h-4' : 'w-5 h-5'} />}
        {children}
        {TrailingIcon && <TrailingIcon className={size === 'small' ? 'w-3 h-3' : size === 'medium' ? 'w-4 h-4' : 'w-5 h-5'} />}
      </span>
    );
  }
);

Tag.displayName = 'Tag';

export { Tag, tagVariants };