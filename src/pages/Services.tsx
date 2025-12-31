import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Globe, Layout, Palette, Server, ShoppingCart, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedComponents";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    title: "Web Design (UI/UX)",
    description: "Creating beautiful, intuitive interfaces that users love. From wireframes to high-fidelity designs, I focus on user experience that converts.",
    features: ["Responsive Design", "User Research", "Wireframing", "Prototyping", "Brand Integration"],
  },
  {
    icon: Code2,
    title: "Web App Development",
    description: "Building robust web applications with modern frameworks. Custom solutions that scale with your business needs.",
    features: ["React/Vue.js Apps", "API Development", "Real-time Features", "Third-party Integrations", "Performance Optimization"],
  },
  {
    icon: Server,
    title: "Full-Stack Solutions",
    description: "End-to-end development from database architecture to frontend deployment. Complete solutions under one roof.",
    features: ["System Architecture", "Database Design", "Backend APIs", "Frontend Development", "DevOps & Deployment"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & CMS",
    description: "Custom online stores and content management systems. From WordPress themes to headless commerce solutions.",
    features: ["Custom Themes", "Payment Integration", "Inventory Management", "SEO Optimization", "Analytics Setup"],
  },
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "GraphQL", category: "API" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Tailwind", category: "CSS" },
  { name: "Next.js", category: "Framework" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "E-commerce" },
  { name: "Firebase", category: "Backend" },
  { name: "Redis", category: "Database" },
];

const pricingOptions = [
  {
    title: "Project-Based",
    description: "Fixed price for clearly defined projects with set deliverables and timeline.",
    ideal: "Best for new websites, redesigns, or specific features",
  },
  {
    title: "Hourly Rate",
    description: "Flexible engagement for ongoing work, maintenance, or consulting.",
    ideal: "Best for maintenance, updates, or consulting work",
  },
  {
    title: "Custom Quote",
    description: "Tailored pricing for complex projects that require custom solutions.",
    ideal: "Best for enterprise solutions or unique requirements",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              What I Can{" "}
              <span className="gradient-text">Build For You</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Comprehensive digital solutions tailored to help your business succeed online
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="hero" asChild>
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="ml-2" size={18} />
                      </Link>
                    </Button>
                  </motion.div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 2 : -2 }}
                    className="card-elevated p-8 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                    <div className="relative grid grid-cols-2 gap-4">
                      {[Globe, Layout, Smartphone, Database].map((Icon, i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                          className="aspect-square bg-secondary rounded-xl flex items-center justify-center"
                        >
                          <Icon className="w-10 h-10 text-primary/60" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Visual */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Technologies"
            title="Tech Stack"
            description="Modern tools and technologies I use to build great products"
          />

          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <StaggerItem key={tech.name}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-[0_0_20px_hsl(217_91%_60%/0.2)] transition-all cursor-default"
                >
                  <span className="text-foreground font-medium">{tech.name}</span>
                  <span className="ml-2 text-xs text-muted-foreground">({tech.category})</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeader
            label="Pricing"
            title="Transparent Pricing"
            description="Flexible options to fit your project needs and budget"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingOptions.map((option) => (
              <StaggerItem key={option.title}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 0 40px hsl(217 91% 60% / 0.2)" }}
                  className="card-elevated p-8 h-full flex flex-col"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {option.description}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {option.ideal}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn>
            <div className="card-elevated p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Have a Project in Mind?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss your requirements and find the perfect solution for your business.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/contact">
                      Start a Conversation
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
