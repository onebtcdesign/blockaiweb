"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// FAQ data
const faqData = [
  {
    question: "What services does Blockai offer?",
    answer: "Blockai provides comprehensive Web3 services, including product design (NFT, token branding, DApp UI/UX, etc.), full-stack development (smart contracts, blockchain integration, wallet connections, etc.), one-stop development (full-cycle service from concept to launch), and project collaboration (technical consultancy, resource connections, etc.). Whether you're a startup project or a team with an existing foundation, we can provide professional solutions tailored to your needs."
  },
  {
    question: "What is the collaboration process with Blockai?",
    answer: "Collaborating with Blockai typically involves these steps: 1) Initial communication to understand your project requirements; 2) Requirement analysis and solution formulation; 3) Signing a cooperation agreement; 4) Beginning design and development work; 5) Periodic progress demonstrations and feedback adjustments; 6) Project delivery and launch; 7) Subsequent technical support and maintenance. We emphasize close communication with clients to ensure the project progresses smoothly according to expectations."
  },
  {
    question: "How does Blockai ensure project security and quality?",
    answer: "We place a high priority on project security and quality, implementing a series of measures: 1) Following industry best practices and security standards; 2) Team members with extensive blockchain development experience; 3) Code undergoes rigorous review and testing; 4) Multiple rounds of internal security audits; 5) Collaboration with professional third-party security companies for external audits; 6) Continuous monitoring and system updates to promptly fix potential vulnerabilities. These measures collectively ensure that our delivered products maintain a high standard of security and quality."
  },
  {
    question: "How long does project development typically take?",
    answer: "Project development timelines depend on multiple factors, including project complexity, functional requirements, and design specifications. Generally, a simple MVP (Minimum Viable Product) might require 4-6 weeks, medium-scale projects might need 2-4 months, while large complex projects could take 6 months or longer. Before project initiation, we provide more accurate time estimates based on detailed requirements analysis."
  },
  {
    question: "Does Blockai provide maintenance and support services after project launch?",
    answer: "Yes, we offer comprehensive post-launch services, including technical maintenance, feature updates, performance optimization, and security monitoring. We provide different maintenance plans, from basic incident response to full-scale continuous development support. Clients can choose the appropriate service level based on their needs. Our goal is to establish long-term partnerships with clients and continuously add value to your projects."
  },
  {
    question: "Does Blockai accept cryptocurrency payments?",
    answer: "Yes, we accept various cryptocurrencies as payment methods, including BTC, ETH, USDT, and other mainstream tokens. We also accept traditional fiat currency payments. Specific payment methods and terms will be detailed in the cooperation agreement. Our flexible payment options aim to provide maximum convenience for our clients."
  }
];

// Internal FaqItem component
const FaqItem = React.forwardRef<
  HTMLDivElement,
  {
    question: string;
    answer: string;
    index: number;
  }
>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { question, answer, index } = props;

  return (
    <motion.div
      ref={ref}
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
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 h-auto justify-between hover:bg-transparent cursor-pointer"
      >
        <h3
          className={cn(
            "text-base font-medium transition-colors duration-200 text-left",
            "text-foreground/70",
            isOpen && "text-foreground"
          )}
        >
          {question}
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
                className="text-sm text-muted-foreground leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
FaqItem.displayName = "FaqItem";

const Faq = () => {
  return (
    <section
      className="py-16 w-full bg-gradient-to-b from-transparent via-muted/50 to-transparent"
      id="faq"
    >
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-muted-foreground">
            Here are answers to questions our clients frequently ask, which we hope will help you better understand our services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-2xl mx-auto space-y-2">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq; 