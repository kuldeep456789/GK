import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProductGallery } from './components/ProductGallery';
import { ProductInfo } from './components/ProductInfo';
import { Testimonials } from './components/Testimonials';
import { CartDrawer } from './components/CartDrawer';
import { ChatWidget } from './components/ChatWidget';
import { WordPressSection } from './components/WordPressSection';
import { Product, CartItem, Review } from './types';

// Mock Data matching the Amazon Product vibe
const MOCK_PRODUCT: Product = {
  id: 'audi-a4-2024',
  title: '2024 Audi A4 Sedan - Mythos Black Metallic (Premium Plus)',
  price: 45000,
  originalPrice: 48500,
  description: "The 2024 Audi A4 Sedan offers a brilliant blend of performance, luxury, and technology. Featuring the legendary quattro all-wheel drive, a turbocharged engine, and a meticulously crafted interior with the Audi Virtual Cockpit. Elevate your driving experience with unparalleled German engineering.",
  features: [
    "QUATTRO ALL-WHEEL DRIVE: Legendary grip and handling in all weather conditions.",
    "TURBOCHARGED ENGINE: 2.0L TFSI engine delivering 261 HP for an exhilarating drive.",
    "VIRTUAL COCKPIT: A fully digital 12.3-inch instrument cluster that allows you to customize information.",
    "LEATHER INTERIOR: Premium leather seating surfaces with heated front seats and ambient lighting.",
    "ADVANCED SAFETY: Audi pre sense city and lane departure warning for peace of mind."
  ],
  images: [
    "/audi_1.png",
    "/audi_2.png",
    "/audi_3.png",
    "/audi_4.png"
  ],
  reviews: [
    { id: 'r1', author: 'Mark S.', rating: 5, text: "The handling on this car is incredible. Quattro makes a huge difference in the rain. The interior feels like a spaceship.", date: "2024-01-15" },
    { id: 'r2', author: 'Sarah L.', rating: 5, text: "Perfect daily driver. It's fuel efficient for its class but still has plenty of power when you need it. The tech is top-notch.", date: "2023-11-28" },
    { id: 'r3', author: 'David K.', rating: 4, text: "Beautiful car. The trunk space is a bit tight for a family of four, but for a sedan, it's manageable. Love the ambient lighting.", date: "2024-02-10" }
  ]
};

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === MOCK_PRODUCT.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === MOCK_PRODUCT.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product: MOCK_PRODUCT, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const handleRemoveItem = (id: string) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout... (Demo Mode)");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      <Navbar
        cartItemCount={cart.reduce((a, c) => a + c.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ProductGallery images={MOCK_PRODUCT.images} />
            <ProductInfo product={MOCK_PRODUCT} onAddToCart={handleAddToCart} />
          </div>
        </section>

        {/* Social Proof */}
        <Testimonials reviews={MOCK_PRODUCT.reviews} />

        {/* Detailed Features / Marketing Content */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Redefining Excellence</h2>
            <p className="text-gray-600 mb-12">
              The Audi A4 Sedan represents a marriage of sporty character and premium sophistication.
              Designed with a focus on driver ergonomics and passenger comfort, it sets a new standard in the compact luxury segment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-bold text-lg mb-2">MMI® Touch Display</h3>
                <p className="text-sm text-gray-600">Control your navigation, infotainment, and settings with a crisp 10.1-inch screen that offers acoustic feedback.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-bold text-lg mb-2">Driver Assist Systems</h3>
                <p className="text-sm text-gray-600">Features like Audi pre sense® basic and city help monitor traffic and can even initiate emergency braking.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WordPress Explanation Section */}
        <WordPressSection />
      </main>

      {/* Overlays */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <ChatWidget />
    </div>
  );
};

export default App;