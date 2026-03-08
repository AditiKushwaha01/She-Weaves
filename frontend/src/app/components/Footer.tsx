import { Link } from 'react-router';
import { Heart, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-rose-50 border-t border-rose-100 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
              <span className="text-xl font-serif text-rose-600">She Weaves</span>
            </div>
            <p className="text-sm text-gray-600">
              Handcrafted with love. Empowering women through artisan crafts.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-rose-400 hover:text-rose-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-rose-400 hover:text-rose-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-rose-400 hover:text-rose-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-rose-400 hover:text-rose-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/shop" className="hover:text-rose-500 transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=Blankets" className="hover:text-rose-500 transition-colors">Blankets</Link></li>
              <li><Link to="/shop?category=Bags" className="hover:text-rose-500 transition-colors">Bags</Link></li>
              <li><Link to="/shop?category=Toys" className="hover:text-rose-500 transition-colors">Toys</Link></li>
              <li><Link to="/shop?category=Home Decor" className="hover:text-rose-500 transition-colors">Home Decor</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-rose-500 transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to get special offers and updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 border border-rose-200 rounded-l-lg focus:outline-none focus:border-rose-400"
              />
              <button className="px-4 py-2 bg-rose-500 text-white rounded-r-lg hover:bg-rose-600 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-rose-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} She Weaves. Handcrafted with love. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
