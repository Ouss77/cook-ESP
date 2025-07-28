export interface Translation {
  nav: {
    home: string;
    products: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  categories: {
    title: string;
    viewAll: string;
  };
  products: {
    utensils: {
      title: string;
      items: Array<{
        name: string;
        description: string;
        price: string;
        image: string;
      }>;
    };
    appliances: {
      title: string;
      items: Array<{
        name: string;
        description: string;
        price: string;
        image: string;
      }>;
    };
    professional: {
      title: string;
      items: Array<{
        name: string;
        description: string;
        price: string;
        image: string;
      }>;
    };
    storage: {
      title: string;
      items: Array<{
        name: string;
        description: string;
        price: string;
        image: string;
      }>;
    };
  };
  footer: {
    about: string;
    contact: string;
    follow: string;
    rights: string;
  };
}

export const translations: Record<string, Translation> = {
  es: {
    nav: {
      home: 'Inicio',
      products: 'Productos',
      about: 'Nosotros',
      contact: 'Contacto'
    },
    hero: {
      title: 'Equipa tu Cocina con lo Mejor',
      subtitle: 'Descubre nuestra colección premium de utensilios, electrodomésticos y equipos profesionales para crear experiencias culinarias excepcionales.',
      cta: 'Explorar Productos'
    },
    categories: {
      title: 'Nuestras Categorías',
      viewAll: 'Ver Todos'
    },
    products: {
      utensils: {
        title: 'Utensilios de Cocina',
        items: [
          {
            name: 'Juego de Espátulas Premium',
            description: 'Set de 3 espátulas de silicona resistentes al calor',
            price: '$24.99',
            image: 'https://5.imimg.com/data5/SELLER/Default/2024/4/406553008/NX/KE/OY/13705781/screenshot-2024-04-02-at-22-41-20-910n1dvi41l-sl1500-jpg-jpeg-image-1500-1407-pixels-scaled-76-500x500.png  '
          },
          {
            name: 'Cuchillo de Chef Profesional',
            description: 'Cuchillo de acero inoxidable de 20cm con mango ergonómico',
            price: '$89.99',
            image: 'https://media-production.procook.io/21ef9449aacfbbafb2b73d127dad0434.jpg'
          },
          {
            name: 'Batidor de Alambre',
            description: 'Batidor manual de acero inoxidable para mezclas perfectas',
            price: '$15.99',
            image: 'https://m.media-amazon.com/images/I/61iMe+ZLJNL._UF1000,1000_QL80_.jpg'
          },
          {
            name: 'Tabla de Cortar Bambú',
            description: 'Tabla ecológica de bambú con ranuras para jugos',
            price: '$32.99',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZBGttTneDI0sutGrL-Zbi501tsN3z2EgkA&s'
          }
        ]
      },
      appliances: {
        title: 'Electrodomésticos Pequeños',
        items: [
          {
            name: 'Batidora de Pie KitchenPro',
            description: 'Batidora de 5L con 10 velocidades y accesorios incluidos',
            price: '$299.99',
            image: 'https://s.alicdn.com/@sc04/kf/H0e477a46e6604899b8f59758a6468c3fW.jpg'
          },
          {
            name: 'Licuadora de Alta Potencia',
            description: 'Licuadora de 1500W perfecta para smoothies y sopas',
            price: '$159.99',
            image: 'https://www.220-electronics.com/media/catalog/product/cache/06e563bb4bf8bb99ff5c3485d61b5ba4/5/1/51h667lfnql._ac_.jpg'
          },
          {
            name: 'Freidora de Aire Digital',
            description: 'Freidora sin aceite de 5.5L con pantalla táctil',
            price: '$129.99',
            image: 'https://img.drz.lazcdn.com/static/pk/p/9f72bf7f4d8587e9d281aeda57424cbf.jpg_720x720q80.jpg'
          },
          {
            name: 'Procesador de Alimentos',
            description: 'Procesador multifunción con 12 accesorios diferentes',
            price: '$199.99',
            image: 'https://www.kitchenaid.com/content/kitchenaid/en_us/pinch-of-help/countertop-appliances/what-is-food-processor-used-for/_jcr_content/root/main/responsivegrid/container_copy_copy__1527546932/wrapperParsys/image_558086870_copy.coreimg.png/1649998766991/shred-or-grate.png'
          }
        ]
      },
      professional: {
        title: 'Equipo Profesional',
        items: [
          {
            name: 'Juego de Ollas Acero Inoxidable',
            description: 'Set de 8 piezas con base de aluminio encapsulado',
            price: '$249.99',
            image: 'https://image.made-in-china.com/2f0j00zApoQRwaabqu/12-PCS-Kitchenware-Frying-Pan-Non-Stick-Cooking-Pot-Stainless-Steel-Cookware-Set.webp'
          },
          {
            name: 'Sartén Antiadherente Premium',
            description: 'Sartén de 28cm con revestimiento cerámico profesional',
            price: '$79.99',
            image: 'https://www.tefal.com.au/cdn/shop/files/01G2560616TefalUnlimitedPremiumInductionNon-stickFrypan28cm.png?v=1746169395&width=900'
          },
          {
            name: 'Horno Tostador Convección',
            description: 'Horno compacto de 25L con función de convección',
            price: '$189.99',
            image: 'https://www.seriouseats.com/thmb/crE-Zp7L5D8qkMIC_Mewrs1Wai8=/fit-in/1500x2668/filters:no_upscale():max_bytes(150000):strip_icc()/sea-toaster-ovens-afto-may-24-test-breville-smart-pro-nsimpson-541-f33d506f754d4263b5c044317898b66b.jpeg'
          },
          {
            name: 'Termómetro Digital Instantáneo',
            description: 'Termómetro de lectura rápida con sonda plegable',
            price: '$29.99',
            image: 'https://www.gatesgardencentre.co.uk/wp-content/uploads/instant-read-thermometer.jpg'
          }
        ]
      },
      storage: {
        title: 'Almacenamiento y Presentación',
        items: [
          {
            name: 'Moldes para Hornear Silicona',
            description: 'Set de 6 moldes antiadherentes para repostería',
            price: '$34.99',
            image: 'https://image.made-in-china.com/2f0j00aMCocqvtbebU/Pastry-Bakeware-Bakery-Muffin-Cup-Cake-Bread-Molds-Cake-Tools-Baking-Pan-Silicone-Cake-Mold-Set-for-Kitchen.webp'
          },
          {
            name: 'Contenedores Herméticos Vidrio',
            description: 'Set de 10 contenedores con tapas de bambú',
            price: '$59.99',
            image: 'https://m.media-amazon.com/images/I/81T5Ypg06qL.jpg'
          },
          {
            name: 'Vajilla Moderna Porcelana',
            description: 'Juego de 16 piezas en diseño minimalista',
            price: '$119.99',
            image: 'https://images.squarespace-cdn.com/content/v1/647650c1f4365813e5642b3f/c59d6236-1c18-493f-893c-b05f5ceabb5f/Myrth-Ceramics-5pieceSet-Tempest-2025-3.jpg?format=1000w'
          },
          {
            name: 'Recipientes Almacenamiento',
            description: 'Set de recipientes apilables con etiquetas',
            price: '$44.99',
            image: 'https://vader-prod.s3.amazonaws.com/1610643602-51AZVYhmIpL.jpg'
          }
        ]
      }
    },
    footer: {
      about: 'Sobre Nosotros',
      contact: 'Contacto',
      follow: 'Síguenos',
      rights: '© 2025 CocinaStore. Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'Equip Your Kitchen with the Best',
      subtitle: 'Discover our premium collection of utensils, appliances, and professional equipment to create exceptional culinary experiences.',
      cta: 'Explore Products'
    },
    categories: {
      title: 'Our Categories',
      viewAll: 'View All'
    },
    products: {
      utensils: {
        title: 'Kitchen Utensils',
        items: [
          {
            name: 'Premium Spatula Set',
            description: 'Set of 3 heat-resistant silicone spatulas',
            price: '$24.99',
            image: 'https://5.imimg.com/data5/SELLER/Default/2024/4/406553008/NX/KE/OY/13705781/screenshot-2024-04-02-at-22-41-20-910n1dvi41l-sl1500-jpg-jpeg-image-1500-1407-pixels-scaled-76-500x500.png  '
          },
          {
            name: 'Professional Chef Knife',
            description: '8-inch stainless steel knife with ergonomic handle',
            price: '$89.99',
            image: 'https://media-production.procook.io/21ef9449aacfbbafb2b73d127dad0434.jpg'
          },
          {
            name: 'Wire Whisk',
            description: 'Stainless steel manual whisk for perfect mixing',
            price: '$15.99',
            image: 'https://m.media-amazon.com/images/I/61iMe+ZLJNL._UF1000,1000_QL80_.jpg'
          },
          {
            name: 'Bamboo Cutting Board',
            description: 'Eco-friendly bamboo board with juice grooves',
            price: '$32.99',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZBGttTneDI0sutGrL-Zbi501tsN3z2EgkA&s'
          }
        ]
      },
      appliances: {
        title: 'Small Appliances',
        items: [
          {
            name: 'KitchenPro Stand Mixer',
            description: '5L mixer with 10 speeds and included accessories',
            price: '$299.99',
            image: 'https://s.alicdn.com/@sc04/kf/H0e477a46e6604899b8f59758a6468c3fW.jpg'
          },
          {
            name: 'High-Power Blender',
            description: '1500W blender perfect for smoothies and soups',
            price: '$159.99',
            image: 'https://www.220-electronics.com/media/catalog/product/cache/06e563bb4bf8bb99ff5c3485d61b5ba4/5/1/51h667lfnql._ac_.jpg'
          },
          {
            name: 'Digital Air Fryer',
            description: '5.5L oil-free fryer with touch screen',
            price: '$129.99',
            image: 'https://img.drz.lazcdn.com/static/pk/p/9f72bf7f4d8587e9d281aeda57424cbf.jpg_720x720q80.jpg'
          },
          {
            name: 'Food Processor',
            description: 'Multi-function processor with 12 different accessories',
            price: '$199.99',
            image: 'https://www.kitchenaid.com/content/kitchenaid/en_us/pinch-of-help/countertop-appliances/what-is-food-processor-used-for/_jcr_content/root/main/responsivegrid/container_copy_copy__1527546932/wrapperParsys/image_558086870_copy.coreimg.png/1649998766991/shred-or-grate.png'
          }
        ]
      },
      professional: {
        title: 'Professional Equipment',
        items: [
          {
            name: 'Stainless Steel Pot Set',
            description: '8-piece set with encapsulated aluminum base',
            price: '$249.99',
            image: 'https://image.made-in-china.com/2f0j00zApoQRwaabqu/12-PCS-Kitchenware-Frying-Pan-Non-Stick-Cooking-Pot-Stainless-Steel-Cookware-Set.webp'
          },
          {
            name: 'Premium Non-Stick Pan',
            description: '11-inch pan with professional ceramic coating',
            price: '$79.99',
            image: 'https://www.tefal.com.au/cdn/shop/files/01G2560616TefalUnlimitedPremiumInductionNon-stickFrypan28cm.png?v=1746169395&width=900'
          },
          {
            name: 'Convection Toaster Oven',
            description: 'Compact 25L oven with convection function',
            price: '$189.99',
            image: 'https://www.seriouseats.com/thmb/crE-Zp7L5D8qkMIC_Mewrs1Wai8=/fit-in/1500x2668/filters:no_upscale():max_bytes(150000):strip_icc()/sea-toaster-ovens-afto-may-24-test-breville-smart-pro-nsimpson-541-f33d506f754d4263b5c044317898b66b.jpeg'
          },
          {
            name: 'Instant Digital Thermometer',
            description: 'Fast-reading thermometer with foldable probe',
            price: '$29.99',
            image: 'https://www.gatesgardencentre.co.uk/wp-content/uploads/instant-read-thermometer.jpg'
          }
        ]
      },
      storage: {
        title: 'Storage & Presentation',
        items: [
          {
            name: 'Silicone Baking Molds',
            description: 'Set of 6 non-stick molds for baking',
            price: '$34.99',
            image: 'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Glass Airtight Containers',
            description: 'Set of 10 containers with bamboo lids',
            price: '$59.99',
            image: 'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Modern Porcelain Tableware',
            description: '16-piece set in minimalist design',
            price: '$119.99',
            image: 'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Storage Containers',
            description: 'Set of stackable containers with labels',
            price: '$44.99',
            image: 'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=400'
          }
        ]
      }
    },
    footer: {
      about: 'About Us',
      contact: 'Contact',
      follow: 'Follow Us',
      rights: '© 2025 CocinaStore. All rights reserved.'
    }
  }
};