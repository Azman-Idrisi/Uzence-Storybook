export interface NavItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
  disabled?: boolean;
}

export interface TopNavProps {
  /**
   * The brand/logo element to display
   */
  brand: React.ReactNode;
  
  /**
   * Navigation items to display in the main menu
   */
  items: NavItem[];
  
  /**
   * Actions to display on the right side (e.g., profile, notifications)
   */
  actions?: React.ReactNode;
  
  /**
   * Optional CSS class name
   */
  className?: string;
  
  /**
   * Whether to show a mobile menu button
   * @default true
   */
  showMobileMenu?: boolean;
  
  /**
   * Callback when a navigation item is selected
   */
  onNavItemSelect?: (item: NavItem) => void;
} 