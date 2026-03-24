import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import strawberryImg from "@/assets/flavor-strawberry.jpg";
import vanillaImg from "@/assets/flavor-vanilla.jpg";
import chocolateImg from "@/assets/flavor-chocolate.jpg";
import blueberryImg from "@/assets/flavor-blueberry.jpg";
import mangoImg from "@/assets/flavor-mango.jpg";
import pistachioImg from "@/assets/flavor-pistachio.jpg";

export const products = [
  { id: "strawberry-bliss", name: "Strawberry Bliss", desc: "Fresh summer berries", price: "$6.99", image: strawberryImg },
  { id: "vanilla-bean", name: "Vanilla Bean", desc: "Madagascar vanilla", price: "$5.99", image: vanillaImg },
  { id: "dark-chocolate", name: "Dark Chocolate", desc: "Rich Belgian cocoa", price: "$6.49", image: chocolateImg },
  { id: "wild-blueberry", name: "Wild Blueberry", desc: "Forest berry medley", price: "$6.99", image: blueberryImg },
  { id: "mango-sorbet", name: "Mango Sorbet", desc: "Tropical sunshine", price: "$5.99", image: mangoImg },
  { id: "pistachio-dream", name: "Pistachio Dream", desc: "Sicilian pistachios", price: "$7.49", image: pistachioImg },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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
          <p className="font-body text-lg font-bold text-primary mt-2">{product.price}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary">
            Our Collection
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Our Products
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-md mx-auto">
            Each flavor is crafted from scratch using only the finest natural ingredients sourced from around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button size="lg" className="rounded-full px-8 font-body font-semibold">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
