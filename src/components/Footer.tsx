import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building scalable, high-performance digital solutions that help
              businesses thrive in the digital age.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/tonydigitalmarketer/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/anthony-oluwatobi-ayodele-7a2882278/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:ayodeleanthonyo@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Pricing", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm inline-block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Design",
                "Web App Development",
                "Full-Stack Development",
                "E-commerce Solutions",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ayodeleanthonyo@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors group"
                >
                  <Mail size={16} className="text-primary group-hover:scale-110 transition-transform" />
                  ayodeleanthonyo@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2349057707072"
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors group"
                >
                  <Phone size={16} className="text-primary group-hover:scale-110 transition-transform" />
                  +234 905 770 7072
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary" />
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Anthony Digital Hub. All rights reserved. | Design by Anthony Digital Hub
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors hover:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
