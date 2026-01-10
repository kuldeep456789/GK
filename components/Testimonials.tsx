import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';

interface TestimonialsProps {
  reviews: Review[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ reviews }) => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Loved by Dreamers Worldwide</h2>
          <div className="flex items-center justify-center gap-2">
             <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
             </div>
             <span className="text-gray-600 font-medium">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">"{review.text.substring(0, 50)}..."</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-sm">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{review.author}</div>
                  <div className="text-xs text-gray-400">Verified Buyer</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};