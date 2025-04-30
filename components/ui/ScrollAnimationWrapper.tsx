"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  triggerOnce?: boolean;
  threshold?: number;
  stagger?: boolean;
  distance?: number; // Movement distance in pixels
}

/**
 * A wrapper component that animates its children when they enter the viewport.
 * Focused on natural, smooth bottom-to-top animations without scaling effects.
 */
const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  className = "",
  delay = 0,
  triggerOnce = true,
  threshold = 0.15,
  stagger = false,
  distance = 50, // Default vertical movement distance
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { 
    once: triggerOnce, 
    amount: threshold,
    margin: "-5% 0px -5% 0px" // Start animations as elements approach viewport
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Subtle parallax for depth without being distracting
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [30, -30]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  useEffect(() => {
    if (inView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [inView, hasAnimated, delay]);

  // Apply CSS-based animations for non-Framer content
  useEffect(() => {
    if (inView && ref.current) {
      ref.current.classList.add("in-view");
    }
  }, [inView]);

  // Main animation variant - smooth bottom-to-top without scaling
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: distance
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1], // Natural easing curve
        delay,
        staggerChildren: stagger ? 0.15 : 0,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: Math.min(distance * 0.6, 30) // Slightly less movement for children
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1]
      },
    },
  };

  return (
    <div
      ref={ref}
      className={`animate-section ${stagger ? "stagger-children" : ""} ${className}`}
    >
      <motion.div
        className="section-content"
        style={{ 
          y: inView ? 0 : y, // Only apply parallax when not in primary animation
          opacity: hasAnimated ? opacity : undefined
        }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={delay}
      >
        {stagger
          ? React.Children.map(children, (child) => (
              <motion.div variants={itemVariants}>{child}</motion.div>
            ))
          : children}
      </motion.div>
    </div>
  );
};

export default ScrollAnimationWrapper; 