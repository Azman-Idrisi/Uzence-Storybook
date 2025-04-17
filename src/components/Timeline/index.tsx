import React from 'react';
import { TimelineProps, TimelineItemProps } from './types';
import { cn } from '../../lib/utils';

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  date,
  status = 'upcoming',
  icon,
  isLast,
  showConnector = true,
  variant = 'default',
  orientation = 'vertical',
}) => {
  const statusColors = {
    completed: 'bg-green-500',
    'in-progress': 'bg-blue-500',
    upcoming: 'bg-gray-300',
  };

  const itemClasses = cn(
    'relative',
    orientation === 'vertical' ? 'pl-8' : 'pb-8',
    !isLast && showConnector && 'mb-6'
  );

  const connectorClasses = cn(
    'absolute',
    orientation === 'vertical'
      ? 'left-3 top-4 h-full w-0.5'
      : 'bottom-0 left-3 h-0.5 w-full',
    'bg-gray-200'
  );

  const dotClasses = cn(
    'absolute rounded-full w-3 h-3',
    orientation === 'vertical' ? 'left-2.5' : 'left-0',
    statusColors[status]
  );

  return (
    <div className={itemClasses} role="listitem">
      {!isLast && showConnector && <div className={connectorClasses} />}
      <div className={dotClasses} />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          {icon && <div className="text-gray-500">{icon}</div>}
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        </div>
        {variant === 'default' && description && (
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        )}
        <time className="mt-1 text-xs text-gray-500">{date}</time>
      </div>
    </div>
  );
};

export const Timeline: React.FC<TimelineProps> = ({
  items,
  variant = 'default',
  orientation = 'vertical',
  showConnectors = true,
  className,
}) => {
  const timelineClasses = cn(
    'relative',
    orientation === 'vertical' ? 'space-y-6' : 'flex space-x-6',
    className
  );

  return (
    <div className={timelineClasses} role="list">
      {items.map((item, index) => (
        <TimelineItem
          key={item.id}
          {...item}
          isLast={index === items.length - 1}
          showConnector={showConnectors}
          variant={variant}
          orientation={orientation}
        />
      ))}
    </div>
  );
}; 