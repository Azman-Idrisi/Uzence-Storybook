import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../../theme/ThemeProvider';
import { TopNavProps, NavItem } from './types';

const NavDropdown: React.FC<{
  item: NavItem;
  onSelect: (item: NavItem) => void;
}> = ({ item, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useTheme();

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium
          ${isDarkMode
            ? 'hover:bg-gray-700 text-gray-200'
            : 'hover:bg-gray-100 text-gray-700'}
          ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          transition-colors duration-150`}
        onClick={() => !item.disabled && setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        disabled={item.disabled}
      >
        {item.icon && <span className="w-5 h-5">{item.icon}</span>}
        {item.label}
        <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute left-0 mt-1 w-48 rounded-md shadow-lg py-1 z-50
              ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
            role="menu"
            aria-orientation="vertical"
          >
            {item.children?.map((child) => (
              <button
                key={child.id}
                className={`w-full text-left px-4 py-2 text-sm
                  ${isDarkMode
                    ? 'text-gray-200 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-gray-100'}
                  ${child.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                  transition-colors duration-150`}
                onClick={() => {
                  if (!child.disabled) {
                    onSelect(child);
                    setIsOpen(false);
                  }
                }}
                role="menuitem"
                disabled={child.disabled}
              >
                <div className="flex items-center gap-2">
                  {child.icon && <span className="w-4 h-4">{child.icon}</span>}
                  {child.label}
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TopNav: React.FC<TopNavProps> = ({
  brand,
  items,
  actions,
  className = '',
  showMobileMenu = true,
  onNavItemSelect,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();

  const handleNavItemClick = useCallback(
    (item: NavItem) => {
      onNavItemSelect?.(item);
      setIsMobileMenuOpen(false);
    },
    [onNavItemSelect]
  );

  return (
    <nav
      className={`relative ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border-b ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Brand and primary navigation */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {brand}
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              {items.map((item) => (
                item.children ? (
                  <NavDropdown
                    key={item.id}
                    item={item}
                    onSelect={handleNavItemClick}
                  />
                ) : (
                  <button
                    key={item.id}
                    className={`px-3 py-2 rounded-md text-sm font-medium
                      ${isDarkMode
                        ? 'text-gray-200 hover:bg-gray-700'
                        : 'text-gray-700 hover:bg-gray-100'}
                      ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                      transition-colors duration-150`}
                    onClick={() => !item.disabled && handleNavItemClick(item)}
                    disabled={item.disabled}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon && <span className="w-5 h-5">{item.icon}</span>}
                      {item.label}
                    </div>
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center">
            {actions}
            
            {/* Mobile menu button */}
            {showMobileMenu && (
              <div className="sm:hidden ml-4">
                <button
                  type="button"
                  className={`inline-flex items-center justify-center p-2 rounded-md
                    ${isDarkMode
                      ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}
                    transition-colors duration-150`}
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden"
            id="mobile-menu"
          >
            <div className={`px-2 pt-2 pb-3 space-y-1 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              {items.map((item) => (
                <button
                  key={item.id}
                  className={`w-full text-left px-3 py-2 rounded-md text-base font-medium
                    ${isDarkMode
                      ? 'text-gray-200 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'}
                    ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                    transition-colors duration-150`}
                  onClick={() => !item.disabled && handleNavItemClick(item)}
                  disabled={item.disabled}
                >
                  <div className="flex items-center gap-2">
                    {item.icon && <span className="w-5 h-5">{item.icon}</span>}
                    {item.label}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default TopNav; 