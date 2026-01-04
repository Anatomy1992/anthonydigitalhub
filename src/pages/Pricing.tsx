import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedComponents";
import { Button } from "@/components/ui/button";
import bannerBg from "@/assets/banner-bg.jpg";

const servicePricing = [
  {
    service: "Web Design (UI/UX)",
    description: "Professional interface design that converts visitors into customers",
    plans: [
      {
        name: "Basic",
        price: "$500",
        period: "per project",
        features: [
          "Up to 5 pages design",
          "Mobile responsive design",
          "2 revision rounds",
          "Basic wireframes",
          "7-day delivery",
        ],
      },
      {
        name: "Standard",
        price: "$1,200",
        period: "per project",
        popular: true,
        features: [
          "Up to 10 pages design",
          "Mobile & tablet responsive",
          "5 revision rounds",
          "Detailed wireframes & prototypes",
          "User research & personas",
          "14-day delivery",
        ],
      },
      {
        name: "Premium",
        price: "$2,500",
        period: "per project",
        features: [
          "Unlimited pages design",
          "All device responsive",
          "Unlimited revisions",
          "Complete UX research",
          "Interactive prototypes",
          "Design system included",
          "21-day delivery",
        ],
      },
    ],
  },
  {
    service: "Web App Development",
    description: "Custom web applications built with modern technologies",
    plans: [
      {
        name: "Basic",
        price: "$1,500",
        period: "per project",
        features: [
          "Single page application",
          "Basic CRUD functionality",
          "User authentication",
          "Responsive design",
          "14-day delivery",
        ],
      },
      {
        name: "Standard",
        price: "$4,000",
        period: "per project",
        popular: true,
        features: [
          "Multi-page application",
          "Advanced features & APIs",
          "User roles & permissions",
          "Database integration",
          "Payment integration",
          "30-day delivery",
        ],
      },
      {
        name: "Premium",
        price: "$8,000+",
        period: "per project",
        features: [
          "Enterprise-grade application",
          "Complex business logic",
          "Third-party integrations",
          "Real-time features",
          "Performance optimization",
          "3 months support",
          "45-day delivery",
        ],
      },
    ],
  },
  {
    service: "Full-Stack Solutions",
    description: "End-to-end development from concept to deployment",
    plans: [
      {
        name: "Basic",
        price: "$2,000",
        period: "per project",
        features: [
          "Simple backend setup",
          "RESTful API development",
          "Database design",
          "Frontend integration",
          "Basic deployment",
        ],
      },
      {
        name: "Standard",
        price: "$5,500",
        period: "per project",
        popular: true,
        features: [
          "Complete full-stack app",
          "GraphQL or REST APIs",
          "Advanced database design",
          "Cloud deployment (AWS/GCP)",
          "CI/CD pipeline setup",
          "1 month maintenance",
        ],
      },
      {
        name: "Premium",
        price: "$12,000+",
        period: "per project",
        features: [
          "Enterprise full-stack solution",
          "Microservices architecture",
          "High availability setup",
          "Load balancing & scaling",
          "Security hardening",
          "6 months support",
          "Documentation included",
        ],
      },
    ],
  },
  {
    service: "E-commerce & CMS",
    description: "Online stores and content management systems",
    plans: [
      {
        name: "Basic",
        price: "$800",
        period: "per project",
        features: [
          "WordPress/Shopify setup",
          "Up to 20 products",
          "Basic theme customization",
          "Payment gateway setup",
          "7-day delivery",
        ],
      },
      {
        name: "Standard",
        price: "$2,500",
        period: "per project",
        popular: true,
        features: [
          "Custom theme design",
          "Up to 100 products",
          "Inventory management",
          "Multiple payment options",
          "SEO optimization",
          "14-day delivery",
        ],
      },
      {
        name: "Premium",
        price: "$6,000+",
        period: "per project",
        features: [
          "Fully custom e-commerce",
          "Unlimited products",
          "Advanced analytics",
          "Multi-currency support",
          "Subscription features",
          "Custom integrations",
          "30-day delivery",
        ],
      },
    ],
  },
];

const hourlyRates = [
  { service: "Web Design (UI/UX)", rate: "$40 - $75", average: "$55" },
  { service: "Frontend Development", rate: "$50 - $90", average: "$70" },
  { service: "Backend Development", rate: "$60 - $100", average: "$80" },
  { service: "Full-Stack Development", rate: "$70 - $120", average: "$95" },
  { service: "E-commerce Development", rate: "$55 - $95", average: "$75" },
  { service: "Consulting & Code Review", rate: "$80 - $150", average: "$110" },
];

const Pricing = () => {
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
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Transparent{" "}
              <span className="gradient-text">Pricing Plans</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Competitive rates based on industry standards. Choose a plan that fits your project needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Pricing Sections */}
      {servicePricing.map((category, categoryIndex) => (
        <section
          key={category.service}
          className={`section-padding ${categoryIndex % 2 === 0 ? "bg-card" : ""}`}
        >
          <div className="container-custom">
            <SectionHeader
              label={`Service ${categoryIndex + 1}`}
              title={category.service}
              description={category.description}
            />

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.plans.map((plan) => (
                <StaggerItem key={plan.name}>
                  <motion.div
                    whileHover={{ y: -10, boxShadow: "0 0 40px hsl(217 91% 60% / 0.2)" }}
                    className={`card-elevated p-8 h-full flex flex-col relative ${
                      plan.popular ? "border-primary border-2" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                          <Star size={12} fill="currentColor" />
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold text-primary">{plan.price}</span>
                        <span className="text-muted-foreground text-sm">/{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 flex-grow mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={plan.popular ? "hero" : "outline"}
                      className="w-full"
                      asChild
                    >
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      ))}

      {/* Hourly Rates Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeader
            label="Hourly Rates"
            title="Flexible Hourly Pricing"
            description="For ongoing projects, maintenance, or consulting work"
          />

          <FadeIn>
            <div className="card-elevated overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      <th className="text-left py-4 px-6 text-foreground font-semibold">Service</th>
                      <th className="text-left py-4 px-6 text-foreground font-semibold">Rate Range</th>
                      <th className="text-left py-4 px-6 text-foreground font-semibold">Average Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hourlyRates.map((item, index) => (
                      <motion.tr
                        key={item.service}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors"
                      >
                        <td className="py-4 px-6 text-foreground">{item.service}</td>
                        <td className="py-4 px-6 text-muted-foreground">{item.rate}</td>
                        <td className="py-4 px-6">
                          <span className="text-primary font-semibold">{item.average}/hr</span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn>
            <div className="card-elevated p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Need a Custom Quote?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Every project is unique. If your requirements don't fit our standard packages,
                  let's discuss a tailored solution that meets your specific needs and budget.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/contact">
                      Request Custom Quote
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

export default Pricing;
