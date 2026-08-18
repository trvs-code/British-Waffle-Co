export type MenuCategory = 'all' | 'waffles' | 'bubble' | 'red-velvet-fruit' | 'shakes';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  categoryName: string;
  price?: number;
  description: string;
  image: string;
  isBestSeller?: boolean;
  isSignature?: boolean;
  isNew?: boolean;
  isPureVeg: boolean;
  calories?: string;
  toppingsIncluded?: string[];
  waffleBaseOptions?: string[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  review: string;
  highlight: string;
  avatar?: string;
  source: 'Google' | 'Swiggy' | 'Zomato' | 'Justdial';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bubble' | 'waffles' | 'shakes' | 'hangout';
  categoryLabel: string;
  image: string;
  description?: string;
}

export interface Offer {
  id: string;
  title: string;
  tag: string;
  code?: string;
  discount: string;
  description: string;
  terms: string;
  validUntil?: string;
  accentColor: string;
}

export interface CustomOrderItem {
  item: MenuItem;
  base: string;
  extraToppings: string[];
  quantity: number;
  specialInstructions?: string;
}
