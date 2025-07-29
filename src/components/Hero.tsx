import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Translation } from '../translations';

interface HeroProps {
  translation: Translation;
}

export const Hero: React.FC<HeroProps> = ({ translation }) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-orange-50 to-red-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {translation.hero.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              {translation.hero.subtitle}
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                {translation.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern kitchen setup"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-red-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};