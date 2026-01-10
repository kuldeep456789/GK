import React from 'react';
import { Layout, ShoppingCart, Zap, Clock, Code, Database } from 'lucide-react';

export const WordPressSection: React.FC = () => {
  return (
    <section className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Submission Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Assignment Submission Details</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This landing page was built to demonstrate conversion-focused design, modern frontend practices, and API integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Column: Stats & Tools */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full">
            <h3 className="text-xl font-bold font-serif text-gray-900 mb-6 flex items-center gap-2">
              <Code className="h-5 w-5" />
              Development Summary
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Time Taken</h4>
                  <p className="text-sm text-gray-600">~2.5 Hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg shadow-sm text-purple-600">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Tools & Stack</h4>
                  <p className="text-sm text-gray-600">
                    React 19, Tailwind CSS, Lucide React
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: WordPress Approach */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold font-serif text-gray-900 flex items-center gap-2">
                <Layout className="h-5 w-5" />
                WordPress Strategy
              </h3>
              <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Knowledge Check</span>
            </div>

            <div className="space-y-6">
              <div className="group">
                <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-500" /> Theme & Builder
                </h4>
                <p className="text-sm text-gray-600 pl-6">
                  <strong>Astra Theme + Elementor Pro.</strong> Chosen for lightweight performance and design flexibility (Canvas mode for custom landing pages).
                </p>
              </div>

              <div className="group">
                <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4 text-blue-500" /> E-Commerce Core
                </h4>
                <p className="text-sm text-gray-600 pl-6">
                  <strong>WooCommerce.</strong> functionality supplemented by "WooCommerce Side Cart" plugin to replicate the sliding drawer UX.
                </p>
              </div>

              <div className="group">
                <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-purple-500" /> Optimization
                </h4>
                <p className="text-sm text-gray-600 pl-6">
                  Cached via <strong>WP Rocket</strong>, images compressed with <strong>Smush</strong>. Checkout optimized using "Direct Checkout" to reduce friction.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};