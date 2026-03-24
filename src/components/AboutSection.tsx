import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-lifestyle.jpg";
import { Leaf, Heart, Award } from "lucide-react";

const values = [
  { icon: Leaf, title: "All Natural", desc: "No artificial flavors or preservatives" },
  { icon: Heart, title: "Made with Love", desc: "Small-batch handcrafted daily" },
  { icon: Award, title: "Award Winning", desc: "Recognized by top food critics" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <img
              src={aboutImg}
              alt="Friends enjoying Dolce ice cream together"
              loading="lazy"
              width={960}
              height={640}
              className="rounded-3xl shadow-xl w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-accent">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
              Crafting Happiness<br />Since 2018
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Born from a passion for authentic flavors, Dolce brings you ice cream the way it should be — 
              made with real ingredients, no shortcuts, and a whole lot of heart. Every recipe is perfected 
              in our small-batch kitchen using locally sourced dairy and seasonal fruits.
            </p>

            <div className="grid gap-6">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <v.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-semibold text-primary">{v.title}</h4>
                    <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
