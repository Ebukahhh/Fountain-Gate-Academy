import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    <nav className="bg-white shadow-md sticky top-0 z-50">
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
              <h1 className="text-xl font-bold text-royal-700">Fountain Gate Academy</h1>
              <p className="text-xs text-tomato-600 font-semibold">Jesus is the Answer</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.path)}
                className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium ${item.id === 'contact'
                  ? 'text-white font-bold px-6 py-3 rounded-full shadow-lg'
                  : isCurrentPage(item.path)
                    ? 'bg-royal-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-royal-50 hover:text-royal-700'
                  }`}
                style={item.id === 'contact' ? { backgroundColor: '#f1592a' } : {}}
              >
                {item.id === 'contact' ? 'Contact Us' : item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-royal-50 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-royal-700" />
            ) : (
              <Menu className="w-6 h-6 text-royal-700" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.path)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${item.id === 'contact'
                  ? 'text-white font-bold px-6 py-3 rounded-full shadow-lg text-center'
                  : isCurrentPage(item.path)
                    ? 'bg-royal-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-royal-50 hover:text-royal-700'
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
