import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedComponents";
import bannerBg from "@/assets/banner-bg.jpg";
import projectImage from "@/assets/project-2.jpg";

const features = [
  "Interactive data visualizations with D3.js",
  "Real-time data streaming and updates",
  "Customizable dashboard widgets",
  "Export reports to PDF and Excel",
  "Role-based access control",
  "API integration with multiple data sources",
];

const techStack = ["TypeScript", "D3.js", "PostgreSQL", "React", "Node.js", "Redis"];

const AnalyticsDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
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
          >
            <Link
              to="/"
              className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Analytics Dashboard
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A powerful data visualization platform for business insights and decision making.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={projectImage}
                alt="Analytics Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn direction="left">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  The Challenge
                </span>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Making Data Accessible
                </h2>
                <p className="text-muted-foreground mb-6">
                  The client had vast amounts of data but struggled to extract meaningful insights. 
                  They needed a dashboard that could visualize complex data sets in an intuitive way, 
                  allowing team members at all levels to make data-driven decisions.
                </p>
                <p className="text-muted-foreground">
                  I built a comprehensive analytics platform using D3.js for stunning visualizations, 
                  PostgreSQL for efficient data storage, and Redis for real-time caching. The result 
                  is a lightning-fast dashboard that transforms raw data into actionable insights.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  Key Features
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  What I Built
                </h3>
                <StaggerContainer className="space-y-3">
                  {features.map((feature) => (
                    <StaggerItem key={feature}>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Technologies Used
              </span>
              <h2 className="text-3xl font-bold text-foreground">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="px-6 py-3 rounded-xl bg-card border border-border text-foreground font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Results
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Project Impact
              </h2>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <p className="text-4xl font-bold gradient-text mb-2">40%</p>
                  <p className="text-muted-foreground text-sm">Faster Decisions</p>
                </div>
                <div>
                  <p className="text-4xl font-bold gradient-text mb-2">5M+</p>
                  <p className="text-muted-foreground text-sm">Data Points</p>
                </div>
                <div>
                  <p className="text-4xl font-bold gradient-text mb-2">100+</p>
                  <p className="text-muted-foreground text-sm">Active Users</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn>
            <div className="card-elevated p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Need Data Visualization?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's turn your data into actionable insights with a custom dashboard.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/contact">
                      Start Your Project
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

export default AnalyticsDashboard;
