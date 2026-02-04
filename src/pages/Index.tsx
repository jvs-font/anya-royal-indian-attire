import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, Play } from 'lucide-react';
import { GoldParticles } from '@/components/three/GoldParticles';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { products, formatPrice, categories } from '@/data/products';
import { Button } from '@/components/ui/button';

const featuredProducts = products.filter((p) => p.featured);

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <GoldParticles />
        
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1610030469668-7e8e23f3a7b7?w=1920)',
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="font-script text-6xl md:text-8xl text-primary block mb-4">
              Aanya
            </span>
            <h1 className="font-serif text-2xl md:text-4xl tracking-[0.2em] uppercase text-foreground mb-6">
              Bridal Couture
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12 font-light">
              Where tradition meets timeless elegance. Handcrafted bridal wear for your most precious moments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/collections">
                <Button className="btn-primary">
                  Discover Collections
                </Button>
              </Link>
              <Button variant="outline" className="btn-outline flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Lookbook
              </Button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-6 h-6 text-primary/60" />
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-script text-3xl text-primary">Explore</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-2">Our Collections</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/collections?category=${category.slug}`}
                  className="group block relative aspect-[3/4] overflow-hidden bg-muted"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-161003046966${index}-7e8e23f3a7b7?w=600)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/30 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h3 className="font-serif text-xl md:text-2xl mb-2">{category.name}</h3>
                    <span className="text-sm tracking-wider opacity-80">
                      {category.count} Pieces
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-script text-3xl text-primary">Curated</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-2">Featured Pieces</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Discover our most coveted designs, each one a masterpiece of craftsmanship and artistry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 3).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/product/${product.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {product.new && (
                      <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs tracking-wider px-3 py-1">
                        NEW
                      </span>
                    )}
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-serif text-xl mb-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.fabric}</p>
                    <p className="text-primary font-medium">{formatPrice(product.price)}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/collections">
              <Button className="btn-outline">View All Collections</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Atelier Philosophy */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800"
                  alt="Atelier craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-primary/30" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <span className="font-script text-3xl text-primary">The Art of</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-2 mb-6">Bridal Elegance</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Aanya, every stitch tells a story. Our master artisans bring centuries-old techniques 
                to life, creating pieces that honor tradition while embracing contemporary elegance.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From the first sketch to the final embellishment, each garment is a labor of love — 
                crafted to make you feel like royalty on your special day.
              </p>
              <Link to="/about">
                <Button className="btn-outline">Our Story</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=1920)',
          }}
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-script text-3xl text-primary">Begin Your Journey</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-2 mb-6">Book Your Bridal Consultation</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Experience our exclusive atelier and let us help you find the perfect ensemble 
              for your celebration of love.
            </p>
            <Link to="/contact">
              <Button className="btn-primary">Schedule Appointment</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center mb-12">
          <span className="font-script text-3xl text-primary">Follow</span>
          <h2 className="font-serif text-4xl mt-2">@aanyacouture</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.a
              key={i}
              href="#"
              className="aspect-square overflow-hidden image-hover"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <img
                src={`https://images.unsplash.com/photo-161003046966${i}-7e8e23f3a7b7?w=400`}
                alt={`Instagram ${i}`}
                className="w-full h-full object-cover"
              />
            </motion.a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
