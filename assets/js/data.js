const categories = [
  { id: 1, name: "Nigiri", icon: "🍣", description: "Pescado fresco sobre arroz" },
  { id: 2, name: "Maki", icon: "🍱", description: "Rollos tradicionales" },
  { id: 3, name: "Sashimi", icon: "🐟", description: "Pescado fresco cortado" },
  { id: 4, name: "Rolls Especiales", icon: "🌟", description: "Creaciones de la casa" },
  { id: 5, name: "Entradas", icon: "🥢", description: "Acompañamientos" },
  { id: 6, name: "Bebidas", icon: "🍵", description: "Bebidas japonesas" }
];

const products = [
  {
    id: 1,
    name: "Salmón Nigiri",
    category: "Nigiri",
    price: 4500,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop",
    description: "Delicado salmón fresco sobre arroz de sushi sazonado con vinagre de arroz. Pieza clásica de la gastronomía japonesa.",
    rating: 4.8,
    reviews: 124,
    featured: true,
    popular: true,
    ingredients: ["Salmón fresco", "Arroz de sushi", "Vinagre de arroz", "Wasabi"]
  },
  {
    id: 2,
    name: "Atún Nigiri",
    category: "Nigiri",
    price: 5000,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop",
    description: "Atún rojo de primera calidad cortado finamente y servido sobre arroz de sushi.",
    rating: 4.7,
    reviews: 98,
    featured: true,
    popular: false,
    ingredients: ["Atún rojo", "Arroz de sushi", "Vinagre de arroz"]
  },
  {
    id: 3,
    name: "California Roll",
    category: "Maki",
    price: 8500,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
    description: "Roll de cangrejo, aguacate y pepino envuelto en arroz y alga nori con semillas de sésamo.",
    rating: 4.6,
    reviews: 215,
    featured: true,
    popular: true,
    ingredients: ["Cangrejo", "Aguacate", "Pepino", "Arroz", "Nori", "Sésamo"]
  },
  {
    id: 4,
    name: "Dragon Roll",
    category: "Rolls Especiales",
    price: 12000,
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop",
    description: "Roll de langostino tempura y aguacate, cubierto con finas láminas de aguacate y salsa unagi.",
    rating: 4.9,
    reviews: 178,
    featured: true,
    popular: true,
    ingredients: ["Langostino tempura", "Aguacate", "Salsa unagi", "Arroz", "Nori"]
  },
  {
    id: 5,
    name: "Sashimi de Salmón",
    category: "Sashimi",
    price: 10000,
    image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&h=300&fit=crop",
    description: "Finas láminas de salmón fresco servidas con wasabi y jengibre encurtido. 8 piezas.",
    rating: 4.9,
    reviews: 156,
    featured: false,
    popular: true,
    ingredients: ["Salmón fresco", "Wasabi", "Jengibre encurtido", "Salsa de soya"]
  },
  {
    id: 6,
    name: "Spicy Tuna Roll",
    category: "Maki",
    price: 9500,
    image: "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=400&h=300&fit=crop",
    description: "Roll de atún picante con pepino y salsa sriracha. Para los amantes del picante.",
    rating: 4.5,
    reviews: 143,
    featured: true,
    popular: true,
    ingredients: ["Atún", "Pepino", "Salsa sriracha", "Arroz", "Nori"]
  },
  {
    id: 7,
    name: "Ebi Tempura Roll",
    category: "Rolls Especiales",
    price: 11000,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop",
    description: "Langostinos en tempura crujiente envueltos en arroz y nori con salsa teriyaki.",
    rating: 4.7,
    reviews: 167,
    featured: false,
    popular: true,
    ingredients: ["Langostinos tempura", "Arroz", "Nori", "Salsa teriyaki", "Sésamo"]
  },
  {
    id: 8,
    name: "Gyozas (6 piezas)",
    category: "Entradas",
    price: 6500,
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop",
    description: "Dumplings japoneses rellenos de cerdo y verduras, servidos a la plancha con salsa ponzu.",
    rating: 4.6,
    reviews: 189,
    featured: false,
    popular: true,
    ingredients: ["Cerdo", "Verduras", "Masa de gyozas", "Salsa ponzu"]
  },
  {
    id: 9,
    name: "Edamame",
    category: "Entradas",
    price: 4000,
    image: "https://images.unsplash.com/photo-1564093497595-593b96d80180?w=400&h=300&fit=crop",
    description: "Vainas de soja al vapor con sal marina. Aperitivo tradicional japonés.",
    rating: 4.4,
    reviews: 95,
    featured: false,
    popular: false,
    ingredients: ["Soja", "Sal marina"]
  },
  {
    id: 10,
    name: "Miso Soup",
    category: "Entradas",
    price: 3500,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
    description: "Sopa tradicional de pasta de soja con tofu, wakame y cebollín.",
    rating: 4.5,
    reviews: 112,
    featured: false,
    popular: false,
    ingredients: ["Pasta de miso", "Tofu", "Wakame", "Cebollín"]
  },
  {
    id: 11,
    name: "Té Verde",
    category: "Bebidas",
    price: 2500,
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=300&fit=crop",
    description: "Té verde japonés sencha servido caliente. Refrescante y antioxidante.",
    rating: 4.3,
    reviews: 78,
    featured: false,
    popular: false,
    ingredients: ["Té verde sencha"]
  },
  {
    id: 12,
    name: "Sake Premium",
    category: "Bebidas",
    price: 8000,
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=300&fit=crop",
    description: "Sake japonés premium servido frío. Ideal para acompañar sushi.",
    rating: 4.8,
    reviews: 67,
    featured: false,
    popular: true,
    ingredients: ["Sake premium junmai"]
  },
  {
    id: 13,
    name: "Rainbow Roll",
    category: "Rolls Especiales",
    price: 13000,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    description: "California roll cubierto con una variedad de pescados: salmón, atún, hamachi y aguacate.",
    rating: 4.8,
    reviews: 134,
    featured: true,
    popular: true,
    ingredients: ["Salmón", "Atún", "Hamachi", "Aguacate", "Cangrejo", "Arroz", "Nori"]
  },
  {
    id: 14,
    name: "Tempura Mixto",
    category: "Entradas",
    price: 7500,
    image: "https://images.unsplash.com/photo-1615361200141-2b44ec531533?w=400&h=300&fit=crop",
    description: "Selección de langostinos y verduras en tempura crujiente con salsa tentsuyu.",
    rating: 4.6,
    reviews: 103,
    featured: false,
    popular: false,
    ingredients: ["Langostinos", "Verduras", "Masa tempura", "Salsa tentsuyu"]
  },
  {
    id: 15,
    name: "Uni Nigiri",
    category: "Nigiri",
    price: 8000,
    image: "https://images.unsplash.com/photo-1607301405390-d831c2721f93?w=400&h=300&fit=crop",
    description: "Especialidad de erizo de mar fresco sobre arroz. Textura cremosa y sabor único.",
    rating: 4.9,
    reviews: 45,
    featured: false,
    popular: false,
    ingredients: ["Erizo de mar", "Arroz de sushi", "Vinagre de arroz"]
  },
  {
    id: 16,
    name: "Tataki de Atún",
    category: "Sashimi",
    price: 11500,
    image: "https://images.unsplash.com/photo-1580822184713-fc540007feaf?w=400&h=300&fit=crop",
    description: "Atún sellado por fuera y crudo por dentro, cortado finamente con ponzu y cebollín.",
    rating: 4.8,
    reviews: 89,
    featured: false,
    popular: false,
    ingredients: ["Atún", "Ponzu", "Cebollín", "Sésamo"]
  },
  {
    id: 17,
    name: "Cerveza Asahi",
    category: "Bebidas",
    price: 4500,
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=300&fit=crop",
    description: "Cerveza japonesa Asahi Super Dry. Refrescante y ligera.",
    rating: 4.5,
    reviews: 156,
    featured: false,
    popular: false,
    ingredients: ["Cerveza Asahi 330ml"]
  },
  {
    id: 18,
    name: "Volcano Roll",
    category: "Rolls Especiales",
    price: 12500,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop",
    description: "Roll de langostino tempura con topping de kanikama gratinado y salsa picante.",
    rating: 4.7,
    reviews: 98,
    featured: false,
    popular: true,
    ingredients: ["Langostino tempura", "Kanikama", "Salsa picante", "Mayonesa", "Arroz", "Nori"]
  },
  {
    id: 19,
    name: "Vegetarian Roll",
    category: "Maki",
    price: 7000,
    image: "https://images.unsplash.com/photo-1562158074-3b1e2b10d560?w=400&h=300&fit=crop",
    description: "Roll vegetariano con aguacate, pepino, zanahoria y rábano encurtido.",
    rating: 4.4,
    reviews: 76,
    featured: false,
    popular: false,
    ingredients: ["Aguacate", "Pepino", "Zanahoria", "Rábano", "Arroz", "Nori"]
  },
  {
    id: 20,
    name: "Tamarindo Water",
    category: "Bebidas",
    price: 3000,
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&h=300&fit=crop",
    description: "Agua fresca de tamarindo natural. Refrescante y dulce.",
    rating: 4.3,
    reviews: 54,
    featured: false,
    popular: false,
    ingredients: ["Tamarindo", "Agua", "Azúcar"]
  }
];

const team = [
  {
    name: "Chef Takeshi Yamamoto",
    role: "Chef Principal",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&h=300&fit=crop",
    bio: "Con más de 20 años de experiencia en la cocina japonesa, el Chef Takeshi trae la autenticidad de Tokio a cada plato."
  },
  {
    name: "María Tanaka",
    role: "Sous Chef",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop",
    bio: "Especialista en rolls creativos y fusión. María combina técnicas japonesas con ingredientes locales."
  },
  {
    name: "Carlos Mendoza",
    role: "Chef de Sashimi",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=300&h=300&fit=crop",
    bio: "Maestro en el corte y preparación de pescados frescos. Su precisión es reconocida por los comensales más exigentes."
  }
];

const reviews = [
  { id: 1, productId: 1, user: "Ana García", rating: 5, date: "2024-01-15", comment: "El mejor salmón nigiri que he probado. Fresco y delicado." },
  { id: 2, productId: 1, user: "Pedro López", rating: 4, date: "2024-01-10", comment: "Muy bueno, aunque el arroz podría estar un poco más templado." },
  { id: 3, productId: 3, user: "Laura Martínez", rating: 5, date: "2024-01-20", comment: "California roll perfecto. El aguacate estaba en su punto." },
  { id: 4, productId: 4, user: "Roberto Sánchez", rating: 5, date: "2024-02-01", comment: "El Dragon Roll es espectacular. La salsa unagi le da un toque increíble." },
  { id: 5, productId: 5, user: "Carmen Ruiz", rating: 5, date: "2024-01-25", comment: "Sashimi de salmón fresco y de calidad. Volveré sin duda." },
  { id: 6, productId: 6, user: "Diego Hernández", rating: 4, date: "2024-02-05", comment: "Buen nivel de picante. Me gustó mucho." },
  { id: 7, productId: 8, user: "Sofía Torres", rating: 5, date: "2024-01-18", comment: "Las gyozas están deliciosas, tanto la textura como el sabor." },
  { id: 8, productId: 13, user: "Miguel Ángel", rating: 5, date: "2024-02-10", comment: "Rainbow Roll increíble. Variedad de sabores en cada bocado." }
];

const orders = [
  {
    id: "ORD-2024-001",
    date: "2024-02-10",
    status: "Entregado",
    total: 35500,
    items: [
      { productId: 1, name: "Salmón Nigiri", quantity: 4, price: 4500 },
      { productId: 3, name: "California Roll", quantity: 2, price: 8500 }
    ],
    address: "Av. Providencia 123, Providencia",
    shipping: "Express",
    payment: "Tarjeta de crédito"
  },
  {
    id: "ORD-2024-002",
    date: "2024-02-05",
    status: "Entregado",
    total: 48000,
    items: [
      { productId: 4, name: "Dragon Roll", quantity: 2, price: 12000 },
      { productId: 5, name: "Sashimi de Salmón", quantity: 1, price: 10000 },
      { productId: 8, name: "Gyozas (6 piezas)", quantity: 1, price: 6500 },
      { productId: 11, name: "Té Verde", quantity: 2, price: 2500 }
    ],
    address: "Av. Irarrázaval 456, Providencia",
    shipping: "Estándar",
    payment: "PayPal"
  },
  {
    id: "ORD-2024-003",
    date: "2024-01-28",
    status: "Entregado",
    total: 25000,
    items: [
      { productId: 6, name: "Spicy Tuna Roll", quantity: 1, price: 9500 },
      { productId: 9, name: "Edamame", quantity: 1, price: 4000 },
      { productId: 12, name: "Sake Premium", quantity: 1, price: 8000 },
      { productId: 10, name: "Miso Soup", quantity: 1, price: 3500 }
    ],
    address: "Av. Providencia 123, Providencia",
    shipping: "Express",
    payment: "Tarjeta de débito"
  },
  {
    id: "ORD-2024-004",
    date: "2024-02-15",
    status: "En camino",
    total: 52500,
    items: [
      { productId: 13, name: "Rainbow Roll", quantity: 2, price: 13000 },
      { productId: 7, name: "Ebi Tempura Roll", quantity: 1, price: 11000 },
      { productId: 14, name: "Tempura Mixto", quantity: 1, price: 7500 },
      { productId: 17, name: "Cerveza Asahi", quantity: 2, price: 4500 }
    ],
    address: "Av. Vicuña Mackenna 789",
    shipping: "Express",
    payment: "Tarjeta de crédito"
  },
  {
    id: "ORD-2024-005",
    date: "2024-02-18",
    status: "Preparando",
    total: 38000,
    items: [
      { productId: 2, name: "Atún Nigiri", quantity: 4, price: 5000 },
      { productId: 15, name: "Uni Nigiri", quantity: 2, price: 8000 },
      { productId: 20, name: "Tamarindo Water", quantity: 2, price: 3000 }
    ],
    address: "Av. Providencia 123, Providencia",
    shipping: "Estándar",
    payment: "Efectivo"
  }
];

const user = {
  name: "Juan Pérez",
  email: "juan.perez@email.com",
  phone: "+56 2 2345 6789",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  address: "Av. Providencia 123, Providencia, Región Metropolitana",
  memberSince: "2023-06-15"
};

const shippingOptions = [
  { id: "standard", name: "Envío Estándar", price: 5000, time: "3-5 días hábiles" },
  { id: "express", name: "Envío Express", price: 10000, time: "1-2 días hábiles" },
  { id: "pickup", name: "Recoger en tienda", price: 0, time: "Disponible en 2 horas" }
];

const paymentMethods = [
  { id: "credit", name: "Tarjeta de Crédito", icon: "💳" },
  { id: "debit", name: "Tarjeta de Débito", icon: "💳" },
  { id: "paypal", name: "PayPal", icon: "🅿️" },
  { id: "cash", name: "Efectivo", icon: "💵" }
];
