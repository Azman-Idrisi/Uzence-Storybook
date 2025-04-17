import React, { useState, useCallback, useRef } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { TreeViewProps, TreeNode, TreeNodeProps } from './types';

const TreeNodeComponent: React.FC<TreeNodeProps> = ({
  node,
  level,
  onNodeSelect,
  onNodeToggle,
  onNodeCheck,
  showCheckboxes,
  isDarkMode,
}) => {
  const [isExpanded, setIsExpanded] = useState(node.isExpanded ?? false);
  const [isHovered, setIsHovered] = useState(false);
  const nodeRef = useRef<HTMLLIElement>(null);

  const handleToggle = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent) => {
      e.preventDefault();
      setIsExpanded(!isExpanded);
      onNodeToggle({ ...node, isExpanded: !isExpanded });
    },
    [isExpanded, node, onNodeToggle]
  );

  const handleSelect = useCallback(() => {
    onNodeSelect(node);
  }, [node, onNodeSelect]);

  const handleCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation();
      onNodeCheck?.({ ...node, isChecked: e.target.checked });
    },
    [node, onNodeCheck]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'Enter':
        case ' ':
          handleToggle(e);
          break;
        case 'ArrowRight':
          if (!isExpanded && node.children?.length) {
            handleToggle(e);
          }
          break;
        case 'ArrowLeft':
          if (isExpanded) {
            handleToggle(e);
          }
          break;
        default:
          break;
      }
    },
    [handleToggle, isExpanded, node.children?.length]
  );

  return (
    <li
      ref={nodeRef}
      role="treeitem"
      aria-expanded={isExpanded}
      aria-selected={node.isSelected}
      className={`relative ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}
    >
      <motion.div
        className={`group flex items-center py-1 px-2 rounded-md cursor-pointer relative ${
          node.isSelected
            ? isDarkMode
              ? 'bg-blue-600/20 text-blue-200'
              : 'bg-blue-50 text-blue-700'
            : ''
        }`}
        style={{ paddingLeft: `${level * 1.25}rem` }}
        onClick={handleSelect}
        onKeyDown={handleKeyDown}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ backgroundColor: isDarkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(243, 244, 246, 0.8)' }}
        whileTap={{ scale: 0.98 }}
        tabIndex={0}
      >
        {/* Vertical connecting line */}
        {level > 0 && (
          <div
            className={`absolute left-0 w-px h-full -translate-x-1/2 ${
              isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
            }`}
            style={{ left: `${level * 1.25 - 0.5}rem` }}
          />
        )}
        
        {/* Horizontal connecting line */}
        {level > 0 && (
          <div
            className={`absolute w-4 h-px ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'}`}
            style={{ left: `${level * 1.25 - 0.5}rem` }}
          />
        )}

        <div className="flex items-center gap-1.5 relative z-10">
          {node.children && node.children.length > 0 && (
            <motion.button
              className={`p-0.5 rounded-sm flex items-center justify-center ${
                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
              }`}
              onClick={handleToggle}
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
              initial={false}
            >
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRightIcon className={`w-3.5 h-3.5 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
              </motion.div>
            </motion.button>
          )}
          
          {showCheckboxes && (
            <motion.input
              type="checkbox"
              checked={node.isChecked}
              onChange={handleCheck}
              onClick={(e) => e.stopPropagation()}
              className={`w-3.5 h-3.5 rounded border-gray-300 dark:border-gray-600 
                focus:ring-2 focus:ring-blue-500/50 transition-shadow
                ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}
            />
          )}

          {node.icon && (
            <motion.span
              className={`flex items-center ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              {node.icon}
            </motion.span>
          )}

          <motion.span
            className={`text-sm font-medium select-none ${
              isHovered
                ? isDarkMode
                  ? 'text-blue-300'
                  : 'text-blue-600'
                : ''
            }`}
            transition={{ duration: 0.2 }}
          >
            {node.label}
          </motion.span>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && node.children && node.children.length > 0 && (
          <motion.ul
            role="group"
            className="relative"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {node.children.map((child) => (
              <TreeNodeComponent
                key={child.id}
                node={child}
                level={level + 1}
                onNodeSelect={onNodeSelect}
                onNodeToggle={onNodeToggle}
                onNodeCheck={onNodeCheck}
                showCheckboxes={showCheckboxes}
                isDarkMode={isDarkMode}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

const TreeView: React.FC<TreeViewProps> = ({
  data,
  onNodeSelect = () => {},
  onNodeToggle = () => {},
  onNodeCheck,
  showCheckboxes = false,
  className = '',
  ariaLabel = 'Tree view',
}) => {
  const { isDarkMode } = useTheme();
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);

  const handleNodeSelect = useCallback(
    (node: TreeNode) => {
      setSelectedNode(node);
      onNodeSelect(node);
    },
    [onNodeSelect]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`rounded-lg border ${
        isDarkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-white'
      } ${className}`}
    >
      <ul
        role="tree"
        aria-label={ariaLabel}
        className="p-2 space-y-0.5"
      >
        {data.map((node) => (
          <TreeNodeComponent
            key={node.id}
            node={node}
            level={0}
            onNodeSelect={handleNodeSelect}
            onNodeToggle={onNodeToggle}
            onNodeCheck={onNodeCheck}
            showCheckboxes={showCheckboxes}
            isDarkMode={isDarkMode}
          />
        ))}
      </ul>
    </motion.div>
  );
};

export default TreeView; 