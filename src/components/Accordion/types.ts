export type AccordionVariant = 'default' | 'bordered' | 'filled';
export type AccordionSize = 'sm' | 'md' | 'lg';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  variant?: AccordionVariant;
  size?: AccordionSize;
  defaultExpandedIds?: string[];
  allowMultiple?: boolean;
  className?: string;
  onItemToggle?: (id: string, isExpanded: boolean) => void;
}

export interface AccordionItemProps {
  item: AccordionItem;
  isExpanded: boolean;
  onToggle: () => void;
  variant?: AccordionVariant;
  size?: AccordionSize;
  className?: string;
} 