import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCategories } from './components/ProductCategories';
import { Footer } from './components/Footer';
import { translations } from './translations';

function App() {
  const [currentLang, setCurrentLang] = useState('es');
  const translation = translations[currentLang];

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        translation={translation}
      />
      <Hero translation={translation} />
      <ProductCategories translation={translation} />
      <Footer translation={translation} />
    </div>
  );
}

export default App;