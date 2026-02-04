import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const lookbookImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1610030469668-7e8e23f3a7b7?w=1200',
    title: 'The Maharani Collection',
    description: 'Regal elegance meets contemporary design',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1200',
    title: 'Ivory Dreams',
    description: 'Pure sophistication in every thread',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=1200',
    title: 'Golden Hour',
    description: 'Radiant beauty, timeless grace',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1610030469668-7e8e23f3a7b7?w=1200',
    title: 'Rose Petal Romance',
    description: 'Delicate details, lasting impressions',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1200',
    title: 'Heritage Reimagined',
    description: 'Traditional artistry, modern vision',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=1200',
    title: 'The Bridal Suite',
    description: 'Your perfect day, perfectly dressed',
  },
];

export default function Lookbook() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % lookbookImages.length : 0));
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + lookbookImages.length) % lookbookImages.length : 0));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-script text-3xl text-primary">Editorial</span>
            <h1 className="font-serif text-5xl md:text-6xl mt-2">Lookbook</h1>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              A visual journey through our finest creations. Each image tells a story of craftsmanship, elegance, and timeless beauty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {lookbookImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="break-inside-avoid"
              >
                <button
                  onClick={() => openLightbox(index)}
                  className="group relative block w-full overflow-hidden"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`w-full transition-transform duration-700 group-hover:scale-105 ${
                      index % 3 === 0 ? 'aspect-[3/4]' : index % 3 === 1 ? 'aspect-square' : 'aspect-[4/5]'
                    } object-cover`}
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors flex items-end">
                    <div className="p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity text-left">
                      <h3 className="font-serif text-xl mb-1">{image.title}</h3>
                      <p className="text-sm text-white/80">{image.description}</p>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/95 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl max-h-[85vh] px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lookbookImages[selectedImage].src}
                alt={lookbookImages[selectedImage].title}
                className="max-h-[75vh] w-auto mx-auto object-contain"
              />
              <div className="text-center mt-6 text-white">
                <h3 className="font-serif text-2xl mb-2">{lookbookImages[selectedImage].title}</h3>
                <p className="text-white/70">{lookbookImages[selectedImage].description}</p>
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {lookbookImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    selectedImage === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
