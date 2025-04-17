import React, { useState } from 'react';
import { AccordionProps, AccordionItemProps, AccordionVariant, AccordionSize } from './types';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const sizeClasses: Record<AccordionSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const variantClasses: Record<AccordionVariant, string> = {
  default: 'border-b border-gray-200 dark:border-gray-700',
  bordered: 'border border-gray-200 dark:border-gray-700 rounded-lg mb-2',
  filled: 'bg-gray-50 dark:bg-gray-800 rounded-lg mb-2',
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isExpanded,
  onToggle,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const baseClasses = 'transition-all duration-200 ease-in-out';
  const itemClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <div className={itemClasses}>
      <button
        className={`w-full flex items-center justify-between p-4 ${
          item.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
        }`}
        onClick={() => !item.disabled && onToggle()}
        disabled={item.disabled}
        aria-expanded={isExpanded}
        aria-controls={`accordion-content-${item.id}`}
      >
        <span className="font-medium">{item.title}</span>
        <ChevronDownIcon
          className={`w-5 h-5 transform transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        id={`accordion-content-${item.id}`}
        className={`overflow-hidden transition-all duration-200 ${
          isExpanded ? 'max-h-96' : 'max-h-0'
        }`}
        role="region"
        aria-labelledby={`accordion-header-${item.id}`}
      >
        <div className="p-4">{item.content}</div>
      </div>
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({
  items,
  variant = 'default',
  size = 'md',
  defaultExpandedIds = [],
  allowMultiple = false,
  className = '',
  onItemToggle,
}) => {
  const [expandedIds, setExpandedIds] = useState<string[]>(defaultExpandedIds);

  const handleToggle = (id: string) => {
    setExpandedIds((prev) => {
      const isExpanded = prev.includes(id);
      if (allowMultiple) {
        return isExpanded ? prev.filter((itemId) => itemId !== id) : [...prev, id];
      }
      return isExpanded ? [] : [id];
    });
    onItemToggle?.(id, !expandedIds.includes(id));
  };

  return (
    <div className={`w-full ${className}`} role="list">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isExpanded={expandedIds.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
          variant={variant}
          size={size}
        />
      ))}
    </div>
  );
};

export default Accordion; 