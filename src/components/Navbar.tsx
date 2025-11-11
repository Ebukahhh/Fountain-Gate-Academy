import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'academics', label: 'Academics', path: '/academics' },
    { id: 'admissions', label: 'Admissions', path: '/admissions' },
    { id: 'news', label: 'News & Events', path: '/news' },
    { id: 'gallery', label: 'Gallery', path: '/gallery' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCurrentPage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('/')}
          >
            <img 
              src={logo} 
              alt="Fountain Gate Academy Logo" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-110 transition-transform duration-300" 
            />
            <div>
              <h1 className="text-xl font-bold text-royal-700 dark:text-royal-300">Fountain Gate Academy</h1>
              <p className="text-xs text-tomato-600 dark:text-tomato-400 font-semibold">Jesus is the Answer</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.path)}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium ${item.id === 'contact'
                    ? 'text-white font-bold px-6 py-3 rounded-full shadow-lg'
                    : isCurrentPage(item.path)
                      ? 'bg-royal-600 dark:bg-royal-700 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-royal-50 dark:hover:bg-gray-700 hover:text-royal-700 dark:hover:text-royal-300'
                    }`}
                  style={item.id === 'contact' ? { backgroundColor: '#f1592a' } : {}}
                >
                  {item.id === 'contact' ? 'Contact Us' : item.label}
                </button>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg hover:bg-royal-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-6 h-6 text-royal-700 dark:text-royal-300" />
              ) : (
                <Moon className="w-6 h-6 text-royal-700 dark:text-royal-300" />
              )}
            </button>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-royal-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-6 h-6 text-royal-700 dark:text-royal-300" />
              ) : (
                <Moon className="w-6 h-6 text-royal-700 dark:text-royal-300" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-royal-50 dark:hover:bg-gray-700 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-royal-700 dark:text-royal-300" />
              ) : (
                <Menu className="w-6 h-6 text-royal-700 dark:text-royal-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 animate-fade-in transition-colors duration-300">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.path)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${item.id === 'contact'
                  ? 'text-white font-bold px-6 py-3 rounded-full shadow-lg text-center'
                  : isCurrentPage(item.path)
                    ? 'bg-royal-600 dark:bg-royal-700 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-royal-50 dark:hover:bg-gray-700 hover:text-royal-700 dark:hover:text-royal-300'
                  }`}
                style={item.id === 'contact' ? { backgroundColor: '#f1592a' } : {}}
              >
                {item.id === 'contact' ? 'Contact Us' : item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
