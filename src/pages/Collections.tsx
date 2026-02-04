import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Grid3X3, LayoutGrid, X } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { products, categories, occasions, colors, formatPrice } from '@/data/products';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';

export default function Collections() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [gridSize, setGridSize] = useState<'small' | 'large'>('large');
  
  const selectedCategory = searchParams.get('category') || 'all';
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedOccasions.length > 0) {
      filtered = filtered.filter((p) =>
        p.occasion.some((o) => selectedOccasions.includes(o))
      );
    }

    if (selectedColors.length > 0) {
      filtered = filtered.filter((p) => selectedColors.includes(p.color));
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [selectedCategory, selectedOccasions, selectedColors, sortBy]);

  const clearFilters = () => {
    setSelectedOccasions([]);
    setSelectedColors([]);
    setSearchParams({});
  };

  const hasActiveFilters = selectedOccasions.length > 0 || selectedColors.length > 0 || selectedCategory !== 'all';

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
            <span className="font-script text-3xl text-primary">Our</span>
            <h1 className="font-serif text-5xl md:text-6xl mt-2">Collections</h1>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Discover our curated selection of bridal masterpieces, each crafted with love and tradition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center flex-wrap gap-4">
            <button
              onClick={() => setSearchParams({})}
              className={`text-sm tracking-wider uppercase transition-colors px-4 py-2 ${
                selectedCategory === 'all' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSearchParams({ category: cat.slug })}
                className={`text-sm tracking-wider uppercase transition-colors px-4 py-2 ${
                  selectedCategory === cat.slug ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4" />
                    Filters
                    {hasActiveFilters && (
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle className="font-serif text-2xl">Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-8 space-y-8">
                    {/* Occasion Filter */}
                    <div>
                      <h4 className="font-medium mb-4">Occasion</h4>
                      <div className="space-y-3">
                        {occasions.map((occasion) => (
                          <label key={occasion} className="flex items-center gap-3 cursor-pointer">
                            <Checkbox
                              checked={selectedOccasions.includes(occasion)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSelectedOccasions([...selectedOccasions, occasion]);
                                } else {
                                  setSelectedOccasions(selectedOccasions.filter((o) => o !== occasion));
                                }
                              }}
                            />
                            <span className="text-sm">{occasion}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Color Filter */}
                    <div>
                      <h4 className="font-medium mb-4">Color</h4>
                      <div className="space-y-3">
                        {colors.map((color) => (
                          <label key={color} className="flex items-center gap-3 cursor-pointer">
                            <Checkbox
                              checked={selectedColors.includes(color)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSelectedColors([...selectedColors, color]);
                                } else {
                                  setSelectedColors(selectedColors.filter((c) => c !== color));
                                }
                              }}
                            />
                            <span className="text-sm">{color}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {hasActiveFilters && (
                      <Button variant="outline" className="w-full" onClick={clearFilters}>
                        Clear All Filters
                      </Button>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} pieces
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              <div className="hidden md:flex items-center gap-2 border border-border rounded-md p-1">
                <button
                  onClick={() => setGridSize('large')}
                  className={`p-1 rounded ${gridSize === 'large' ? 'bg-muted' : ''}`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setGridSize('small')}
                  className={`p-1 rounded ${gridSize === 'small' ? 'bg-muted' : ''}`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-muted text-sm rounded-full">
                  {categories.find((c) => c.slug === selectedCategory)?.name}
                  <button onClick={() => setSearchParams({})}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedOccasions.map((o) => (
                <span key={o} className="inline-flex items-center gap-1 px-3 py-1 bg-muted text-sm rounded-full">
                  {o}
                  <button onClick={() => setSelectedOccasions(selectedOccasions.filter((x) => x !== o))}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              {selectedColors.map((c) => (
                <span key={c} className="inline-flex items-center gap-1 px-3 py-1 bg-muted text-sm rounded-full">
                  {c}
                  <button onClick={() => setSelectedColors(selectedColors.filter((x) => x !== c))}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Product Grid */}
          <div
            className={`grid gap-6 ${
              gridSize === 'large'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            }`}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
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
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button className="w-full btn-primary text-xs">Quick View</Button>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-serif text-lg mb-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.fabric}</p>
                    <p className="text-primary font-medium">{formatPrice(product.price)}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No products match your filters.</p>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
