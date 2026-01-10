import React, { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
        <img 
          src={images[activeImage]} 
          alt="Product View" 
          className="h-full w-full object-cover object-center transition-opacity duration-300"
        />
        {/* Simple badges */}
        <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Best Seller
        </div>
      </div>
      
      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={`relative aspect-square overflow-hidden rounded-lg bg-gray-100 ${
              activeImage === idx ? 'ring-2 ring-black ring-offset-2' : 'hover:opacity-75'
            }`}
          >
            <img src={img} alt={`Thumbnail ${idx + 1}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};