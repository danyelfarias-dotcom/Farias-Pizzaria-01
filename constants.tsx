
import { MenuItem, Location, PizzaDetail } from './types';

export const MENU_ITEMS: MenuItem[] = [
  { id: 'pizzas', title: 'Pizzas', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400' },
  { id: '5', title: 'Bebidas', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400' },
  { id: '6', title: 'Carta de Vinhos', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=400' },
];

export const PIZZAS_QUEIJOS: PizzaDetail[] = [
  {
    id: 'b1',
    name: 'Burrata al Pesto',
    isVegetarian: true,
    descriptionPt: 'Mozarela de búfala cremosa, típica da Puglia, tomates frescos em cubos e pesto de manjericão',
    descriptionEn: 'A traditional creamy mozzarella from Apulia, on cubed fresh tomatoes and Genovese pesto sauce',
    priceG: '139',
    priceP: '92',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'b2',
    name: 'Catupiry',
    isVegetarian: true,
    descriptionPt: 'Catupiry sobre nosso molho de tomate',
    descriptionEn: 'Prepared with Catupiry cheese on a fresh tomato sauce',
    priceG: '123',
    priceP: '82',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'b3',
    name: 'Margherita',
    isVegetarian: true,
    descriptionPt: 'Mozarela e folhas de manjericão sobre molho de tomate fresco',
    descriptionEn: 'Prepared with mozzarella, tomato sauce and basil leaves',
    priceG: '123',
    priceP: '82',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'b4',
    name: 'Margherita Speciale',
    isVegetarian: true,
    descriptionPt: 'Mozarela de búfala e folhas de manjericão sobre molho de tomate fresco',
    descriptionEn: 'Special mozzarella, tomato sauce and basil',
    priceG: '129',
    priceP: '84',
    image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'b5',
    name: 'Napoletana',
    isVegetarian: true,
    descriptionPt: 'Mozarela, rodelas de tomate e folhas de manjericão sobre molho de tomate fresco',
    descriptionEn: 'A fresh tomato sauce topped with mozzarella, slices of tomato and basil',
    priceG: '129',
    priceP: '84',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'b6',
    name: 'Napoli in Beirut grande',
    isVegetarian: true,
    descriptionPt: 'Queijo de cabra, zatar e molho de tomate',
    descriptionEn: 'Goat cheese, zatar and fresh tomato sauce',
    priceG: '132',
    priceP: '86',
    image: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'b7',
    name: 'Quattro Formaggi',
    isVegetarian: true,
    descriptionPt: 'Catupiry, mozarela, queijo parmesão e gorgonzola sobre molho de tomate fresco',
    descriptionEn: 'Catupiry, mozzarella, parmesan, gorgonzola and fresh tomato sauce',
    priceG: '132',
    priceP: '86',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'b8',
    name: 'Carciofi',
    isVegetarian: true,
    descriptionPt: 'Corações de alcachofra italiana, mozarela e molho de tomate fresco',
    descriptionEn: 'Hearts of artichokes and mozarella in a fresh tomato sauce',
    priceG: '139',
    priceP: '92',
    image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'b9',
    name: 'Cuore di Palma (palmito)',
    isVegetarian: true,
    descriptionPt: 'Fatias de palmito, mozarela e molho de tomate fresco',
    descriptionEn: 'Prepared with hearts of palm and mozzarella in a tomato sauce',
    priceG: '129',
    priceP: '84',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'b10',
    name: 'Do Nonno',
    isVegetarian: true,
    descriptionPt: 'Tomates assados na brasa com alcaparras, alho e especiarias sobre mozarela e molho de tomate fresco. Rúcula opcional.',
    descriptionEn: 'Roasted tomatoes with capers, garlic and spices over mozzarella and fresh tomato sauce. Optional arugula.',
    priceG: '135',
    priceP: '88',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=300'
  }
];

export const LOCATIONS: Location[] = [
  {
    id: 'cangucu',
    name: 'Farias - Canguçu',
    address: 'Rua Fernando Krusser Moreira, 59 - Bairro Teixeiras, Canguçu - RS',
    cep: '96600-000',
    phone: '53 3252-1000',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Fernando+Krusser+Moreira%2C+59+-+Bairro+Teixeiras%2C+Cangu%C3%A7u+-+RS%2C+96600-000'
  }
];
