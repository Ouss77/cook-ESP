import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCategories } from './components/ProductCategories';
import { CartPage } from './components/CartPage';
import { Footer } from './components/Footer';
import { translations } from './translations';

function App() {
  const [currentLang, setCurrentLang] = useState('es');
  const translation = translations[currentLang];

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
  };

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header 
            currentLang={currentLang}
            onLanguageChange={handleLanguageChange}
            translation={translation}
          />
          
          <Routes>
            <Route path="/" element={
              <>
                <Hero translation={translation} />
                <ProductCategories translation={translation} />
                <About translation={translation} />
                <Contact translation={translation} />
              </>
            } />
            <Route path="/cart" element={<CartPage translation={translation} />} />
          </Routes>
          
          <Footer translation={translation} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;