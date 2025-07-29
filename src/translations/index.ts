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
  cart: {
    title: string;
    items: string;
    empty: string;
    emptyDescription: string;
    continueShopping: string;
    back: string;
    summary: string;
    subtotal: string;
    shipping: string;
    freeShipping: string;
    total: string;
    proceedToReservation: string;
    reservationForm: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    notes: string;
    notesPlaceholder: string;
    submitReservation: string;
    submitting: string;
    orderSuccess: string;
    orderError: string;
  };
  about: {
    title: string;
    description: string;
    story: {
      title: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
    };
    features: {
      quality: {
        title: string;
        description: string;
      };
      experience: {
        title: string;
        description: string;
      };
      delivery: {
        title: string;
        description: string;
      };
      warranty: {
        title: string;
        description: string;
      };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    info: {
      address: {
        title: string;
        street: string;
        city: string;
      };
      phone: {
        title: string;
        main: string;
        whatsapp: string;
      };
      email: {
        title: string;
        sales: string;
        support: string;
      };
      hours: {
        title: string;
        weekdays: string;
        weekend: string;
      };
    };
    form: {
      title: string;
      name: string;
      email: string;
      phone: string;
      subject: {
        label: string;
        placeholder: string;
        options: {
          general: string;
          products: string;
          support: string;
          wholesale: string;
        };
      };
      message: string;
      messagePlaceholder: string;
      send: string;
      sending: string;
      success: {
        title: string;
        message: string;
        sendAnother: string;
      };
    };
    visit: {
      title: string;
      description: string;
      directions: {
        title: string;
        metro: string;
        bus: string;
        parking: string;
      };
      services: {
        title: string;
        consultation: string;
        demo: string;
        installation: string;
      };
    };
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
            image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Cuchillo de Chef Profesional',
            description: 'Cuchillo de acero inoxidable de 20cm con mango ergonómico',
            price: '$89.99',
            image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Batidor de Alambre',
            description: 'Batidor manual de acero inoxidable para mezclas perfectas',
            price: '$15.99',
            image: 'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Tabla de Cortar Bambú',
            description: 'Tabla ecológica de bambú con ranuras para jugos',
            price: '$32.99',
            image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=400'
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
            image: 'https://images.pexels.com/photos/7937474/pexels-photo-7937474.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Licuadora de Alta Potencia',
            description: 'Licuadora de 1500W perfecta para smoothies y sopas',
            price: '$159.99',
            image: 'https://images.pexels.com/photos/6544373/pexels-photo-6544373.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Freidora de Aire Digital',
            description: 'Freidora sin aceite de 5.5L con pantalla táctil',
            price: '$129.99',
            image: 'https://images.pexels.com/photos/7937474/pexels-photo-7937474.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Procesador de Alimentos',
            description: 'Procesador multifunción con 12 accesorios diferentes',
            price: '$199.99',
            image: 'https://images.pexels.com/photos/6544373/pexels-photo-6544373.jpeg?auto=compress&cs=tinysrgb&w=400'
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
            image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Sartén Antiadherente Premium',
            description: 'Sartén de 28cm con revestimiento cerámico profesional',
            price: '$79.99',
            image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Horno Tostador Convección',
            description: 'Horno compacto de 25L con función de convección',
            price: '$189.99',
            image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Termómetro Digital Instantáneo',
            description: 'Termómetro de lectura rápida con sonda plegable',
            price: '$29.99',
            image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=400'
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
            image: 'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Contenedores Herméticos Vidrio',
            description: 'Set de 10 contenedores con tapas de bambú',
            price: '$59.99',
            image: 'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Vajilla Moderna Porcelana',
            description: 'Juego de 16 piezas en diseño minimalista',
            price: '$119.99',
            image: 'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Recipientes Almacenamiento',
            description: 'Set de recipientes apilables con etiquetas',
            price: '$44.99',
            image: 'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=400'
          }
        ]
      }
    },
    footer: {
      about: 'Sobre Nosotros',
      contact: 'Contacto',
      follow: 'Síguenos',
      rights: '© 2025 CocinaStore. Todos los derechos reservados.'
    },
    cart: {
      title: 'Carrito de Compras',
      items: 'artículos',
      empty: 'Tu carrito está vacío',
      emptyDescription: 'Agrega algunos productos para comenzar',
      continueShopping: 'Continuar Comprando',
      back: 'Volver a la Tienda',
      summary: 'Resumen del Pedido',
      subtotal: 'Subtotal',
      shipping: 'Envío',
      freeShipping: 'Gratis',
      total: 'Total',
      proceedToReservation: 'Proceder a Reserva',
      reservationForm: 'Detalles de Reserva',
      name: 'Nombre Completo',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      address: 'Dirección',
      notes: 'Notas Adicionales',
      notesPlaceholder: 'Solicitudes especiales o instrucciones de entrega...',
      submitReservation: 'Enviar Reserva',
      submitting: 'Enviando...',
      orderSuccess: '¡Reserva enviada exitosamente! Te contactaremos pronto.',
      orderError: 'Error al enviar la reserva. Por favor intenta de nuevo.'
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
            image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Professional Chef Knife',
            description: '8-inch stainless steel knife with ergonomic handle',
            price: '$89.99',
            image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Wire Whisk',
            description: 'Stainless steel manual whisk for perfect mixing',
            price: '$15.99',
            image: 'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Bamboo Cutting Board',
            description: 'Eco-friendly bamboo board with juice grooves',
            price: '$32.99',
            image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=400'
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
            image: 'https://images.pexels.com/photos/7937474/pexels-photo-7937474.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'High-Power Blender',
            description: '1500W blender perfect for smoothies and soups',
            price: '$159.99',
            image: 'https://images.pexels.com/photos/6544373/pexels-photo-6544373.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Digital Air Fryer',
            description: '5.5L oil-free fryer with touch screen',
            price: '$129.99',
            image: 'https://images.pexels.com/photos/7937474/pexels-photo-7937474.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Food Processor',
            description: 'Multi-function processor with 12 different accessories',
            price: '$199.99',
            image: 'https://images.pexels.com/photos/6544373/pexels-photo-6544373.jpeg?auto=compress&cs=tinysrgb&w=400'
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
            image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Premium Non-Stick Pan',
            description: '11-inch pan with professional ceramic coating',
            price: '$79.99',
            image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Convection Toaster Oven',
            description: 'Compact 25L oven with convection function',
            price: '$189.99',
            image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            name: 'Instant Digital Thermometer',
            description: 'Fast-reading thermometer with foldable probe',
            price: '$29.99',
            image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=400'
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
    },
    cart: {
      title: 'Shopping Cart',
      items: 'items',
      empty: 'Your cart is empty',
      emptyDescription: 'Add some products to get started',
      continueShopping: 'Continue Shopping',
      back: 'Back to Store',
      summary: 'Order Summary',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      freeShipping: 'Free',
      total: 'Total',
      proceedToReservation: 'Proceed to Reservation',
      reservationForm: 'Reservation Details',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      notes: 'Additional Notes',
      notesPlaceholder: 'Any special requests or delivery instructions...',
      submitReservation: 'Submit Reservation',
      submitting: 'Submitting...',
      orderSuccess: 'Reservation submitted successfully! We will contact you soon.',
      orderError: 'Error submitting reservation. Please try again.'
    }
  }
};