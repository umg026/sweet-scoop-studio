import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 bg-primary" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Stay in the Scoop
          </h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.9811200343424!2d72.4213145!3d24.1723949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cebe5beb42089%3A0x65dc5d312b363296!2sMEERA%20ICE%20CREAM%20New%20branch!5e0!3m2!1sen!2sin!4v1774368168723!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} loading="lazy"></iframe>

        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
