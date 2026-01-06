import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Star } from "lucide-react";
import heroVideo from "@/assets/hero-developer-video.mp4";
import heroDev1 from "@/assets/hero-developer-1.jpg";
import heroDev2 from "@/assets/hero-developer-2.jpg";
import developerImage from "@/assets/developer-illustration.jpg";
import testimonialsBg from "@/assets/testimonials-bg.jpg";
import ecommerce1 from "@/assets/portfolio/ecommerce-1.jpg";
import mobile1 from "@/assets/portfolio/mobile-1.jpg";
import corporate1 from "@/assets/portfolio/corporate-1.jpg";
import dashboard1 from "@/assets/portfolio/dashboard-1.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedComponents";
import { StatsCounter } from "@/components/AnimatedCounter";
import HeroSlider from "@/components/HeroSlider";

// Hero slides data
const heroSlides = [
  { type: "video" as const, src: heroVideo },
  { type: "image" as const, src: heroDev1 },
  { type: "image" as const, src: heroDev2 },
];

// Tech Stack Data
const techStack = {
  "Front-End": ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Tailwind"],
  "Back-End": ["Node.js", "Python", "PHP", "Java", "C#", "Go"],
  CMS: ["WordPress", "Shopify", "Wix", "Webflow"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "GraphQL"],
};

// Services Data
const services = [
  {
    title: "Web Design",
    description: "Beautiful, responsive UI/UX designs that convert visitors into customers.",
    icon: "🎨",
  },
  {
    title: "Web App Development",
    description: "Custom web applications built with modern frameworks and best practices.",
    icon: "💻",
  },
  {
    title: "Full-Stack Solutions",
    description: "End-to-end development from database architecture to frontend deployment.",
    icon: "⚡",
  },
  {
    title: "E-commerce",
    description: "Scalable online stores with payment integration and inventory management.",
    icon: "🛒",
  },
];

// Projects Data
const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with real-time inventory",
    image: ecommerce1,
    tags: ["React", "Node.js", "MongoDB"],
    link: "/portfolio",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization platform for business insights",
    image: dashboard1,
    tags: ["TypeScript", "D3.js", "PostgreSQL"],
    link: "/portfolio",
  },
  {
    title: "Mobile App UI",
    description: "Cross-platform fitness tracking application",
    image: mobile1,
    tags: ["React Native", "Firebase"],
    link: "/portfolio",
  },
  {
    title: "Corporate Website",
    description: "Modern corporate site with CMS integration",
    image: corporate1,
    tags: ["Next.js", "Sanity CMS", "Tailwind"],
    link: "/portfolio",
  },
];

// Testimonials Data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Anthony delivered exceptional results. Our new platform increased conversions by 150%!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, DataFlow",
    content: "Professional, responsive, and incredibly skilled. The best developer we've worked with.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Marketing Director",
    content: "The attention to detail and communication throughout the project was outstanding.",
    rating: 5,
  },
];

// Why Choose Points
const whyChoose = [
  { title: "Scalable Code", description: "Built to grow with your business" },
  { title: "Performance", description: "Optimized for speed and efficiency" },
  { title: "UI/UX Focus", description: "User-centered design approach" },
  { title: "SEO Ready", description: "Search engine optimized from day one" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Slider */}
      <section className="relative min-h-screen flex items-center pt-16">
        <HeroSlider slides={heroSlides} interval={15000} />

        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
                Available for Projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Full-Stack Web Developer &{" "}
              <span className="gradient-text">Web App Designer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl"
            >
              I build scalable, high-performance digital solutions that help
              businesses thrive in the modern digital landscape.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/services">
                    View My Work
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Code Icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block absolute right-20 bottom-32 z-10"
        >
          <div className="w-20 h-20 rounded-2xl bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center shadow-lg">
            <Code2 className="text-primary" size={40} />
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeader
            label="Technologies"
            title="Tech Stack Snapshot"
            description="A comprehensive toolkit for building modern digital experiences"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, techs]) => (
              <StaggerItem key={category}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="card-elevated p-6 h-full"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-md bg-secondary text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="What I Do"
            title="Services Overview"
            description="Comprehensive digital solutions tailored to your needs"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 0 40px hsl(217 91% 60% / 0.2)" }}
                  className="card-elevated p-6 h-full flex flex-col"
                >
                  <motion.div
                    animate={{ x: [0, 5, 0, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="text-4xl mb-4"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-grow">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-primary font-medium mt-4 hover:gap-2 transition-all group"
                  >
                    Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <FadeIn>
            <div className="card-elevated p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Achievements
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Numbers That Speak
                  </h2>
                </div>
                <StatsCounter className="max-w-2xl mx-auto" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Portfolio"
            title="Featured Work"
            description="Recent projects showcasing my expertise and creativity"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="card-elevated overflow-hidden group"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
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
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="outline" size="sm" asChild className="group/btn">
                        <Link to={project.link}>
                          View Project <ArrowRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Why Choose Me
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Building Digital Excellence
                </h2>
                <div className="space-y-4">
                  {whyChoose.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={developerImage}
                    alt="Professional Developer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto"
                  />
                </motion.div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 blur-2xl" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="section-padding relative"
        style={{
          backgroundImage: `url(${testimonialsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/30" />
        <div className="container-custom relative z-10">
          <SectionHeader
            label="Testimonials"
            title="What Clients Say"
            description="Hear from some of the amazing people I've had the pleasure to work with"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-6"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn>
            <div className="card-elevated p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's collaborate to bring your vision to life. From concept to
                  deployment, I'm here to help you succeed.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/contact">
                      Get in Touch
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

export default Index;
