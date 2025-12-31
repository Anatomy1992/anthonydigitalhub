import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle, Code2, Layers, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedComponents";
import { Button } from "@/components/ui/button";
import developerImage from "@/assets/developer-illustration.jpg";

const workflowSteps = [
  { step: "01", title: "Planning", description: "Understanding your goals and requirements", icon: Lightbulb },
  { step: "02", title: "Design", description: "Creating wireframes and visual designs", icon: Layers },
  { step: "03", title: "Development", description: "Building with clean, scalable code", icon: Code2 },
  { step: "04", title: "Testing", description: "Ensuring quality across all devices", icon: CheckCircle },
  { step: "05", title: "Deployment", description: "Launching and monitoring your project", icon: ArrowRight },
];

const skills = {
  "Languages & Frameworks": ["JavaScript", "TypeScript", "Python", "Java", "C#", "Go", "PHP", "React", "Vue.js", "Node.js", "Django", "Express"],
  "Tools & Platforms": ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code", "Postman", "Jenkins"],
  "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "GraphQL"],
};

const values = [
  {
    title: "Code Quality",
    description: "Writing clean, maintainable, and well-documented code that stands the test of time.",
    icon: Code2,
  },
  {
    title: "Communication",
    description: "Keeping you informed every step of the way with clear, timely updates.",
    icon: Users,
  },
  {
    title: "Continuous Learning",
    description: "Always staying current with the latest technologies and best practices.",
    icon: Lightbulb,
  },
];

const About = () => {
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
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Building Digital{" "}
              <span className="gradient-text">Excellence</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Passionate about creating exceptional digital experiences that make a difference
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={developerImage}
                    alt="Anthony - Full-Stack Developer"
                    className="w-full h-auto"
                  />
                </motion.div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 blur-2xl" />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Hi, I'm Anthony
                </h2>
                <p className="text-muted-foreground mb-4">
                  With over 8 years of experience in web development, I've had the privilege of working with startups, enterprises, and everything in between. My journey began with a curiosity for how things work on the web, which quickly evolved into a passion for creating them.
                </p>
                <p className="text-muted-foreground mb-4">
                  I specialize in building full-stack web applications that are not only visually stunning but also performant, accessible, and scalable. Every project is an opportunity to solve real problems and create meaningful impact.
                </p>
                <p className="text-muted-foreground mb-6">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">8+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Background/Journey */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="My Journey"
            title="From Design to Full-Stack"
            description="A timeline of growth, learning, and building"
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
              {[
                { year: "2016", title: "Started as a Frontend Developer", description: "Began my journey with HTML, CSS, and JavaScript, building responsive websites." },
                { year: "2018", title: "Transitioned to Full-Stack", description: "Expanded skills to include backend development with Node.js and databases." },
                { year: "2020", title: "Started Freelancing", description: "Launched Anthony Digital Hub to help businesses build their online presence." },
                { year: "2022", title: "Enterprise Projects", description: "Worked with major clients on large-scale applications and complex systems." },
                { year: "2024", title: "Continuous Growth", description: "Still learning, still building, still passionate about creating great software." },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-11 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={16} className="text-primary" />
                    <span className="text-primary font-medium">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeader
            label="Expertise"
            title="Skills & Technologies"
            description="Tools and technologies I work with daily"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <StaggerItem key={category}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="card-elevated p-6 h-full"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-md bg-secondary text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Process"
            title="My Workflow"
            description="A structured approach to delivering exceptional results"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card-elevated p-6 text-center relative"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  {step.step}
                </div>
                <step.icon className="w-8 h-8 text-primary mx-auto mb-4 mt-4" />
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <ArrowRight className="text-primary/50" size={16} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeader
            label="Values"
            title="What Drives Me"
            description="Core principles that guide my work"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 0 40px hsl(217 91% 60% / 0.2)" }}
                  className="card-elevated p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and help bring your vision to life.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
