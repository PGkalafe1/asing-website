
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`shadow-lg sticky top-0 z-50 transition-colors ${ 
      theme === 'dark' 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center">
              <i className="ri-hospital-line text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900 dark:text-white font-[ 'Pacifico' ]">Asing Dental</h1>
              <p className="text-sm text-teal-600">Excellence in Dental Care</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`font-medium transition-colors whitespace-nowrap cursor-pointer ${ 
              theme === 'dark' 
                ? 'text-gray-300 hover:text-blue-400' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>
              Home
            </Link>
            <Link href="/services" className={`font-medium transition-colors whitespace-nowrap cursor-pointer ${ 
              theme === 'dark' 
                ? 'text-gray-300 hover:text-blue-400' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>
              Services
            </Link>
            <Link href="/about" className={`font-medium transition-colors whitespace-nowrap cursor-pointer ${ 
              theme === 'dark' 
                ? 'text-gray-300 hover:text-blue-400' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>
              About
            </Link>
            <Link href="/articles" className={`font-medium transition-colors whitespace-nowrap cursor-pointer ${ 
              theme === 'dark' 
                ? 'text-gray-300 hover:text-blue-400' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>
              Articles
            </Link>
            <Link href="/contact" className={`font-medium transition-colors whitespace-nowrap cursor-pointer ${ 
              theme === 'dark' 
                ? 'text-gray-300 hover:text-blue-400' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>
              Contact
            </Link>
            
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${ 
                theme === 'dark' 
                  ? 'hover:bg-gray-800 text-gray-300' 
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className={`ri-${theme === 'dark' ? 'sun' : 'moon'}-line`}></i>
              </div>
            </button>
            
            <Link href="/admin" className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer text-sm">
              Admin
            </Link>
            <Link href="/login" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
              Login
            </Link>
          </nav>

          <button 
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl ${ 
              theme === 'dark' ? 'text-white' : 'text-blue-900'
            }`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className={`font-medium cursor-pointer ${ 
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-blue-400' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}>
                Home
              </Link>
              <Link href="/services" className={`font-medium cursor-pointer ${ 
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-blue-400' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}>
                Services
              </Link>
              <Link href="/about" className={`font-medium cursor-pointer ${ 
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-blue-400' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}>
                About
              </Link>
              <Link href="/articles" className={`font-medium cursor-pointer ${ 
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-blue-400' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}>
                Articles
              </Link>
              <Link href="/contact" className={`font-medium cursor-pointer ${ 
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-blue-400' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}>
                Contact
              </Link>
              <button
                onClick={toggleTheme}
                className={`flex items-center space-x-2 font-medium cursor-pointer ${ 
                  theme === 'dark' 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className={`ri-${theme === 'dark' ? 'sun' : 'moon'}-line`}></i>
                </div>
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              <Link href="/admin" className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors text-center whitespace-nowrap cursor-pointer">
                Admin Panel
              </Link>
              <Link href="/login" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors text-center whitespace-nowrap cursor-pointer">
                Login
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
