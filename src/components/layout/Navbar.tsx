import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, Heart } from 'lucide-react';

const navLinks = [
  { name: 'Collections', href: '/collections' },
  { name: 'Lookbook', href: '/lookbook' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-center">
              <span className="font-script text-3xl text-primary">Aanya</span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/70">Bridal Couture</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm tracking-widest uppercase transition-colors duration-300 link-underline ${
                    location.pathname === link.href
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-foreground/70 hover:text-foreground transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-foreground/70 hover:text-foreground transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="text-foreground/70 hover:text-foreground transition-colors">
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal/50 z-50 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-background z-50 md:hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-12">
                  <span className="font-script text-2xl text-primary">Aanya</span>
                  <button onClick={() => setIsOpen(false)}>
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex flex-col space-y-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="flex items-center space-x-6 mt-12 pt-8 border-t border-border">
                  <button className="text-foreground/70 hover:text-foreground transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="text-foreground/70 hover:text-foreground transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="text-foreground/70 hover:text-foreground transition-colors">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
