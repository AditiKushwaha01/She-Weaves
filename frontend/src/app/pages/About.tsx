import { motion } from 'motion/react';
import { Heart, Users, Target, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Heart className="w-16 h-16 text-rose-500 fill-rose-500 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-700">
              She Weaves is more than a marketplace—it's a celebration of feminine
              creativity, craftsmanship, and empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1635790073975-ac99496914e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFydGlzYW4lMjBjcmFmdGluZyUyMGhhbmRzfGVufDF8fHx8MTc3MTkxNDczMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Artisan crafting"
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
                Weaving Dreams, One Stitch at a Time
              </h2>
              <p className="text-lg text-gray-700">
                Founded in 2024, She Weaves began with a simple vision: to create a
                platform where talented women artisans could showcase their handmade
                crochet creations and connect with people who appreciate the beauty of
                handcrafted gifts.
              </p>
              <p className="text-gray-700">
                Every piece in our collection is lovingly crafted by skilled artisans who
                pour their hearts into their work. We believe in the power of handmade
                items to tell stories, create connections, and bring joy to both the maker
                and the receiver.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at She Weaves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Handcrafted with Love
              </h3>
              <p className="text-gray-600">
                Every item is made with care, attention to detail, and genuine passion
                for the craft of crochet.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Women Empowerment
              </h3>
              <p className="text-gray-600">
                We empower women artisans by providing a platform to showcase their
                talents and earn from their craft.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-sm text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sustainable & Ethical
              </h3>
              <p className="text-gray-600">
                We use eco-friendly materials and support fair trade practices to create
                a positive impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Target className="w-16 h-16 text-rose-500 mx-auto mb-6" />
              <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Impact</h2>
              <p className="text-lg text-gray-700">
                Together with our community, we're making a difference
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-rose-500">50+</div>
                <div className="text-gray-600">Artisans Supported</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-rose-500">1000+</div>
                <div className="text-gray-600">Products Created</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-rose-500">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Join Our Community
            </h2>
            <p className="text-lg text-rose-100 mb-8">
              Become part of the She Weaves family and support women artisans while
              finding beautiful handcrafted gifts for your loved ones.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
