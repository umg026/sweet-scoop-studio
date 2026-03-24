import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/components/ProductsSection";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">
              All Products
            </h1>
            <p className="font-body text-muted-foreground mt-4 max-w-md mx-auto">
              Explore our full range of handcrafted ice cream flavors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group cursor-pointer"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      width={640}
                      height={640}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-foreground">{product.name}</h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">{product.desc}</p>
                    {/* <p className="font-body text-lg font-bold text-primary mt-2">{product.price}</p> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;
