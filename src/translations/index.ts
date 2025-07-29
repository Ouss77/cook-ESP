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
    viewLess: string;
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
      viewAll: 'Ver Todos',
      viewLess: 'Ver Menos'
    },
    products: {
      utensils: {
        title: 'Utensilios de Cocina',
items: [
  {
    name: 'Juego de Espátulas Premium',
    description: 'Set de 3 espátulas de silicona resistentes al calor',
    price: '$24.99',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/4/406553008/NX/KE/OY/13705781/screenshot-2024-04-02-at-22-41-20-910n1dvi41l-sl1500-jpg-jpeg-image-1500-1407-pixels-scaled-76-500x500.png'
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
  },
  {
    name: 'Rallador Multifuncional',
    description: 'Rallador de acero inoxidable con 4 caras para diferentes cortes',
    price: '$18.50',
    image: 'https://mojaoprema.si/wp-content/uploads/2022/11/XJ4052-2.jpg'
  },
  {
    name: 'Tazas Medidoras de Acero',
    description: 'Juego de tazas medidoras de acero inoxidable (6 piezas)',
    price: '$19.90',
    image: 'https://www.orquidea.com.co/image/cache/catalog/Products/Winco/MCP-4P_1-1000x1000.jpg'
  },
  {
    name: 'Báscula Digital de Cocina',
    description: 'Báscula precisa con pantalla LCD y función tara',
    price: '$27.99',
    image: 'https://www.tmelectron.com/media/TMPBS025_8_BASCULA_COCINA_COLOR_PLATEADO.jpg'
  },
  {
    name: 'Molde para Muffins',
    description: 'Molde antiadherente para 12 muffins o cupcakes',
    price: '$22.95',
    image: 'https://i5.walmartimages.com/asr/de55aad4-25e8-49e4-aa75-33829eeafeba.770b3753e1d740776a873bb9a81a2f0e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
  },{
  name: 'Termómetro Digital de Cocina',
  description: 'Termómetro instantáneo para carne y líquidos con pantalla retroiluminada',
  price: '$16.49',
  image: 'https://interlook.eu/hpeciai/d34fc0a931ae6929bb9410b9c88e0d3e/spa_pl_TP-101-NEGRO-Termometro-digital-de-cocina-Termometro-con-sonda-Un-dispositivo-para-controlar-la-temperatura-de-los-alimentos-3950_1.webp'
},
{
  name: 'Sartén Antiadherente de 28cm',
  description: 'Sartén de aluminio con recubrimiento antiadherente y mango ergonómico',
  price: '$39.99',
  image: 'https://titan.com.pa/cdn/shop/files/hogar-ollas-y-sartenes_10699521_1.jpg?v=1712854469'
},
{
  name: 'Dispenser de Aceite y Vinagre',
  description: 'Botellas de vidrio con dosificador y tapa antigoteo',
  price: '$14.99',
  image: 'https://ae01.alicdn.com/kf/HTB1n5GGkOQnBKNjSZFmq6AApVXaG/Dispensador-de-vertedor-de-aceite-de-oliva-y-vinagre-botella-de-vidrio-para-cocina-1x500ml-18oz.jpg'
},
{
  name: 'Rodillo de Madera para Masa',
  description: 'Rodillo clásico de madera para estirar masas de forma uniforme',
  price: '$12.75',
  image: 'https://www.chefzoco.com/assets/imagenes/inventario/14455/Rodillo-de-madera-sin-asas-para-amasar-28-cm.jpeg'
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
          }, {
            name: 'Horno Tostador Multifunción',
            description: 'Horno eléctrico con funciones para hornear, tostar y asar',
            price: '$179.99',
            image: 'https://s.alicdn.com/@sc04/kf/H50b64b4ca60642fcbed46325b2b4b8ab9.png'
          },
          {
            name: 'Cafetera de Goteo Programable',
            description: 'Cafetera con temporizador, jarra de vidrio y capacidad para 12 tazas',
            price: '$89.95',
            image: 'https://decashop.com.mx/cdn/shop/products/KUCF019B-01.png?v=1741709377&width=1445'
          },
          {
            name: 'Exprimidor Eléctrico de Cítricos',
            description: 'Exprimidor automático con doble cono y sistema antigoteo',
            price: '$49.99',
            image: 'https://m.media-amazon.com/images/I/61uMs2cU5GL.jpg'
          },
          {
            name: 'Máquina para Hacer Pan',
            description: 'Panificadora automática con 12 programas y temporizador',
            price: '$139.00',
            image: 'https://cuisinart.com.co/cdn/shop/products/05418-2_c6a81a4c-3ea3-4b5c-98fe-f96f345f2379_1400x.jpg?v=1668700299'
          },
          {
            name: 'Máquina para Hacer Helado',
            description: 'Máquina compacta para preparar helado casero en 20 minutos',
            price: '$94.50',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqXJScpzS-yF357Q0GIjDOsraSqe_jmnudA&s'
          },
          {
            name: 'Vaporera Eléctrica de Acero',
            description: 'Cocedor al vapor con 3 niveles y temporizador integrado',
            price: '$74.99',
            image: 'https://i.ebayimg.com/00/s/MTUwMFgxNTAw/z/jvoAAOSwFndjFc~c/$_57.JPG?set_id=8800005007'
          },
          {
            name: 'Selladora al Vacío',
            description: 'Selladora de alimentos con función de vacío y modo de sellado doble',
            price: '$64.99',
            image: 'https://m.media-amazon.com/images/I/8185uThAnVL.jpg'
          },
          {
            name: 'Tostadora de 4 Ranuras',
            description: 'Tostadora de acero inoxidable con control de tostado ajustable',
            price: '$59.99',
            image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/48b4e15b-edd4-45b3-a3b5-1d46b6c8d4c9.__CR0,0,800,600_PT0_SX800_V1___.jpg'
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
          },
            {
            name: 'Dispensador Automático de Jabón',
            description: 'Dispensador sin contacto para jabón o detergente líquido',
            price: '$29.99',
            image: 'https://exoriam.com/wp-content/uploads/2024/01/AnyConv.com__1-dispensador-de-jabon-liquido-automatico-2.webp'
          },
          {
            name: 'Cafetera Espresso Compacta',
            description: 'Máquina espresso de alta presión para café profesional en casa',
            price: '$189.00',
            image: 'https://m.media-amazon.com/images/I/71wsBj0acUL.jpg'
          },
          {
            name: 'Calentador de Tazas USB',
            description: 'Base conectora USB para mantener tu café o té caliente',
            price: '$17.49',
            image: 'https://m.media-amazon.com/images/I/51qajRKWjRL._UF894,1000_QL80_.jpg'
          },
          {
            name: 'Hervidor de Agua Eléctrico',
            description: 'Hervidor de acero inoxidable con apagado automático y 1.7L de capacidad',
            price: '$39.95',
            image: 'https://media.adeo.com/mkp/43f3afdf460298821f01597846fe73b1/media.jpg?width=3000&height=3000&format=jpg&quality=80&fit=bounds'
          },
          {
            name: 'Organizador de Especias Giratorio',
            description: 'Torre giratoria con frascos de especias incluidos',
            price: '$44.99',
            image: 'https://m.media-amazon.com/images/I/616wOSKbYgL._UF894,1000_QL80_.jpg'
          },
          {
            name: 'Juego de Cuchillos con Soporte',
            description: 'Set de cuchillos de cocina con base magnética de madera',
            price: '$129.99',
            image: 'https://m.media-amazon.com/images/I/610b0WUFPYL._UF894,1000_QL80_.jpg'
          },
          {
            name: 'Cortador de Verduras en Espiral',
            description: 'Herramienta para hacer fideos de calabacín y otras verduras',
            price: '$24.99',
            image: 'https://m.media-amazon.com/images/I/81ByNV7mZxL.jpg'
          },
          {
            name: 'Calentador de Alimentos Eléctrico Portátil',
            description: 'Fiambrera eléctrica ideal para llevar comida caliente al trabajo',
            price: '$49.99',
            image: 'https://i.ebayimg.com/images/g/2tAAAOSwyJ1k7BZz/s-l1200.jpg'
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
          },
          {
            name: 'Tazones para Mezclar de Acero',
            description: 'Set de 5 bowls de acero inoxidable con tapas y medidas internas',
            price: '$49.95',
            image: 'https://stevens.com.pa/media/catalog/product/1/0/1000841892_no_color_1_uqjeifij2lfjdm5w.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'
          },
          {
            name: 'Organizador de Cajones para Cubiertos',
            description: 'Organizador extensible de bambú para utensilios de cocina',
            price: '$29.99',
            image: 'https://m.media-amazon.com/images/I/71pNcjq+UwL._UF894,1000_QL80_.jpg'
          },
          {
            name: 'Bandejas para Hornear Antiadherentes',
            description: 'Juego de 3 bandejas para horno con recubrimiento antiadherente',
            price: '$37.99',
            image: 'https://m.media-amazon.com/images/I/61PiVk4+RUL._UF894,1000_QL80_.jpg'
          },
          {
            name: 'Juego de Tazas y Cucharas Medidoras',
            description: 'Set de 13 piezas de acero inoxidable con anillos organizadores',
            price: '$22.49',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3vrbWSVQSSMvrcu0h-ADewFw3S1X8lZrAQ&s'
          },
          {
            name: 'Porta Condimentos Giratorio',
            description: 'Organizador de especias con 20 frascos y base giratoria',
            price: '$42.00',
            image: 'https://static.lclhome.com.br/public/lcl/imagens/produtos/porta-temperos-giratorio-de-vidro-yoi-preto-13533.jpg'
          },
          {
            name: 'Bandeja Organizadora para Refrigerador',
            description: 'Set de 6 bandejas transparentes para ordenar alimentos',
            price: '$34.90',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7dtgekw6JACNxfdbi3UWm0wKs5655Hnre2A&s'
          },
          {
            name: 'Platos de Cerámica Artesanal',
            description: 'Juego de 4 platos con diseño rústico y acabado mate',
            price: '$64.99',
            image: 'https://i.pinimg.com/736x/04/c2/02/04c2029b298652eb4048fc45f6965dd0.jpg'
          },
          {
            name: 'Tapetes de Silicona para Hornear',
            description: 'Set de 3 tapetes reutilizables para hornear sin papel',
            price: '$18.99',
            image: 'https://www.ikea.com/co/es/images/products/baktradition-tapete-de-silicona-para-hornear-beige__0923454_pe790771_s5.jpg'
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
    },
    about: {
      title: 'Sobre Nosotros',
      description: 'Somos una empresa familiar dedicada a equipar las cocinas más exigentes con productos de la más alta calidad. Nuestra pasión por la cocina nos impulsa a seleccionar cuidadosamente cada producto que ofrecemos.',
      story: {
        title: 'Nuestra Historia',
        paragraph1: 'Fundada en 2010, CocinaStore nació del sueño de hacer accesibles los mejores utensilios de cocina para todos los amantes de la gastronomía. Comenzamos como una pequeña tienda familiar y hemos crecido hasta convertirnos en referente del sector.',
        paragraph2: 'Trabajamos directamente con fabricantes reconocidos mundialmente para garantizar que cada producto cumpla con nuestros estándares de calidad. Nuestro equipo de expertos prueba personalmente cada artículo antes de incluirlo en nuestro catálogo.',
        paragraph3: 'Hoy, después de más de una década, seguimos comprometidos con nuestra misión original: ayudar a crear experiencias culinarias excepcionales en cada hogar.'
      },
      features: {
        quality: {
          title: 'Calidad Premium',
          description: 'Seleccionamos únicamente productos de marcas reconocidas con los más altos estándares de calidad y durabilidad.'
        },
        experience: {
          title: '15+ Años de Experiencia',
          description: 'Nuestro equipo cuenta con más de 15 años de experiencia en el sector de equipamiento para cocina.'
        },
        delivery: {
          title: 'Entrega Rápida',
          description: 'Envío gratuito en pedidos superiores a $50 y entrega express disponible en área metropolitana.'
        },
        warranty: {
          title: 'Garantía Extendida',
          description: 'Todos nuestros productos incluyen garantía extendida y servicio técnico especializado.'
        }
      }
    },
    contact: {
      title: 'Contáctanos',
      subtitle: 'Estamos aquí para ayudarte a encontrar los productos perfectos para tu cocina. No dudes en contactarnos para cualquier consulta o asesoramiento personalizado.',
      info: {
        address: {
          title: 'Dirección',
          street: 'Av. Gastronómica 123',
          city: 'Ciudad de México, CDMX 01234'
        },
        phone: {
          title: 'Teléfono',
          main: '+52 (55) 1234-5678',
          whatsapp: 'WhatsApp: +52 (55) 8765-4321'
        },
        email: {
          title: 'Correo Electrónico',
          sales: 'ventas@cocinastore.com',
          support: 'soporte@cocinastore.com'
        },
        hours: {
          title: 'Horarios',
          weekdays: 'Lun - Vie: 9:00 AM - 7:00 PM',
          weekend: 'Sáb - Dom: 10:00 AM - 6:00 PM'
        }
      },
      form: {
        title: 'Envíanos un Mensaje',
        name: 'Nombre Completo',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        subject: {
          label: 'Asunto',
          placeholder: 'Selecciona un tema',
          options: {
            general: 'Consulta General',
            products: 'Información de Productos',
            support: 'Soporte Técnico',
            wholesale: 'Ventas al Por Mayor'
          }
        },
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntanos cómo podemos ayudarte...',
        send: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: {
          title: '¡Mensaje Enviado!',
          message: 'Gracias por contactarnos. Te responderemos dentro de las próximas 24 horas.',
          sendAnother: 'Enviar otro mensaje'
        }
      },
      visit: {
        title: 'Visita Nuestra Tienda',
        description: 'Te invitamos a conocer nuestro showroom donde podrás ver, tocar y probar nuestros productos antes de comprar. Nuestro equipo de expertos estará encantado de asesorarte.',
        directions: {
          title: 'Cómo Llegar',
          metro: 'Metro: Estación Cocina (Línea 3)',
          bus: 'Autobús: Rutas 45, 67, 89',
          parking: 'Estacionamiento gratuito disponible'
        },
        services: {
          title: 'Servicios en Tienda',
          consultation: 'Consultoría personalizada gratuita',
          demo: 'Demostraciones de productos',
          installation: 'Servicio de instalación'
        }
      }
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
      viewAll: 'View All',
      viewLess: 'View Less'
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
    },
    about: {
      title: 'About Us',
      description: 'We are a family business dedicated to equipping the most demanding kitchens with the highest quality products. Our passion for cooking drives us to carefully select each product we offer.',
      story: {
        title: 'Our Story',
        paragraph1: 'Founded in 2010, CocinaStore was born from the dream of making the best kitchen utensils accessible to all gastronomy lovers. We started as a small family store and have grown to become a reference in the sector.',
        paragraph2: 'We work directly with world-renowned manufacturers to ensure that each product meets our quality standards. Our team of experts personally tests each item before including it in our catalog.',
        paragraph3: 'Today, after more than a decade, we remain committed to our original mission: helping to create exceptional culinary experiences in every home.'
      },
      features: {
        quality: {
          title: 'Premium Quality',
          description: 'We select only products from recognized brands with the highest standards of quality and durability.'
        },
        experience: {
          title: '15+ Years Experience',
          description: 'Our team has more than 15 years of experience in the kitchen equipment sector.'
        },
        delivery: {
          title: 'Fast Delivery',
          description: 'Free shipping on orders over $50 and express delivery available in metropolitan area.'
        },
        warranty: {
          title: 'Extended Warranty',
          description: 'All our products include extended warranty and specialized technical service.'
        }
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to help you find the perfect products for your kitchen. Do not hesitate to contact us for any consultation or personalized advice.',
      info: {
        address: {
          title: 'Address',
          street: '123 Culinary Avenue',
          city: 'New York, NY 10001'
        },
        phone: {
          title: 'Phone',
          main: '+1 (555) 123-4567',
          whatsapp: 'WhatsApp: +1 (555) 765-4321'
        },
        email: {
          title: 'Email',
          sales: 'sales@cocinastore.com',
          support: 'support@cocinastore.com'
        },
        hours: {
          title: 'Hours',
          weekdays: 'Mon - Fri: 9:00 AM - 7:00 PM',
          weekend: 'Sat - Sun: 10:00 AM - 6:00 PM'
        }
      },
      form: {
        title: 'Send us a Message',
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        subject: {
          label: 'Subject',
          placeholder: 'Select a topic',
          options: {
            general: 'General Inquiry',
            products: 'Product Information',
            support: 'Technical Support',
            wholesale: 'Wholesale Sales'
          }
        },
        message: 'Message',
        messagePlaceholder: 'Tell us how we can help you...',
        send: 'Send Message',
        sending: 'Sending...',
        success: {
          title: 'Message Sent!',
          message: 'Thank you for contacting us. We will respond within the next 24 hours.',
          sendAnother: 'Send another message'
        }
      },
      visit: {
        title: 'Visit Our Store',
        description: 'We invite you to visit our showroom where you can see, touch and try our products before buying. Our team of experts will be happy to advise you.',
        directions: {
          title: 'How to Get There',
          metro: 'Subway: Kitchen Station (Line 3)',
          bus: 'Bus: Routes 45, 67, 89',
          parking: 'Free parking available'
        },
        services: {
          title: 'In-Store Services',
          consultation: 'Free personalized consultation',
          demo: 'Product demonstrations',
          installation: 'Installation service'
        }
      }
    }
  }
};