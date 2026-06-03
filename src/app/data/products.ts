export interface Product {
  id: number;
  brand: string;
  nameEn: string;
  nameAr: string;
  price: number;
  oldPrice?: number;
  image: string;
  inStock: boolean;
  isNew?: boolean;
  isOffer?: boolean;
  storage: string;
  color: string;
  colorAr: string;
  specsEn: Record<string, string>;
  specsAr: Record<string, string>;
  category: 'phone';
}

export interface Accessory {
  id: number;
  category: string;
  nameEn: string;
  nameAr: string;
  price: number;
  oldPrice?: number;
  image: string;
  inStock: boolean;
  brand: string;
}

export const phones: Product[] = [
  {
    id: 1,
    brand: 'Apple',
    nameEn: 'iPhone 15 Pro Max',
    nameAr: 'آيفون 15 برو ماكس',
    price: 67999,
    oldPrice: 72999,
    image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg',
    inStock: true,
    isNew: true,
    isOffer: true,
    storage: '256GB',
    color: 'Titanium Black',
    colorAr: 'تيتانيوم أسود',
    specsEn: { Display: '6.7" Super Retina XDR', Chip: 'A17 Pro', Camera: '48MP Triple', Battery: '4422 mAh', OS: 'iOS 17' },
    specsAr: { الشاشة: '6.7 بوصة Super Retina XDR', المعالج: 'A17 Pro', الكاميرا: '48 ميجابيكسل ثلاثية', البطارية: '4422 مللي أمبير', النظام: 'iOS 17' },
    category: 'phone',
  },
  {
    id: 2,
    brand: 'Samsung',
    nameEn: 'Galaxy S24 Ultra',
    nameAr: 'جالاكسي S24 الترا',
    price: 59999,
    oldPrice: 64999,
    image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-1.jpg',
    inStock: true,
    isNew: true,
    isOffer: false,
    storage: '256GB',
    color: 'Titanium Gray',
    colorAr: 'رمادي تيتانيوم',
    specsEn: { Display: '6.8" Dynamic AMOLED 2X', Chip: 'Snapdragon 8 Gen 3', Camera: '200MP Quad', Battery: '5000 mAh', OS: 'Android 14' },
    specsAr: { الشاشة: '6.8 بوصة Dynamic AMOLED 2X', المعالج: 'Snapdragon 8 Gen 3', الكاميرا: '200 ميجابيكسل رباعية', البطارية: '5000 مللي أمبير', النظام: 'Android 14' },
    category: 'phone',
  },
  {
    id: 3,
    brand: 'Xiaomi',
    nameEn: 'Xiaomi 14 Pro',
    nameAr: 'شاومي 14 برو',
    price: 38999,
    image: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-1.jpg',
    inStock: true,
    isNew: false,
    isOffer: true,
    storage: '512GB',
    color: 'Black',
    colorAr: 'أسود',
    specsEn: { Display: '6.73" LTPO AMOLED', Chip: 'Snapdragon 8 Gen 3', Camera: '50MP Leica Triple', Battery: '4880 mAh', OS: 'Android 14' },
    specsAr: { الشاشة: '6.73 بوصة LTPO AMOLED', المعالج: 'Snapdragon 8 Gen 3', الكاميرا: '50 ميجابيكسل Leica ثلاثية', البطارية: '4880 مللي أمبير', النظام: 'Android 14' },
    category: 'phone',
  },
  {
    id: 4,
    brand: 'OPPO',
    nameEn: 'OPPO Find X7 Pro',
    nameAr: 'أوبو فايند X7 برو',
    price: 42999,
    image: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno11-1.jpg',
    inStock: true,
    isNew: false,
    isOffer: false,
    storage: '256GB',
    color: 'Sea Blue',
    colorAr: 'أزرق بحري',
    specsEn: { Display: '6.82" AMOLED 120Hz', Chip: 'Dimensity 9300', Camera: '50MP Hasselblad Triple', Battery: '5000 mAh', OS: 'Android 14' },
    specsAr: { الشاشة: '6.82 بوصة AMOLED 120Hz', المعالج: 'Dimensity 9300', الكاميرا: '50 ميجابيكسل Hasselblad ثلاثية', البطارية: '5000 مللي أمبير', النظام: 'Android 14' },
    category: 'phone',
  },
  {
    id: 5,
    brand: 'Apple',
    nameEn: 'iPhone 15',
    nameAr: 'آيفون 15',
    price: 44999,
    oldPrice: 48999,
    image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg',
    inStock: true,
    isNew: false,
    isOffer: true,
    storage: '128GB',
    color: 'Pink',
    colorAr: 'وردي',
    specsEn: { Display: '6.1" Super Retina XDR', Chip: 'A16 Bionic', Camera: '48MP Dual', Battery: '3877 mAh', OS: 'iOS 17' },
    specsAr: { الشاشة: '6.1 بوصة Super Retina XDR', المعالج: 'A16 Bionic', الكاميرا: '48 ميجابيكسل مزدوجة', البطارية: '3877 مللي أمبير', النظام: 'iOS 17' },
    category: 'phone',
  },
  {
    id: 6,
    brand: 'Samsung',
    nameEn: 'Galaxy A55',
    nameAr: 'جالاكسي A55',
    price: 18999,
    image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-5g-1.jpg',
    inStock: true,
    isNew: true,
    isOffer: false,
    storage: '128GB',
    color: 'Navy Blue',
    colorAr: 'أزرق داكن',
    specsEn: { Display: '6.6" Super AMOLED 120Hz', Chip: 'Exynos 1480', Camera: '50MP Triple', Battery: '5000 mAh', OS: 'Android 14' },
    specsAr: { الشاشة: '6.6 بوصة Super AMOLED 120Hz', المعالج: 'Exynos 1480', الكاميرا: '50 ميجابيكسل ثلاثية', البطارية: '5000 مللي أمبير', النظام: 'Android 14' },
    category: 'phone',
  },
  {
    id: 7,
    brand: 'Tecno',
    nameEn: 'Tecno Camon 30 Pro',
    nameAr: 'تيكنو كامون 30 برو',
    price: 12999,
    image: 'https://fdn2.gsmarena.com/vv/pics/tecno/tecno-spark-20-pro-1.jpg',
    inStock: true,
    isNew: true,
    isOffer: true,
    storage: '256GB',
    color: 'Midnight Shadow',
    colorAr: 'ظل الليل',
    specsEn: { Display: '6.77" AMOLED 144Hz', Chip: 'Dimensity 8200', Camera: '50MP AI Triple', Battery: '5000 mAh', OS: 'Android 14' },
    specsAr: { الشاشة: '6.77 بوصة AMOLED 144Hz', المعالج: 'Dimensity 8200', الكاميرا: '50 ميجابيكسل AI ثلاثية', البطارية: '5000 مللي أمبير', النظام: 'Android 14' },
    category: 'phone',
  },
  {
    id: 8,
    brand: 'Xiaomi',
    nameEn: 'Redmi Note 13 Pro+',
    nameAr: 'ريدمي نوت 13 برو+',
    price: 22999,
    oldPrice: 25999,
    image: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-1.jpg',
    inStock: false,
    isNew: false,
    isOffer: true,
    storage: '256GB',
    color: 'Aurora Purple',
    colorAr: 'بنفسجي أورورا',
    specsEn: { Display: '6.67" AMOLED 120Hz', Chip: 'Dimensity 7200 Ultra', Camera: '200MP Triple', Battery: '5000 mAh', OS: 'Android 13' },
    specsAr: { الشاشة: '6.67 بوصة AMOLED 120Hz', المعالج: 'Dimensity 7200 Ultra', الكاميرا: '200 ميجابيكسل ثلاثية', البطارية: '5000 مللي أمبير', النظام: 'Android 13' },
    category: 'phone',
  },
];

export const accessories: Accessory[] = [
  { id: 101, category: 'cases', nameEn: 'Magsafe Leather Case – iPhone 15', nameAr: 'كفر جلد MagSafe – آيفون 15', price: 899, image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop&auto=format', inStock: true, brand: 'Apple' },
  { id: 102, category: 'cases', nameEn: 'Clear Case – Samsung S24', nameAr: 'كفر شفاف – سامسونج S24', price: 299, image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop&auto=format', inStock: true, brand: 'Samsung' },
  { id: 103, category: 'chargers', nameEn: 'USB-C 65W Fast Charger', nameAr: 'شاحن USB-C 65 واط سريع', price: 699, oldPrice: 899, image: 'https://images.unsplash.com/photo-1583394293214-0b1b6b1b1b1b?w=400&h=400&fit=crop&auto=format', inStock: true, brand: 'Anker' },
  { id: 104, category: 'chargers', nameEn: 'MagSafe Wireless Charger 15W', nameAr: 'شاحن لاسلكي MagSafe 15 واط', price: 1299, image: 'https://images.unsplash.com/photo-1583394293214-0b1b6b1b1b1b?w=400&h=400&fit=crop&auto=format', inStock: true, brand: 'Apple' },
  { id: 105, category: 'earphones', nameEn: 'AirPods Pro (2nd Gen)', nameAr: 'إيربودز برو الجيل الثاني', price: 8999, oldPrice: 10499, image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop&auto=format', inStock: true, brand: 'Apple' },
  { id: 106, category: 'earphones', nameEn: 'Galaxy Buds3 Pro', nameAr: 'جالاكسي بودز 3 برو', price: 5999, image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop&auto=format', inStock: true, brand: 'Samsung' },
  { id: 107, category: 'screenProtectors', nameEn: 'Tempered Glass – iPhone 15 Pro', nameAr: 'زجاج مقوى – آيفون 15 برو', price: 199, image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop&auto=format', inStock: true, brand: 'Generic' },
  { id: 108, category: 'cables', nameEn: 'USB-C to USB-C Braided 2m', nameAr: 'كابل USB-C مضفر 2 متر', price: 249, image: 'https://images.unsplash.com/photo-1583394293214-0b1b6b1b1b1b?w=400&h=400&fit=crop&auto=format', inStock: true, brand: 'Anker' },
  { id: 109, category: 'cases', nameEn: 'Carbon Fiber Case – OPPO Find X7', nameAr: 'كفر كربون – أوبو فايند X7', price: 449, image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop&auto=format', inStock: false, brand: 'OPPO' },
  { id: 110, category: 'chargers', nameEn: 'Car Charger 45W Dual USB-C', nameAr: 'شاحن سيارة 45 واط USB-C مزدوج', price: 599, image: 'https://images.unsplash.com/photo-1583394293214-0b1b6b1b1b1b?w=400&h=400&fit=crop&auto=format', inStock: true, brand: 'Anker' },
  { id: 111, category: 'earphones', nameEn: 'Xiaomi Redmi Buds 5 Pro', nameAr: 'شاومي ريدمي بودز 5 برو', price: 2499, image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop&auto=format', inStock: true, brand: 'Xiaomi' },
  { id: 112, category: 'screenProtectors', nameEn: 'Privacy Screen Protector – Samsung S24', nameAr: 'حماية خصوصية – سامسونج S24', price: 349, image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop&auto=format', inStock: true, brand: 'Samsung' },
];
