import React from 'react';
import { ChefHat, Facebook, Instagram, Twitter } from 'lucide-react';
import { Translation } from '../translations';
import logo from '../public/new3.png'; // Assuming you have a logo image
interface FooterProps {
  translation: Translation;
}

export const Footer: React.FC<FooterProps> = ({ translation }) => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <span 
    className="relative z-10 font-dancing text-lg text-orange-700 font-bold  tracking-tight         block"
  >
    Masterchef Supply
  </span>
            <p className="text-gray-400 mb-6 max-w-md">
              Tu destino para productos de cocina de alta calidad que transforman cada comida en una experiencia especial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translation.footer.about}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Nuestra Historia</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Misión</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Valores</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Equipo</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translation.footer.contact}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: Masterchefsupply@gmail.com</li>
              <li>Teléfono: +212648718929</li>
              <li>Dirección: 123 Kitchen St.</li>
              <li>Ciudad, País 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="mb-2">{translation.footer.rights}</p>
          <p className="text-sm text-gray-500">{translation.footer.signature}</p>
        </div>
      </div>
    </footer>
  );
};