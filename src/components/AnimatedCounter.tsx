import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix = "", label, duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center group"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-4xl md:text-5xl font-bold text-primary transition-transform"
      >
        {count}
        {suffix}
      </motion.div>
      <div className="text-sm md:text-base text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
        {label}
      </div>
    </motion.div>
  );
};

interface StatsCounterProps {
  className?: string;
}

export const StatsCounter = ({ className = "" }: StatsCounterProps) => {
  const stats = [
    { end: 8, suffix: "+", label: "Years Experience" },
    { end: 100, suffix: "+", label: "Projects Completed" },
    { end: 50, suffix: "+", label: "Happy Clients" },
  ];

  return (
    <div className={`grid grid-cols-3 gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <AnimatedCounter
          key={stat.label}
          end={stat.end}
          suffix={stat.suffix}
          label={stat.label}
          duration={2 + index * 0.3}
        />
      ))}
    </div>
  );
};

export default AnimatedCounter;
