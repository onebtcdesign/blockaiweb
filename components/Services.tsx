"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

interface ServiceItemProps {
  service: ServiceItem;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
}

const ServiceItem = ({ service, isOpen, toggleOpen, index }: ServiceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={cn(
        "group rounded-lg",
        "transition-all duration-200 ease-in-out",
        "border border-border/50",
        isOpen
          ? "bg-gradient-to-br from-background via-muted/50 to-background"
          : "hover:bg-muted/50"
      )}
    >
      <Button
        variant="ghost"
        onClick={toggleOpen}
        className="w-full px-6 py-4 h-auto justify-between hover:bg-transparent cursor-pointer"
      >
        <h3
          className={cn(
            "text-base font-medium transition-colors duration-200 text-left",
            "text-foreground/70",
            isOpen && "text-foreground"
          )}
        >
          {service.title}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "p-0.5 rounded-full flex-shrink-0",
            "transition-colors duration-200",
            isOpen ? "text-primary" : "text-muted-foreground"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <div className="px-6 pb-4 pt-2">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-sm text-muted-foreground leading-relaxed mb-4"
              >
                {service.description}
              </motion.p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground mb-2">Key Services</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Services = () => {
  const [openService, setOpenService] = useState<string | null>("crypto-design");

  const toggleService = (id: string) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <section className="py-20 relative" id="services">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/0 to-black/40 z-0"></div>
      
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left column - Title */}
          <div className="md:w-1/3">
            <h2 className="text-3xl font-semibold mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
              What We Can Do
            </h2>
            <p className="text-sm text-muted-foreground">
              Blockai provides comprehensive blockchain services, from product design to technical implementation, meeting all your Web3 project needs in one place
            </p>
          </div>
          
          {/* Right column - Services */}
          <div className="md:w-2/3 space-y-2">
            {services.map((service, index) => (
              <ServiceItem 
                key={service.id} 
                service={service} 
                isOpen={openService === service.id}
                toggleOpen={() => toggleService(service.id)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 