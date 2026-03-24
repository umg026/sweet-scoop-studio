import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import vanillaImg from "@/assets/flavor-vanilla.jpg";
import chocolateImg from "@/assets/flavor-chocolate.jpg";
import blueberryImg from "@/assets/flavor-blueberry.jpg";
import mangoImg from "@/assets/flavor-mango.jpg";
import pistachioImg from "@/assets/flavor-pistachio.jpg";

export const products = [
    { id: "Strawberry Ice cream", name: "Strawberry Bliss", desc: "Fresh summer berries", price: "$6.99", image: "https://instagram.fbdq8-2.fna.fbcdn.net/v/t51.82787-15/610587046_18006749552824445_4288158067664692206_n.webp?_nc_cat=107&ig_cache_key=MzgwMjYyODM0NzU5MjAyMTE4Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNTJ4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=wz7j4A1EvNoQ7kNvwGCWPcj&_nc_oc=AdrX2qC4MSsNjgV5kaY60bhFwRSHoIzSYtclJ8a8xfPnxohkrIKIzQuXaH68Nl_EPDIbm_Spb8h3mVUW0MHyo2io&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fbdq8-2.fna&_nc_gid=_R0ghNkCJVD3iX3D0pPs9A&_nc_ss=7a32e&oh=00_AfySbtMwpcdbCydS8fxawEW50Kxu5Xnyci5ImRfvaXCD4Q&oe=69C87334" },
    { id: "Jammun Ice cream", name: "Vanilla Bean", desc: "Madagascar vanilla", price: "$5.99", image: "https://instagram.fbdq8-1.fna.fbcdn.net/v/t51.82787-15/522623657_17989265426824445_5044396581246653185_n.webp?_nc_cat=105&ig_cache_key=MzY4NDU4MzI3MjA2MDczMjkxMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=wjEEXXvNiicQ7kNvwGd4JMl&_nc_oc=AdpcQ9BFSX01e1pFnMwHbOO9BhME8BE9imQ5N0BGXsSgOeMAOPm-OCKd3WjSH08SQX-o6141Xi6IsejsxmL2LECp&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fbdq8-1.fna&_nc_gid=jXnC86Nyjdyl0V8DwCgxbQ&_nc_ss=7a32e&oh=00_Afw39WHKJq500jfxwd81hHgwXzGjlHz6EDxaOCcfr2SUTA&oe=69C8962E" },
    { id: "Coconut Ice cream", name: "Dark Chocolate", desc: "Rich Belgian cocoa", price: "$6.49", image: "https://instagram.fbdq8-2.fna.fbcdn.net/v/t51.82787-15/525699141_17989825895824445_3950794370360957129_n.webp?_nc_cat=107&ig_cache_key=MzY4ODIzMDE2MTE1NDk2MTYzMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=Rh2XAV0hdC4Q7kNvwEr7wCb&_nc_oc=Ado0KMJpeTcdQMs0rVGGTJSkVA9JhoKfZld5wfvskY1ff9eEMMLL4hml3LfXQlIajfAp0x_APbTQZQW1OVczxzJ2&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fbdq8-2.fna&_nc_gid=36gLLrpXZ93We3XwLS3CFg&_nc_ss=7a32e&oh=00_AfzjPV_fgRPIsFdDCXiYX0CzPOWNrDwxclw3r-hAm-tkew&oe=69C89B46" },
    { id: "Multi flavour Ice cream", name: "Wild Blueberry", desc: "Forest berry medley", price: "$6.99", image: "https://instagram.fbdq8-2.fna.fbcdn.net/v/t51.82787-15/521551763_17989063811824445_3739413843890735725_n.webp?_nc_cat=108&ig_cache_key=MzY4MzIyNzQzMzE2OTE1NTc3Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNTJ4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=6akqbTrhw_4Q7kNvwE_hCAE&_nc_oc=AdqcM_0D7RZ1ubGk4RfLWoJC-3DM_8GnOnbwV9gJRwbG2JXCnYJDkPKSFhMuEzFEEK5fJM74-luHU--r6fzfSm4k&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fbdq8-2.fna&_nc_gid=uHC_WE2LBPu4xdpK8ljryQ&_nc_ss=7a32e&oh=00_AfygA7pz3X7IwTbKTmRNn6CaEnCzmwhdRNqw6NXeGLEbtg&oe=69C878D0" },
    { id: "Brownie Ice cream", name: "Mango Sorbet", desc: "Tropical sunshine", price: "$5.99", image: "https://instagram.fbdq8-2.fna.fbcdn.net/v/t51.82787-15/525053905_17853967389494632_3763486758215400816_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzY4NTk4NTk5NDY1ODcyOTkxNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzIifQ%3D%3D&_nc_ohc=G63Oo6RoFlgQ7kNvwFyEG7C&_nc_oc=Adpq0p1R9lSLwg4g4448WWdBXjFYIrqxuIu-WXUCwfMob2uYpOgo1V9ySM1mxoV2e1dNxPyEmoELqhlEBUgB7TxW&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fbdq8-2.fna&_nc_gid=isgcdXihvYJXhiu0qOcESg&_nc_ss=7a32e&oh=00_AfwFXmYumybeRwptJyMZbEau6-lRgv3_EHQxzyJ4mSWK2w&oe=69C87F31" },
    { id: "Aadu-Madh Ice cream", name: "Pistachio Dream", desc: "Sicilian pistachios", price: "$7.49", image: "https://instagram.fbdq8-1.fna.fbcdn.net/v/t51.82787-15/607154572_18006062783824445_1000458989033387528_n.webp?_nc_cat=109&ig_cache_key=Mzc5ODIzMjk0MjU2MDQ3ODE2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzODN4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=9wzt2-lwoUYQ7kNvwGjSTy-&_nc_oc=Ado3mEAqjMEpxTeMkdXJY8iGN--wZMhUtlP19CNQGZEdlLQoU9aZpFRVs5gYjJc90Sxf6VFPVyRhkkbh2gncK2kJ&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fbdq8-1.fna&_nc_gid=QC6hXd4ScWF-rduAwXpWGQ&_nc_ss=7a32e&oh=00_Afy9wYATEazNnQTsVqeme46qzVo3Jn7IN_NnHtqeEbaRNg&oe=69C8967A" },
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
                        className="w-full h-full object-top object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-foreground">{product.name}</h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">{product.desc}</p>
                    {/* <p className="font-body text-lg font-bold text-primary mt-2">{product.price}</p> */}
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
                        <span className="text-accent italic">Meera's</span>  Products
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
