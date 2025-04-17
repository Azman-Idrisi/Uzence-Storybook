export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  isExpanded?: boolean;
  isSelected?: boolean;
  isChecked?: boolean;
  icon?: React.ReactNode;
}

export interface TreeViewProps {
  data: TreeNode[];
  onNodeSelect?: (node: TreeNode) => void;
  onNodeToggle?: (node: TreeNode) => void;
  onNodeCheck?: (node: TreeNode) => void;
  showCheckboxes?: boolean;
  className?: string;
  ariaLabel?: string;
}

export interface TreeNodeProps {
  node: TreeNode;
  level: number;
  onNodeSelect: (node: TreeNode) => void;
  onNodeToggle: (node: TreeNode) => void;
  onNodeCheck?: (node: TreeNode) => void;
  showCheckboxes?: boolean;
  isDarkMode?: boolean;
} 