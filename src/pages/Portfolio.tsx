import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedComponents";
import { Button } from "@/components/ui/button";
import bannerBg from "@/assets/banner-bg.jpg";

// Import portfolio images
import ecommerce1 from "@/assets/portfolio/ecommerce-1.jpg";
import ecommerce2 from "@/assets/portfolio/ecommerce-2.jpg";
import ecommerce3 from "@/assets/portfolio/ecommerce-3.jpg";
import ecommerce4 from "@/assets/portfolio/ecommerce-4.jpg";
import ecommerce5 from "@/assets/portfolio/ecommerce-5.jpg";

import mobile1 from "@/assets/portfolio/mobile-1.jpg";
import mobile2 from "@/assets/portfolio/mobile-2.jpg";
import mobile3 from "@/assets/portfolio/mobile-3.jpg";
import mobile4 from "@/assets/portfolio/mobile-4.jpg";
import mobile5 from "@/assets/portfolio/mobile-5.jpg";

import corporate1 from "@/assets/portfolio/corporate-1.jpg";
import corporate2 from "@/assets/portfolio/corporate-2.jpg";
import corporate3 from "@/assets/portfolio/corporate-3.jpg";
import corporate4 from "@/assets/portfolio/corporate-4.jpg";
import corporate5 from "@/assets/portfolio/corporate-5.jpg";

import dashboard1 from "@/assets/portfolio/dashboard-1.jpg";
import dashboard2 from "@/assets/portfolio/dashboard-2.jpg";
import dashboard3 from "@/assets/portfolio/dashboard-3.jpg";
import dashboard4 from "@/assets/portfolio/dashboard-4.jpg";
import dashboard5 from "@/assets/portfolio/dashboard-5.jpg";

import saas1 from "@/assets/portfolio/saas-1.jpg";
import saas2 from "@/assets/portfolio/saas-2.jpg";
import saas3 from "@/assets/portfolio/saas-3.jpg";
import saas4 from "@/assets/portfolio/saas-4.jpg";
import saas5 from "@/assets/portfolio/saas-5.jpg";

import landing1 from "@/assets/portfolio/landing-1.jpg";
import landing2 from "@/assets/portfolio/landing-2.jpg";
import landing3 from "@/assets/portfolio/landing-3.jpg";
import landing4 from "@/assets/portfolio/landing-4.jpg";
import landing5 from "@/assets/portfolio/landing-5.jpg";

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
  // E-Commerce Projects
  {
    id: 1,
    title: "ShopEase E-Commerce",
    category: "E-Commerce",
    description: "A full-featured online shopping platform with real-time inventory management, secure payment processing, and personalized recommendations.",
    image: ecommerce1,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    features: ["User Authentication", "Shopping Cart", "Payment Integration", "Order Tracking"],
  },
  {
    id: 2,
    title: "Fashion Boutique",
    category: "E-Commerce",
    description: "Luxury fashion e-commerce platform with AR try-on features, size recommendations, and influencer integration.",
    image: ecommerce2,
    tags: ["Vue.js", "Laravel", "MySQL"],
    features: ["Virtual Try-On", "Size Guide", "Wishlist", "Influencer Shop"],
  },
  {
    id: 3,
    title: "Electronics Marketplace",
    category: "E-Commerce",
    description: "Multi-vendor electronics marketplace with advanced filtering, comparison tools, and warranty management.",
    image: ecommerce3,
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
    features: ["Multi-Vendor", "Product Comparison", "Reviews System", "Warranty Tracking"],
  },
  {
    id: 4,
    title: "Grocery Delivery App",
    category: "E-Commerce",
    description: "On-demand grocery delivery platform with real-time tracking, subscription boxes, and recipe integration.",
    image: ecommerce4,
    tags: ["React", "Express", "Redis"],
    features: ["Real-time Tracking", "Subscription Plans", "Recipe Integration", "Loyalty Program"],
  },
  {
    id: 5,
    title: "Artisan Marketplace",
    category: "E-Commerce",
    description: "Handcrafted goods marketplace connecting artisans with buyers, featuring custom orders and live workshops.",
    image: ecommerce5,
    tags: ["Angular", "Firebase", "Stripe Connect"],
    features: ["Custom Orders", "Live Workshops", "Artist Profiles", "Global Shipping"],
  },

  // Mobile App Projects
  {
    id: 6,
    title: "FitTrack Mobile UI",
    category: "Mobile App",
    description: "Cross-platform fitness tracking application with workout plans, progress tracking, and social features for motivation.",
    image: mobile1,
    tags: ["React Native", "Firebase", "Redux"],
    features: ["Workout Tracking", "Progress Charts", "Social Feed", "Push Notifications"],
  },
  {
    id: 7,
    title: "FinanceTracker App",
    category: "Mobile App",
    description: "Personal finance mobile application with budget tracking, investment monitoring, and financial insights.",
    image: mobile2,
    tags: ["Flutter", "Firebase", "Plaid API"],
    features: ["Budget Tracking", "Investment View", "Bill Reminders", "Financial Reports"],
  },
  {
    id: 8,
    title: "Travel Companion",
    category: "Mobile App",
    description: "All-in-one travel app with itinerary planning, booking management, and offline maps for seamless adventures.",
    image: mobile3,
    tags: ["React Native", "Node.js", "MongoDB"],
    features: ["Itinerary Builder", "Offline Maps", "Currency Converter", "Local Recommendations"],
  },
  {
    id: 9,
    title: "Meditation & Wellness",
    category: "Mobile App",
    description: "Mindfulness app with guided meditations, sleep stories, and breathing exercises for mental well-being.",
    image: mobile4,
    tags: ["Swift", "Kotlin", "AWS"],
    features: ["Guided Meditations", "Sleep Stories", "Progress Tracking", "Daily Reminders"],
  },
  {
    id: 10,
    title: "Food Delivery UI",
    category: "Mobile App",
    description: "Sleek food delivery app interface with restaurant discovery, real-time order tracking, and dietary filters.",
    image: mobile5,
    tags: ["Flutter", "Firebase", "Google Maps"],
    features: ["Restaurant Discovery", "Order Tracking", "Dietary Filters", "Loyalty Rewards"],
  },

  // Corporate Website Projects
  {
    id: 11,
    title: "TechCorp Website",
    category: "Corporate Website",
    description: "Modern corporate website for a technology company featuring dynamic content management and multilingual support.",
    image: corporate1,
    tags: ["Next.js", "Sanity CMS", "Tailwind"],
    features: ["CMS Integration", "SEO Optimized", "Multi-language", "Blog System"],
  },
  {
    id: 12,
    title: "HealthCare Portal",
    category: "Corporate Website",
    description: "Healthcare provider portal with appointment scheduling, patient records, and telehealth integration.",
    image: corporate2,
    tags: ["React", "Express", "MongoDB"],
    features: ["Appointment Booking", "Patient Portal", "Telehealth", "Secure Messaging"],
  },
  {
    id: 13,
    title: "Law Firm Digital Presence",
    category: "Corporate Website",
    description: "Professional law firm website with case study showcases, attorney profiles, and secure client portal.",
    image: corporate3,
    tags: ["WordPress", "Custom Theme", "PHP"],
    features: ["Case Studies", "Attorney Profiles", "Client Portal", "Contact Forms"],
  },
  {
    id: 14,
    title: "Real Estate Agency",
    category: "Corporate Website",
    description: "Property listing platform with advanced search, virtual tours, and mortgage calculator integration.",
    image: corporate4,
    tags: ["Vue.js", "Node.js", "PostgreSQL"],
    features: ["Property Listings", "Virtual Tours", "Mortgage Calculator", "Agent Profiles"],
  },
  {
    id: 15,
    title: "Financial Services Hub",
    category: "Corporate Website",
    description: "Investment firm website with portfolio tools, market insights, and secure account management.",
    image: corporate5,
    tags: ["React", "Django", "PostgreSQL"],
    features: ["Portfolio Tools", "Market Insights", "Account Dashboard", "Document Center"],
  },

  // Analytics Dashboard Projects
  {
    id: 16,
    title: "DataViz Dashboard",
    category: "Analytics Dashboard",
    description: "Business intelligence dashboard with real-time data visualization, custom reports, and automated insights.",
    image: dashboard1,
    tags: ["TypeScript", "D3.js", "PostgreSQL"],
    features: ["Real-time Charts", "Custom Reports", "Data Export", "Team Collaboration"],
  },
  {
    id: 17,
    title: "Marketing Analytics",
    category: "Analytics Dashboard",
    description: "Marketing performance dashboard with campaign tracking, ROI analysis, and automated reporting.",
    image: dashboard2,
    tags: ["React", "Python", "AWS"],
    features: ["Campaign Tracking", "ROI Analysis", "A/B Testing", "Auto Reports"],
  },
  {
    id: 18,
    title: "Sales Performance Hub",
    category: "Analytics Dashboard",
    description: "Sales team dashboard with pipeline visualization, lead scoring, and territory management.",
    image: dashboard3,
    tags: ["Vue.js", "Node.js", "MongoDB"],
    features: ["Pipeline View", "Lead Scoring", "Territory Maps", "Quota Tracking"],
  },
  {
    id: 19,
    title: "IoT Monitoring Center",
    category: "Analytics Dashboard",
    description: "Industrial IoT dashboard for device monitoring, predictive maintenance, and energy optimization.",
    image: dashboard4,
    tags: ["React", "InfluxDB", "Grafana"],
    features: ["Device Monitoring", "Predictive Alerts", "Energy Analytics", "Remote Control"],
  },
  {
    id: 20,
    title: "Social Media Analytics",
    category: "Analytics Dashboard",
    description: "Social media management dashboard with engagement metrics, sentiment analysis, and content scheduling.",
    image: dashboard5,
    tags: ["Angular", "Python", "Redis"],
    features: ["Engagement Metrics", "Sentiment Analysis", "Content Calendar", "Competitor Tracking"],
  },

  // SaaS Platform Projects
  {
    id: 21,
    title: "TaskFlow SaaS",
    category: "SaaS Platform",
    description: "Project management SaaS with kanban boards, time tracking, team collaboration, and integration capabilities.",
    image: saas1,
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    features: ["Kanban Boards", "Time Tracking", "Team Chat", "API Integrations"],
  },
  {
    id: 22,
    title: "CRM Enterprise",
    category: "SaaS Platform",
    description: "Comprehensive CRM platform with contact management, deal tracking, and automation workflows.",
    image: saas2,
    tags: ["Vue.js", "Laravel", "MySQL"],
    features: ["Contact Management", "Deal Pipeline", "Email Automation", "Custom Fields"],
  },
  {
    id: 23,
    title: "HR Management Suite",
    category: "SaaS Platform",
    description: "All-in-one HR platform with employee management, payroll processing, and performance reviews.",
    image: saas3,
    tags: ["React", "Django", "PostgreSQL"],
    features: ["Employee Directory", "Payroll", "Performance Reviews", "Leave Management"],
  },
  {
    id: 24,
    title: "Inventory Pro",
    category: "SaaS Platform",
    description: "Warehouse management system with barcode scanning, stock alerts, and supplier integration.",
    image: saas4,
    tags: ["Next.js", "Go", "MongoDB"],
    features: ["Barcode Scanning", "Stock Alerts", "Supplier Portal", "Multi-Warehouse"],
  },
  {
    id: 25,
    title: "E-Learning Platform",
    category: "SaaS Platform",
    description: "Online learning management system with course creation, progress tracking, and certification.",
    image: saas5,
    tags: ["React", "Node.js", "MongoDB"],
    features: ["Course Builder", "Progress Tracking", "Certificates", "Live Classes"],
  },

  // Landing Page Projects
  {
    id: 26,
    title: "Startup Landing",
    category: "Landing Page",
    description: "High-converting startup landing page with lead capture, testimonials, and interactive product demos.",
    image: landing1,
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    features: ["Lead Capture", "A/B Testing", "Analytics", "CRM Integration"],
  },
  {
    id: 27,
    title: "App Launch Page",
    category: "Landing Page",
    description: "Mobile app launch landing with app store integration, feature showcase, and early access signup.",
    image: landing2,
    tags: ["React", "GSAP", "Tailwind"],
    features: ["App Store Links", "Feature Showcase", "Early Access", "Press Kit"],
  },
  {
    id: 28,
    title: "Event Registration",
    category: "Landing Page",
    description: "Conference landing page with speaker profiles, schedule display, and ticket purchasing.",
    image: landing3,
    tags: ["Vue.js", "Stripe", "Firebase"],
    features: ["Speaker Profiles", "Event Schedule", "Ticket Sales", "Countdown Timer"],
  },
  {
    id: 29,
    title: "Product Launch",
    category: "Landing Page",
    description: "Product launch page with 3D product viewer, feature comparison, and pre-order functionality.",
    image: landing4,
    tags: ["React", "Three.js", "Tailwind"],
    features: ["3D Viewer", "Feature Comparison", "Pre-orders", "Social Proof"],
  },
  {
    id: 30,
    title: "SaaS Conversion Page",
    category: "Landing Page",
    description: "High-conversion SaaS landing with pricing tables, testimonials, and free trial signup.",
    image: landing5,
    tags: ["Next.js", "Framer Motion", "Stripe"],
    features: ["Pricing Tables", "Testimonials", "Free Trial", "FAQ Section"],
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
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ y: -10 }}
                  className="card-elevated overflow-hidden group h-full flex flex-col"
                >
                  <div className="relative overflow-hidden aspect-video bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={225}
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
              ))}
            </motion.div>
          </AnimatePresence>
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
