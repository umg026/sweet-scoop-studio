import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const flavors = [
  { name: "Sitafal Icecream", desc: "Fresh icecream by meera", image: "https://5.imimg.com/data5/SELLER/Default/2022/7/ZG/ZY/LH/20322173/new-product-500x500.jpeg", color: "bg-[hsl(340,65%,92%)]" },
  { name: "Strawberry Icecream", desc: "Fresh icecream by meera", image: "https://instagram.fbdq8-2.fna.fbcdn.net/v/t51.82787-15/610587046_18006749552824445_4288158067664692206_n.webp?_nc_cat=107&ig_cache_key=MzgwMjYyODM0NzU5MjAyMTE4Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNTJ4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=wz7j4A1EvNoQ7kNvwGCWPcj&_nc_oc=AdrX2qC4MSsNjgV5kaY60bhFwRSHoIzSYtclJ8a8xfPnxohkrIKIzQuXaH68Nl_EPDIbm_Spb8h3mVUW0MHyo2io&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fbdq8-2.fna&_nc_gid=W8ixb9odyKBRULY9hg63cA&_nc_ss=7a32e&oh=00_Afz96GKknoHChGheszTCgncYVUep4wNqOHSUq5Dr3aO83Q&oe=69C87334", color: "bg-sand" },
  { name: "Jamfal Icecream", desc: "Fresh icecream by meera", image: "https://5.imimg.com/data5/SELLER/Default/2022/7/ZR/BQ/BH/20322173/new-product-500x500.jpeg", color: "bg-[hsl(20,30%,90%)]" },
  { name: "Brownie Icecream", desc: "Fresh icecream by meera", image: "https://instagram.fbdq8-2.fna.fbcdn.net/v/t51.82787-15/525053905_17853967389494632_3763486758215400816_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzY4NTk4NTk5NDY1ODcyOTkxNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=G63Oo6RoFlgQ7kNvwFyEG7C&_nc_oc=Adpq0p1R9lSLwg4g4448WWdBXjFYIrqxuIu-WXUCwfMob2uYpOgo1V9ySM1mxoV2e1dNxPyEmoELqhlEBUgB7TxW&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fbdq8-2.fna&_nc_gid=vVxPjTj-Tf1RUXBedmfSPg&_nc_ss=7a32e&oh=00_AfwcYvoCCvTONF00UC5S5HlHtE84UNNzD3KaZ5z4zGqvzw&oe=69C87F31", color: "bg-sky" },
  { name: "Jamun Icecream", desc: "Fresh icecream by meera", image: "https://instagram.fbdq8-1.fna.fbcdn.net/v/t51.82787-15/522623657_17989265426824445_5044396581246653185_n.webp?_nc_cat=105&ig_cache_key=MzY4NDU4MzI3MjA2MDczMjkxMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=wjEEXXvNiicQ7kNvwGd4JMl&_nc_oc=AdpcQ9BFSX01e1pFnMwHbOO9BhME8BE9imQ5N0BGXsSgOeMAOPm-OCKd3WjSH08SQX-o6141Xi6IsejsxmL2LECp&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fbdq8-1.fna&_nc_gid=Q9dK4lJ6bnvRW82rt6D5CA&_nc_ss=7a32e&oh=00_AfyjMTs6vbu3VkpLHhEgOxdbgUZF_iu1RbafbtvMRWdE2A&oe=69C8962E", color: "bg-[hsl(45,70%,90%)]" },
  { name: "Aadu-Madh Icecream", desc: "Fresh icecream by meera", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQmG_Ko7HSa3ed1xoYIkwSc2EXGFQrf2Kc4w&s", color: "bg-[hsl(100,30%,90%)]" },
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
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
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
            <span className="text-accent italic">Meera's</span> Signature Flavors
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
