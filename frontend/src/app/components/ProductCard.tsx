import { motion } from 'motion/react';
import { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  index: number;
}

export function ProductCard({ product, onAddToCart, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thread bow animation on hover */}
      <motion.div
        className="absolute top-4 right-4 z-10 pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0,
          rotate: isHovered ? 0 : 180,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          {/* Bow */}
          <motion.path
            d="M 20 20 Q 15 15 10 20 Q 15 25 20 20"
            fill="#f472b6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.path
            d="M 20 20 Q 25 15 30 20 Q 25 25 20 20"
            fill="#f472b6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          {/* Center knot */}
          <motion.circle
            cx="20"
            cy="20"
            r="3"
            fill="#ec4899"
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
          {/* Ribbon tails */}
          <motion.path
            d="M 20 23 L 18 30"
            stroke="#f472b6"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
          <motion.path
            d="M 20 23 L 22 30"
            stroke="#f472b6"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
        </svg>
      </motion.div>

      {/* Product image */}
      <div className="aspect-square overflow-hidden relative">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Thread outline animation */}
        <motion.div
          className="absolute inset-0 border-4 border-rose-400 rounded-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: isHovered ? 1 : 0.9,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow: isHovered ? '0 0 20px rgba(244, 114, 182, 0.5)' : 'none',
          }}
        />
      </div>

      {/* Product info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-rose-500">
            ${product.price}
          </span>
          <motion.button
            onClick={() => onAddToCart(product)}
            className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>

      {/* Sparkle effects on hover */}
      {isHovered && (
        <>
          <motion.div
            className="absolute top-8 left-8 w-2 h-2 bg-yellow-400 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-12 right-12 w-2 h-2 bg-yellow-400 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
          />
        </>
      )}
    </motion.div>
  );
}
