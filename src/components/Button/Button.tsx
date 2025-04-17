import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
}

const getVariantClasses = (variant: ButtonVariant): string => {
  switch (variant) {
    case 'primary':
      return 'bg-primary hover:bg-primary-dark text-primary-contrast shadow-md hover:shadow-lg active:shadow-sm active:translate-y-[1px] transform transition-all';
    case 'secondary':
      return 'bg-secondary hover:bg-secondary-dark text-secondary-contrast shadow-md hover:shadow-lg active:shadow-sm active:translate-y-[1px] transform transition-all';
    case 'outline':
      return 'bg-transparent border-2 border-primary text-primary hover:bg-primary-lightest shadow-sm hover:shadow-md active:shadow-sm active:translate-y-[1px] transform transition-all';
    default:
      return 'bg-primary hover:bg-primary-dark text-primary-contrast shadow-md hover:shadow-lg active:shadow-sm active:translate-y-[1px] transform transition-all';
  }
};

const getSizeClasses = (size: ButtonSize): string => {
  switch (size) {
    case 'sm':
      return 'py-1.5 px-3 text-sm font-semibold';
    case 'md':
      return 'py-2.5 px-5 text-base font-semibold';
    case 'lg':
      return 'py-3.5 px-7 text-lg font-semibold';
    default:
      return 'py-2.5 px-5 text-base font-semibold';
  }
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-opacity-50';
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed shadow-none pointer-events-none' : 'cursor-pointer';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClasses}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};