export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  date: string;
  status?: 'completed' | 'in-progress' | 'upcoming';
  icon?: React.ReactNode;
}

export interface TimelineProps {
  items: TimelineItem[];
  variant?: 'default' | 'compact';
  orientation?: 'vertical' | 'horizontal';
  showConnectors?: boolean;
  className?: string;
}

export interface TimelineItemProps extends TimelineItem {
  isLast?: boolean;
  showConnector?: boolean;
  variant?: TimelineProps['variant'];
  orientation?: TimelineProps['orientation'];
} 