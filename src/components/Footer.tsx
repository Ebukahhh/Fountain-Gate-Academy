import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram} from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-royal-800 to-royal-900 dark:from-gray-900 dark:to-gray-800 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-tomato-400 dark:text-tomato-300">Fountain Gate Academy</h3>
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed mb-4">
              Nurturing young minds from Creche to JHS (ages 1 year and above) with excellence, character, and values.
            </p>
            <p className="text-tomato-300 dark:text-tomato-200 font-semibold italic">
              "Jesus is the Answer"
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-tomato-400 dark:text-tomato-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigate('/about')} className="text-gray-300 dark:text-gray-400 hover:text-tomato-400 dark:hover:text-tomato-300 transition-colors">About Us</button></li>
              <li><button onClick={() => handleNavigate('/academics')} className="text-gray-300 dark:text-gray-400 hover:text-tomato-400 dark:hover:text-tomato-300 transition-colors">Academics</button></li>
              <li><button onClick={() => handleNavigate('/admissions')} className="text-gray-300 dark:text-gray-400 hover:text-tomato-400 dark:hover:text-tomato-300 transition-colors">Admissions</button></li>
              <li><button onClick={() => handleNavigate('/news')} className="text-gray-300 dark:text-gray-400 hover:text-tomato-400 dark:hover:text-tomato-300 transition-colors">News & Events</button></li>
              <li><button onClick={() => handleNavigate('/contact')} className="text-gray-300 dark:text-gray-400 hover:text-tomato-400 dark:hover:text-tomato-300 transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-tomato-400 dark:text-tomato-300">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-tomato-400 dark:text-tomato-300 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 dark:text-gray-400">Antiaku-Laststop, Accra, Ghana</span>
                <span className="text-gray-300 dark:text-gray-400"> Sapeiman -Amasaman, Accra, Ghana</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-tomato-400 dark:text-tomato-300 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400">0244588375</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-tomato-400 dark:text-tomato-300 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400">Greatfoga1@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-tomato-400 dark:text-tomato-300">Follow Us</h4>
            <div className="flex space-x-3">
              <a
                href="https://web.facebook.com/THEGREATFOGA#"
                className="bg-royal-700 dark:bg-gray-700 p-3 rounded-xl hover:bg-tomato-500 dark:hover:bg-tomato-600 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/fountain_foga?igsh=MXd3OHNxM285bDNpeA%3D%3D&utm_source=qr"
                className="bg-royal-700 dark:bg-gray-700 p-3 rounded-xl hover:bg-tomato-500 dark:hover:bg-tomato-600 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@fountain_foga?_r=1&_t=ZM-91HqHjBQVse"
                className="bg-royal-700 dark:bg-gray-700 p-3 rounded-xl hover:bg-tomato-500 dark:hover:bg-tomato-600 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2 text-tomato-400 dark:text-tomato-300">School Hours</h5>
              <p className="text-gray-300 dark:text-gray-400 text-sm">Monday - Friday</p>
              <p className="text-gray-300 dark:text-gray-400 text-sm">7:00 AM - 3:15 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-royal-700 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Fountain Gate Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
