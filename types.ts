export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  images: string[];
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}