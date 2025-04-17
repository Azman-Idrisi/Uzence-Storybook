import React from 'react';
import { ProgressBarProps, sizeClasses, variantClasses } from './types';
import { cn } from '../../lib/utils';

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  size = 'md',
  variant = 'default',
  showLabel = false,
  labelPosition = 'top',
  className,
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const containerClasses = cn(
    'w-full',
    labelPosition === 'top' && 'space-y-1',
    labelPosition === 'bottom' && 'space-y-1',
    className
  );

  const progressBarClasses = cn(
    'w-full rounded-full bg-gray-200 overflow-hidden',
    sizeClasses[size]
  );

  const progressFillClasses = cn(
    'h-full rounded-full transition-all duration-300 ease-in-out',
    variantClasses[variant]
  );

  const labelClasses = cn(
    'text-sm font-medium',
    variant === 'default' && 'text-gray-700',
    variant === 'success' && 'text-green-700',
    variant === 'warning' && 'text-yellow-700',
    variant === 'error' && 'text-red-700'
  );

  const renderLabel = () => {
    if (!showLabel) return null;
    
    const label = `${Math.round(percentage)}%`;
    
    if (labelPosition === 'inside') {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium text-white">{label}</span>
        </div>
      );
    }
    
    return <span className={labelClasses}>{label}</span>;
  };

  return (
    <div className={containerClasses}>
      {labelPosition === 'top' && renderLabel()}
      <div className="relative">
        <div
          className={progressBarClasses}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className={progressFillClasses}
            style={{ width: `${percentage}%` }}
          />
          {labelPosition === 'inside' && renderLabel()}
        </div>
      </div>
      {labelPosition === 'bottom' && renderLabel()}
    </div>
  );
}; 