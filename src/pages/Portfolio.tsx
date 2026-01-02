import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedComponents";
import { Button } from "@/components/ui/button";
import bannerBg from "@/assets/banner-bg.jpg";

// Portfolio categories and projects
const categories = [
  "All",
  "E-Commerce",
  "Mobile App",
  "Corporate Website",
  "Analytics Dashboard",
  "SaaS Platform",
  "Landing Page",
];

const portfolioProjects = [
  {
    id: 1,
    title: "ShopEase E-Commerce",
    category: "E-Commerce",
    description: "A full-featured online shopping platform with real-time inventory management, secure payment processing, and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    features: ["User Authentication", "Shopping Cart", "Payment Integration", "Order Tracking"],
  },
  {
    id: 2,
    title: "FitTrack Mobile UI",
    category: "Mobile App",
    description: "Cross-platform fitness tracking application with workout plans, progress tracking, and social features for motivation.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Redux"],
    features: ["Workout Tracking", "Progress Charts", "Social Feed", "Push Notifications"],
  },
  {
    id: 3,
    title: "TechCorp Website",
    category: "Corporate Website",
    description: "Modern corporate website for a technology company featuring dynamic content management and multilingual support.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Next.js", "Sanity CMS", "Tailwind"],
    features: ["CMS Integration", "SEO Optimized", "Multi-language", "Blog System"],
  },
  {
    id: 4,
    title: "DataViz Dashboard",
    category: "Analytics Dashboard",
    description: "Business intelligence dashboard with real-time data visualization, custom reports, and automated insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["TypeScript", "D3.js", "PostgreSQL"],
    features: ["Real-time Charts", "Custom Reports", "Data Export", "Team Collaboration"],
  },
  {
    id: 5,
    title: "Fashion Boutique",
    category: "E-Commerce",
    description: "Luxury fashion e-commerce platform with AR try-on features, size recommendations, and influencer integration.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Laravel", "MySQL"],
    features: ["Virtual Try-On", "Size Guide", "Wishlist", "Influencer Shop"],
  },
  {
    id: 6,
    title: "TaskFlow SaaS",
    category: "SaaS Platform",
    description: "Project management SaaS with kanban boards, time tracking, team collaboration, and integration capabilities.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    features: ["Kanban Boards", "Time Tracking", "Team Chat", "API Integrations"],
  },
  {
    id: 7,
    title: "HealthCare Portal",
    category: "Corporate Website",
    description: "Healthcare provider portal with appointment scheduling, patient records, and telehealth integration.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["React", "Express", "MongoDB"],
    features: ["Appointment Booking", "Patient Portal", "Telehealth", "Secure Messaging"],
  },
  {
    id: 8,
    title: "FinanceTracker App",
    category: "Mobile App",
    description: "Personal finance mobile application with budget tracking, investment monitoring, and financial insights.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    tags: ["Flutter", "Firebase", "Plaid API"],
    features: ["Budget Tracking", "Investment View", "Bill Reminders", "Financial Reports"],
  },
  {
    id: 9,
    title: "Marketing Analytics",
    category: "Analytics Dashboard",
    description: "Marketing performance dashboard with campaign tracking, ROI analysis, and automated reporting.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop",
    tags: ["React", "Python", "AWS"],
    features: ["Campaign Tracking", "ROI Analysis", "A/B Testing", "Auto Reports"],
  },
  {
    id: 10,
    title: "Startup Landing",
    category: "Landing Page",
    description: "High-converting startup landing page with lead capture, testimonials, and interactive product demos.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    features: ["Lead Capture", "A/B Testing", "Analytics", "CRM Integration"],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? portfolioProjects
    : portfolioProjects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/30" />
        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-4 backdrop-blur-sm">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              My <span className="gradient-text">Creative Work</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore my portfolio of successful projects across various industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border sticky top-16 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="card-elevated overflow-hidden group h-full flex flex-col"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        className="flex gap-2"
                      >
                        <Button variant="hero" size="sm">
                          <ExternalLink size={14} className="mr-1" />
                          View Details
                        </Button>
                      </motion.div>
                    </div>
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-foreground">Key Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="px-2 py-0.5 rounded bg-secondary text-muted-foreground text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 3 && (
                          <span className="px-2 py-0.5 rounded bg-secondary text-muted-foreground text-xs">
                            +{project.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <FadeIn>
            <div className="card-elevated p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's collaborate and bring your vision to life with a custom solution tailored to your needs.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/contact">
                      Start a Project
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

export default Portfolio;
