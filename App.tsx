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
  id: 'airpods-pro-2-usbc',
  title: 'Apple AirPods Pro (2nd Generation) with MagSafe Case (USB‑C)',
  price: 24900,
  originalPrice: 26900,
  description: "The new AirPods Pro feature up to 2x more Active Noise Cancellation, plus Adaptive Transparency, and Personalized Spatial Audio with dynamic head tracking for immersive sound. Now with multiple ear tips (XS, S, M, L) and up to 6 hours of listening time.",
  features: [
    "RICHER AUDIO EXPERIENCE — The Apple-designed H2 chip pushes advanced audio performance even further, resulting in smarter noise cancellation and more immersive sound.",
    "NEXT-LEVEL ACTIVE NOISE CANCELLATION — Up to 2x more Active Noise Cancellation than the previous AirPods Pro for dramatically less noise during your commute.",
    "CUSTOMIZABLE FIT — Now includes four pairs of silicone tips (XS, S, M, L) to fit a wider range of ears and provide an acoustic seal.",
    "SOUND ALL AROUND — Personalized Spatial Audio surrounds you with sound tuned just for you. It works with dynamic head tracking to immerse you deeper in music and movies.",
    "HIGHER LEVEL OF CONTROL — Now you can swipe the stem to adjust volume. Press it to play and pause music or to answer and end a call."
  ],
  images: [
    "/img/image1.jpg",
    "/img/image2.jpg",
    "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=1000&q=80",
    "/img/six.jpg"
  ],
  reviews: [
    { id: 'r1', author: 'Rajesh K.', rating: 5, text: "Best active noise cancellation I have ever experienced. Perfect for the Delhi metro commute!", date: "2024-01-15" },
    { id: 'r2', author: 'Priya M.', rating: 5, text: "Seamless switching between my iPhone and MacBook is a game changer. Worth every rupee.", date: "2023-12-10" },
    { id: 'r3', author: 'Amit S.', rating: 4, text: "Great sound, but I wish the battery lasted a bit longer on calls. Fast charging case helps though.", date: "2024-02-05" }
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
            <h2 className="text-3xl font-serif font-bold mb-6">Rebuilt from the sound up.</h2>
            <p className="text-gray-600 mb-12">
              AirPods Pro have been re-engineered for even richer audio experiences. Next-level Active Noise Cancellation and Adaptive Transparency reduce more external noise. Spatial Audio takes immersion to a remarkably personal level.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-bold text-lg mb-2">H2 Chip</h3>
                <p className="text-sm text-gray-600">The new H2 chip orchestrates more smart functions than ever, using computational algorithms to deliver even smarter noise cancellation.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-bold text-lg mb-2">MagSafe Charging Case</h3>
                <p className="text-sm text-gray-600">The new MagSafe Charging Case includes the U1 chip for Precision Finding to help you identify the location of your case.</p>
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