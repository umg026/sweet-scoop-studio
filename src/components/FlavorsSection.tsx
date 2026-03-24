import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import strawberryImg from "@/assets/flavor-strawberry.jpg";
import vanillaImg from "@/assets/flavor-vanilla.jpg";
import chocolateImg from "@/assets/flavor-chocolate.jpg";
import blueberryImg from "@/assets/flavor-blueberry.jpg";
import mangoImg from "@/assets/flavor-mango.jpg";
import pistachioImg from "@/assets/flavor-pistachio.jpg";

const flavors = [
  { name: "Strawberry Bliss", desc: "Fresh summer berries", image: strawberryImg, color: "bg-[hsl(340,65%,92%)]" },
  { name: "Vanilla Bean", desc: "Madagascar vanilla", image: vanillaImg, color: "bg-sand" },
  { name: "Dark Chocolate", desc: "Rich Belgian cocoa", image: chocolateImg, color: "bg-[hsl(20,30%,90%)]" },
  { name: "Wild Blueberry", desc: "Forest berry medley", image: blueberryImg, color: "bg-sky" },
  { name: "Mango Sorbet", desc: "Tropical sunshine", image: mangoImg, color: "bg-[hsl(45,70%,90%)]" },
  { name: "Pistachio Dream", desc: "Sicilian pistachios", image: pistachioImg, color: "bg-[hsl(100,30%,90%)]" },
];

const FlavorCard = ({ flavor, index }: { flavor: typeof flavors[0]; index: number }) => {
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
      <div className={`${flavor.color} rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={flavor.image}
            alt={flavor.name}
            loading="lazy"
            width={640}
            height={640}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg font-semibold text-primary">{flavor.name}</h3>
          <p className="font-body text-sm text-muted-foreground mt-1">{flavor.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const FlavorsSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="flavors" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-accent">
            Our Collection
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3">
            Signature Flavors
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-md mx-auto">
            Each flavor is crafted from scratch using only the finest natural ingredients sourced from around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {flavors.map((flavor, i) => (
            <FlavorCard key={flavor.name} flavor={flavor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorsSection;
