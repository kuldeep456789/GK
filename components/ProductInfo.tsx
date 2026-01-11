import React, { useState } from 'react';
import { Star, Check, ShieldCheck, Truck, MapPin } from 'lucide-react';
import { Product } from '../types';
import { Button } from './Button';

interface ProductInfoProps {
  product: Product;
  onAddToCart: (quantity: number) => void;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  // Calculate delivery date (3 days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  const dateString = deliveryDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

  const handleAddToCart = () => {
    setIsAdding(true);
    // Simulate network delay for better UX feel
    setTimeout(() => {
      onAddToCart(quantity);
      setIsAdding(false);
    }, 600);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <a href="#reviews" className="text-sm text-blue-600 hover:underline hover:text-blue-800">
            {product.reviews.length} ratings
          </a>
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-2 leading-tight">
          {product.title}
        </h1>
        <div className="flex items-baseline gap-3 pb-4 border-b border-gray-100">
          <span className="text-3xl font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice && (
            <>
              <span className="text-lg text-gray-500 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              <span className="text-sm font-semibold text-red-600">
                Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')} ({(100 - (product.price / product.originalPrice) * 100).toFixed(0)}%)
              </span>
            </>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
        {product.description}
      </p>

      {/* Key Features Bullet Points */}
      <div className="space-y-2">
        <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">Key Features</h3>
        <ul className="space-y-2">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Controls */}
      <div className="mt-4 p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-900">
            <span className="font-bold text-green-700">In Stock.</span>
          </div>
          <div className="text-sm text-gray-600 mt-1">
            <span className="font-bold text-gray-900">FREE delivery</span> <span className="font-bold">{dateString}</span>.
          </div>
          <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            Deliver to United States
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Quantity</label>
            <div className="flex items-center bg-white border border-gray-300 rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 border-r border-gray-300"
              >
                -
              </button>
              <span className="w-10 text-center font-medium text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 border-l border-gray-300"
              >
                +
              </button>
            </div>
          </div>

          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleAddToCart}
            isLoading={isAdding}
            className="mt-2 bg-[#FFD814] hover:bg-[#F7CA00] text-black border border-[#FCD200] shadow-sm font-normal text-base"
          >
            {isAdding ? 'Adding...' : 'Add to Cart'}
          </Button>

          <Button
            variant="secondary"
            size="lg"
            fullWidth
            onClick={() => { handleAddToCart(); setTimeout(() => alert('Proceeding to Checkout'), 500); }}
            className="bg-[#FFA41C] hover:bg-[#FA8900] text-black border border-[#FF8F00] shadow-sm font-normal text-base"
          >
            Buy Now
          </Button>

          <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mt-2">
            <div className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4 text-gray-400" />
              <span>Secure Transaction</span>
            </div>
            <div className="flex items-center gap-1">
              <Truck className="h-4 w-4 text-gray-400" />
              <span>Ships from Apple</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};