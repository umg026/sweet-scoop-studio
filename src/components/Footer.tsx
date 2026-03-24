import { IceCreamCone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 group">
              <img src="/meera.jpg" alt="" className="w-50 h-50" style={{ width: "72px", height: "60px" }} />
              <span className="font-display text-2xl font-bold text-white text-primary tracking-tight">
                MEERA
              </span>
            </a>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              Premium ice cream, handcrafted with love and the finest natural ingredients.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/60">
              <li><a href="#products" className="hover:text-accent transition-colors duration-200">Products</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors duration-200">Our Story</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-accent transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-200">Accessibility</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {["Instagram", "Twitter", "Facebook", "TikTok"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-sm font-body font-semibold"
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2025 Meera Ice Cream. All rights reserved.
          </p>

           <p className="font-body text-xs text-white mt-10">
            Created By: <a href="https://www.instagram.com/umang_prajapati026">@Umang prajapati</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
