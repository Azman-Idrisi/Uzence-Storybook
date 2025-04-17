export interface BreadcrumbItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbsProps {
  /**
   * Array of items to display in the breadcrumb trail
   */
  items: BreadcrumbItem[];

  /**
   * Custom separator between items
   * @default ChevronRightIcon
   */
  separator?: React.ReactNode;

  /**
   * Maximum number of items to show before truncating
   * Shows first, last, and truncated indicator
   * @default undefined (show all)
   */
  maxItems?: number;

  /**
   * Custom CSS class name
   */
  className?: string;

  /**
   * Callback when a breadcrumb item is clicked
   */
  onItemClick?: (item: BreadcrumbItem) => void;
} 