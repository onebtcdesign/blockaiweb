"use client";

import { useState, memo, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Code, Fingerprint, Layers, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { animate } from "motion/react";

// GlowingEffect 组件定义（从glowing-effect.tsx融合）
interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = true,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1]
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          if (!isActive) return;

          const currentAngle =
            parseFloat(element.style.getPropertyValue("--start")) || 0;
          let targetAngle =
            (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
              Math.PI +
            90;

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value));
            },
          });
        });
      },
      [inactiveZone, proximity, movementDuration]
    );

    useEffect(() => {
      if (disabled) return;

      const handleScroll = () => handleMove();
      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    return (
      <>
        <div
          className={cn(
            "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
            glow && "opacity-100",
            variant === "white" && "border-white",
            disabled && "!block"
          )}
        />
        <div
          ref={containerRef}
          style={
            {
              "--blur": `${blur}px`,
              "--spread": spread,
              "--start": "0",
              "--active": "0",
              "--glowingeffect-border-width": `${borderWidth}px`,
              "--repeating-conic-gradient-times": "5",
              "--gradient":
                variant === "white"
                  ? `repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  var(--black),
                  var(--black) calc(25% / var(--repeating-conic-gradient-times))
                )`
                  : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
                radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
                radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), 
                radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #dd7bbb 0%,
                  #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
                  #5a922c calc(50% / var(--repeating-conic-gradient-times)), 
                  #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
                  #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
                )`,
            } as React.CSSProperties
          }
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
            glow && "opacity-100",
            blur > 0 && "blur-[var(--blur)] ",
            className,
            disabled && "!hidden"
          )}
        >
          <div
            className={cn(
              "glow",
              "rounded-[inherit]",
              'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
              "after:[mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
            )}
          />
        </div>
      </>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  area?: string;
}

const services: ServiceItem[] = [
  {
    id: "crypto-design",
    title: "Crypto Project Design",
    description: "From brand identity to user interface, we provide complete Web3 project design services to help your project stand out",
    features: [
      "NFT Art Design",
      "Token Brand Design",
      "DApp UI/UX",
      "Website/Dashboard Design",
      "Marketing Material Design"
    ],
    icon: <Layers className="h-4 w-4" />,
    area: "md:[grid-area:1/1/2/7]"
  },
  {
    id: "development",
    title: "Full-Stack Development",
    description: "Our development team excels in blockchain technology, turning your ideas into fully functional Web3 applications",
    features: [
      "Smart Contract Development",
      "DApp Frontend Development",
      "Blockchain Integration",
      "Wallet Connection Integration",
      "API Development & Integration"
    ],
    icon: <Code className="h-4 w-4" />,
    area: "md:[grid-area:1/7/2/13]"
  },
  {
    id: "one-stop",
    title: "One-Stop Development",
    description: "From concept to launch, we provide end-to-end project development services, including design, development, testing, and deployment",
    features: [
      "Product Strategy Consulting",
      "Technical Architecture Design",
      "Full-Stack Implementation",
      "Security Audit & Optimization",
      "Post-Launch Support & Maintenance"
    ],
    icon: <Box className="h-4 w-4" />,
    area: "md:[grid-area:2/1/3/7]"
  },
  {
    id: "cooperation",
    title: "Project Collaboration",
    description: "We establish long-term partnerships with project teams, providing ongoing technical support and business expansion services",
    features: [
      "Technical Advisory Services",
      "Customized Development Solutions",
      "Industry Resource Connections",
      "Marketing Support",
      "Investment Consulting Services"
    ],
    icon: <Fingerprint className="h-4 w-4" />,
    area: "md:[grid-area:2/7/3/13]"
  }
];

interface ServiceItemProps {
  service: ServiceItem;
  isOpen: boolean;
  toggleOpen: () => void;
}

const ServiceItem = ({ service, isOpen, toggleOpen }: ServiceItemProps) => {
  return (
    <li className={cn("min-h-[16rem] list-none", service.area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                {service.icon}
              </div>
              <div
                onClick={toggleOpen}
                className="cursor-pointer rounded-full p-1 hover:bg-muted transition-colors"
              >
                <motion.div
                  animate={{
                    rotate: isOpen ? 180 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </motion.div>
              </div>
            </div>
            
            <div className="mt-4 space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {service.title}
              </h3>
              <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>
          
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: { duration: 0.2, ease: "easeIn" },
                }}
                className="overflow-hidden"
              >
                <div className="pt-6 border-t border-border/50 mt-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Key Services</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </li>
  );
};

const Services = () => {
  const [openService, setOpenService] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <section className="py-40 relative" id="services">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 z-0"></div>
      
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
            What We Can Do
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Blockai provides comprehensive blockchain services, from product design to technical implementation, meeting all your Web3 project needs in one place
          </p>
        </div>
        
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2">
          {services.map((service) => (
            <ServiceItem 
              key={service.id} 
              service={service} 
              isOpen={openService === service.id}
              toggleOpen={() => toggleService(service.id)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services; 