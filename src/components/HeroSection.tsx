import { motion } from "framer-motion";
import heroImage from "@/assets/hero-icecream.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-secondary pt-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            Handcrafted with Love
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary leading-[1.1] mb-6">
            Scoops of
            <br />
            <span className="text-accent italic">Pure Joy</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
            Premium artisan ice cream made with the finest natural ingredients. Every scoop is a moment of indulgence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 font-body font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              Explore Products
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 font-body font-semibold text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Our Story
            </Button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-75" />
            <img
              src={heroImage}
              alt="Premium artisan ice cream cone with strawberry, vanilla and blueberry scoops"
              width={1280}
              height={960}
              className="relative w-full max-w-lg rounded-3xl shadow-2xl animate-float"
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L48 54C96 48 192 36 288 36C384 36 480 48 576 54C672 60 768 60 864 54C960 48 1056 36 1152 36C1248 36 1344 48 1392 54L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
