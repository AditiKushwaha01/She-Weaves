import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Heart, Sparkles, Gift, Package } from 'lucide-react';
import { Button } from '../components/ui/button';
import { products } from '../data/products';
import { useCart } from '../context/AppContext';
import { toast } from 'sonner';
import { WaveDivider } from '../components/WaveDivider';
import { ProductCard } from '../components/ProductCard';

export default function Home() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({ product, quantity: 1 });
    toast.success(`${product.name} added to cart!`);
  };

  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Handcrafted with Love</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif text-gray-900">
                Weaving Dreams,{' '}
                <span className="text-rose-500">Empowering Women</span>
              </h1>
              <p className="text-lg text-gray-600">
                Discover unique handmade crochet gifts that tell a story. Each piece is
                crafted by talented artisans, celebrating creativity and feminine strength.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/shop">
                  <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                    <Gift className="w-5 h-5 mr-2" />
                    Shop Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline">
                    Our Story
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1510935813936-763eb6fbc613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1pbmluZSUyMHdvcmtzcGFjZSUyMGNyYWZ0aW5nfGVufDF8fHx8MTc3MTkxNDcyOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Handmade crochet crafts"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="w-8 h-8 text-rose-400 fill-rose-400" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Handmade</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <WaveDivider color="white" />

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-3"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full">
                <Heart className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Handcrafted with Love</h3>
              <p className="text-gray-600">
                Every piece is carefully made by skilled artisans with attention to detail
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center space-y-3"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full">
                <Sparkles className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Unique Designs</h3>
              <p className="text-gray-600">
                One-of-a-kind creations that make perfect gifts for loved ones
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center space-y-3"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full">
                <Package className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Eco-Friendly</h3>
              <p className="text-gray-600">
                Sustainable materials and practices supporting local communities
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <WaveDivider flip color="rose" />

      {/* Featured Products */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Featured Creations</h2>
            <p className="text-gray-600">
              Handpicked pieces from our collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop">
              <Button size="lg" variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-50">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <WaveDivider color="white" />

      {/* Empowerment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1635790073975-ac99496914e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFydGlzYW4lMjBjcmFmdGluZyUyMGhhbmRzfGVufDF8fHx8MTc3MTkxNDczMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Artisan at work"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-serif text-gray-900">
                Empowering Women Through Craft
              </h2>
              <p className="text-lg text-gray-600">
                She Weaves is more than just a marketplace. We're a community of talented
                women artisans who pour their hearts into every stitch. When you purchase
                from us, you're supporting independent creators and celebrating the beauty
                of handmade craftsmanship.
              </p>
              <p className="text-gray-600">
                Each piece tells a unique story of creativity, passion, and empowerment.
                Join us in celebrating the art of crochet and the incredible women behind it.
              </p>
              <Link to="/about">
                <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <WaveDivider flip color="purple" />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif">
              Ready to Find the Perfect Gift?
            </h2>
            <p className="text-lg text-rose-100">
              Browse our collection of handcrafted treasures and discover something special
            </p>
            <Link to="/shop">
              <Button size="lg" className="bg-white text-rose-500 hover:bg-gray-100">
                <Gift className="w-5 h-5 mr-2" />
                Start Shopping
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}