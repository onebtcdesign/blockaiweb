"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

// Accordion components integrated directly
const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-border", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// FAQ data
const faqData = [
  {
    id: "1",
    title: "What services does Blockai offer?",
    content: "Blockai provides comprehensive Web3 services, including product design (NFT, token branding, DApp UI/UX, etc.), full-stack development (smart contracts, blockchain integration, wallet connections, etc.), one-stop development (full-cycle service from concept to launch), and project collaboration (technical consultancy, resource connections, etc.). Whether you're a startup project or a team with an existing foundation, we can provide professional solutions tailored to your needs."
  },
  {
    id: "2",
    title: "What is the collaboration process with Blockai?",
    content: "Collaborating with Blockai typically involves these steps: 1) Initial communication to understand your project requirements; 2) Requirement analysis and solution formulation; 3) Signing a cooperation agreement; 4) Beginning design and development work; 5) Periodic progress demonstrations and feedback adjustments; 6) Project delivery and launch; 7) Subsequent technical support and maintenance. We emphasize close communication with clients to ensure the project progresses smoothly according to expectations."
  },
  {
    id: "3",
    title: "How does Blockai ensure project security and quality?",
    content: "We place a high priority on project security and quality, implementing a series of measures: 1) Following industry best practices and security standards; 2) Team members with extensive blockchain development experience; 3) Code undergoes rigorous review and testing; 4) Multiple rounds of internal security audits; 5) Collaboration with professional third-party security companies for external audits; 6) Continuous monitoring and system updates to promptly fix potential vulnerabilities. These measures collectively ensure that our delivered products maintain a high standard of security and quality."
  },
  {
    id: "4",
    title: "How long does project development typically take?",
    content: "Project development timelines depend on multiple factors, including project complexity, functional requirements, and design specifications. Generally, a simple MVP (Minimum Viable Product) might require 4-6 weeks, medium-scale projects might need 2-4 months, while large complex projects could take 6 months or longer. Before project initiation, we provide more accurate time estimates based on detailed requirements analysis."
  },
  {
    id: "5",
    title: "Does Blockai provide maintenance and support services after project launch?",
    content: "Yes, we offer comprehensive post-launch services, including technical maintenance, feature updates, performance optimization, and security monitoring. We provide different maintenance plans, from basic incident response to full-scale continuous development support. Clients can choose the appropriate service level based on their needs. Our goal is to establish long-term partnerships with clients and continuously add value to your projects."
  },
  {
    id: "6",
    title: "Does Blockai accept cryptocurrency payments?",
    content: "Yes, we accept various cryptocurrencies as payment methods, including BTC, ETH, USDT, and other mainstream tokens. We also accept traditional fiat currency payments. Specific payment methods and terms will be detailed in the cooperation agreement. Our flexible payment options aim to provide maximum convenience for our clients."
  }
];

const Faq = () => {
  return (
    <section
      className="py-36 w-full bg-gradient-to-b from-transparent via-muted/50 to-transparent"
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

        {/* FAQ Items with new Accordion style */}
        <div className="max-w-2xl mx-auto space-y-2">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item) => (
              <AccordionItem value={item.id} key={item.id} className="py-3 border-border/50">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger 
                    className="flex flex-1 items-center justify-between px-4 py-4 font-sans text-left tracking-normal transition-all
                    text-foreground/90 hover:text-foreground text-balance
                    text-base md:text-lg font-medium leading-relaxed
                    [&[data-state=open]]:text-foreground [&[data-state=open]>svg]:rotate-180"
                  >
                    {item.title}
                    <Plus
                      size={16}
                      strokeWidth={2}
                      className="shrink-0 text-muted-foreground transition-transform duration-200 ml-4"
                      aria-hidden="true"
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="px-4 pb-5 pt-1">
                  <p className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground text-balance">
                    {item.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq; 