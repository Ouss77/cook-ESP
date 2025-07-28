import React from 'react';
import { ChefHat, Menu, X, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Translation } from '../translations';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
  translation: Translation;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange, translation }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const { state } = useCart();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <button 
              onClick={() => navigate('/')}
              className="text-2xl font-bold text-gray-900 hover:text-orange-500 transition-colors"
            >
              CocinaStore
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              {translation.nav.home}
            </a>
            <a href="#products" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              {translation.nav.products}
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              {translation.nav.about}
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              {translation.nav.contact}
            </a>
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={() => navigate('/cart')}
              className="relative p-2 text-gray-700 hover:text-orange-500 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.itemCount}
                </span>
              )}
            </button>

            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => onLanguageChange('es')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  currentLang === 'es'
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                ES
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  currentLang === 'en'
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                {translation.nav.home}
              </a>
              <a href="#products" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                {translation.nav.products}
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                {translation.nav.about}
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                {translation.nav.contact}
              </a>
              <button
                onClick={() => navigate('/cart')}
                className="text-left text-gray-700 hover:text-orange-500 transition-colors font-medium flex items-center"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {translation.cart?.title || 'Cart'} ({state.itemCount})
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};