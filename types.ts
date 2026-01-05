
export interface MenuItem {
  id: string;
  title: string;
  image: string;
}

export interface PizzaDetail {
  id: string;
  name: string;
  // Fix: Changed from void | string to string to allow rendering as ReactNode
  descriptionPt: string;
  // Fix: Changed from void | string to string to allow rendering as ReactNode
  descriptionEn: string;
  priceG: string;
  priceP: string;
  image: string;
  isVegetarian?: boolean;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  cep: string;
  phone: string;
  mapUrl: string;
}

export type ViewState = 'home' | 'menu' | 'locations' | 'reservations' | 'delivery';
