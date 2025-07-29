import React, { useState, useEffect } from 'react';
import { Utensils, Zap, Award, Package, ShoppingCart, Heart } from 'lucide-react';
import { Translation } from '../translations';
import { useCart } from '../context/CartContext';

interface ProductCategoriesProps {
  translation: Translation;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ translation }) => {
  const [activeCategory, setActiveCategory] = useState('utensils');
  const [showAllProducts, setShowAllProducts] = useState(false);
  const { addItem } = useCart();

  const categories = [
    {
      id: 'utensils',
      icon: Utensils,
      data: translation.products.utensils,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      id: 'appliances',
      icon: Zap,
      data: translation.products.appliances,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'professional',
      icon: Award,
      data: translation.products.professional,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 'storage',
      icon: Package,
      data: translation.products.storage,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  const activeData = categories.find(cat => cat.id === activeCategory);

  // Reset showAllProducts when category changes
  useEffect(() => {
    setShowAllProducts(false);
  }, [activeCategory]);

  // Get products to display (first 4 or all)
  const getProductsToDisplay = () => {
    if (!activeData?.data.items) return [];
    return showAllProducts ? activeData.data.items : activeData.data.items.slice(0, 4);
  };

  const productsToDisplay = getProductsToDisplay();
  const hasMoreProducts = activeData?.data.items && activeData.data.items.length > 4;

  const handleAddToCart = (product: any, categoryId: string) => {
    const priceNumber = parseFloat(product.price.replace('$', ''));
    addItem({
      id: `${categoryId}-${product.name.replace(/\s+/g, '-').toLowerCase()}`,
      name: product.name,
      description: product.description,
      price: priceNumber,
      image: product.image,
      category: categoryId
    });
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {translation.categories.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : `${category.bgColor} text-gray-700 hover:shadow-md border ${category.borderColor}`
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{category.data.title}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsToDisplay.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">
                    {product.price}
                  </span>
                  <button 
                    onClick={() => handleAddToCart(product, activeCategory)}
                    className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span className="text-sm font-medium">Agregar</span>
                  </button>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {hasMoreProducts && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllProducts(!showAllProducts)}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {showAllProducts ? translation.categories.viewLess : translation.categories.viewAll}
              <Package className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};