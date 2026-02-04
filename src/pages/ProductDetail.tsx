import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Share2, Ruler, Sparkles, Calendar } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { products, formatPrice } from '@/data/products';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Product Not Found</h1>
          <Link to="/collections">
            <Button className="btn-outline">Back to Collections</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/collections" className="hover:text-foreground transition-colors">Collections</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                        selectedImage === i ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:py-8"
            >
              {product.new && (
                <span className="inline-block bg-primary text-primary-foreground text-xs tracking-wider px-3 py-1 mb-4">
                  NEW ARRIVAL
                </span>
              )}
              <h1 className="font-serif text-4xl md:text-5xl mb-4">{product.name}</h1>
              <p className="text-3xl text-primary mb-6">{formatPrice(product.price)}</p>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Product Details */}
              <div className="grid grid-cols-2 gap-4 mb-8 py-6 border-y border-border">
                <div>
                  <span className="text-sm text-muted-foreground">Fabric</span>
                  <p className="font-medium">{product.fabric}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Color</span>
                  <p className="font-medium">{product.color}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Embroidery</span>
                  <p className="font-medium">{product.embroidery}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Occasion</span>
                  <p className="font-medium">{product.occasion.join(', ')}</p>
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium">Select Size</span>
                  <button className="text-sm text-primary flex items-center gap-1 hover:underline">
                    <Ruler className="w-4 h-4" />
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] h-12 px-4 border transition-colors ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" className="flex-1">
                  <Button className="w-full btn-primary flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Inquire Now
                  </Button>
                </Link>
                <Link to="/contact" className="flex-1">
                  <Button variant="outline" className="w-full btn-outline flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Heart className="w-5 h-5" />
                  Add to Wishlist
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>

              {/* Accordion Info */}
              <Accordion type="single" collapsible className="mt-8">
                <AccordionItem value="details">
                  <AccordionTrigger>Product Details</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                      <li>Handcrafted by master artisans</li>
                      <li>Premium quality {product.fabric}</li>
                      <li>Intricate {product.embroidery}</li>
                      <li>Customization available on request</li>
                      <li>Made to order with 4-6 weeks delivery</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="care">
                  <AccordionTrigger>Care Instructions</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                      <li>Dry clean only recommended</li>
                      <li>Store in a cool, dry place</li>
                      <li>Use padded hangers to maintain shape</li>
                      <li>Keep away from direct sunlight</li>
                      <li>Handle embroidery with care</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                  <AccordionContent>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <p>Complimentary shipping within India for orders above ₹1,00,000.</p>
                      <p>International shipping available.</p>
                      <p>Made-to-order pieces are non-returnable. Please ensure accurate measurements.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="font-script text-2xl text-primary">You May Also Love</span>
              <h2 className="font-serif text-3xl mt-2">Related Pieces</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/product/${item.slug}`} className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-serif text-lg mb-1 group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-primary">{formatPrice(item.price)}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
