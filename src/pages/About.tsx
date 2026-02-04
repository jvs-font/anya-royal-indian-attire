import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We begin with an intimate conversation to understand your vision, preferences, and the story you want your ensemble to tell.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our designers create custom sketches, selecting fabrics, colors, and embroidery patterns that reflect your unique style.',
  },
  {
    number: '03',
    title: 'Craftsmanship',
    description: 'Master artisans bring the design to life through hundreds of hours of meticulous handwork and traditional techniques.',
  },
  {
    number: '04',
    title: 'Final Fitting',
    description: 'Your piece is perfected with final adjustments, ensuring every detail meets our exacting standards.',
  },
];

export default function About() {
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
            <span className="font-script text-3xl text-primary">Our Story</span>
            <h1 className="font-serif text-5xl md:text-6xl mt-2">The Atelier</h1>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Where tradition meets artistry, and every stitch tells a story of love and craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-script text-2xl text-primary">Heritage of Excellence</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-2 mb-6">A Legacy of Beauty</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a passion for preserving India's rich textile heritage, Aanya Bridal Couture 
                  emerged from a deep reverence for traditional craftsmanship and an eye for contemporary elegance.
                </p>
                <p>
                  Our journey began in the heart of Delhi's historic textile district, where generations of 
                  master craftsmen have woven magic into fabric. Today, we continue this legacy, creating 
                  bridal wear that honors tradition while embracing modern sensibilities.
                </p>
                <p>
                  Each piece that leaves our atelier carries with it the soul of countless artisans — 
                  their dedication, their skill, and their unwavering commitment to excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
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
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/30" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Founder */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-square overflow-hidden rounded-full max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=800"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="font-script text-2xl text-primary">The Visionary</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-2 mb-6">Meet the Designer</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over two decades of experience in bridal couture, our founder brings an 
                  unparalleled understanding of what makes a bride feel truly extraordinary.
                </p>
                <p>
                  Trained under master craftsmen and inspired by travels across India's textile 
                  heartlands, she has developed a distinctive aesthetic that celebrates both 
                  heritage and innovation.
                </p>
                <p className="italic border-l-2 border-primary pl-4">
                  "Every bride deserves to feel like royalty. Our mission is to create pieces 
                  that are not just garments, but heirlooms — treasures that will be passed 
                  down through generations."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-script text-2xl text-primary">From Vision to Reality</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-2">Our Process</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span className="font-script text-5xl text-primary/30">{step.number}</span>
                <h3 className="font-serif text-2xl mt-2 mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="font-script text-2xl text-primary">What We Stand For</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-2">Our Values</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: 'Craftsmanship',
                  description: 'Every piece is a testament to the skill of our artisans, with each stitch placed with intention and care.',
                },
                {
                  title: 'Sustainability',
                  description: 'We honor our environment by using ethically sourced materials and supporting traditional craft communities.',
                },
                {
                  title: 'Individuality',
                  description: 'No two brides are alike, and neither are our creations. Each piece is as unique as the woman who wears it.',
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="font-serif text-2xl mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-script text-2xl text-primary">Begin Your Journey</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-2 mb-6">Visit Our Atelier</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Experience the magic of Aanya firsthand. Book a private consultation and 
              let us help you create the bridal ensemble of your dreams.
            </p>
            <Link to="/contact">
              <Button className="btn-primary">Book Appointment</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
