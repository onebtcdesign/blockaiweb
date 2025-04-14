"use client";

import { useState, FormEvent } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Project types
const projectTypes = [
  "NFT Project",
  "Crypto Wallet",
  "Trading Platform",
  "GameFi",
  "DeFi Protocol",
  "DAO Organization",
  "Other"
];

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Replace with actual form submission logic in production
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success response
      setSubmitStatus({
        success: true,
        message: "Your information has been successfully submitted. We will contact you soon!"
      });
      
      // Reset form
      setFormState({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: ""
      });
    } catch (error) {
      // Error handling
      setSubmitStatus({
        success: false,
        message: "Submission failed. Please try again later or contact us directly through other channels."
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };
  
  return (
    <section className="py-36 relative" id="contact">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 z-0"></div>
      
      <div className="container max-w-[670px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Whether you have a project idea or need technical consultation, feel free to contact us
          </p>
        </div>
          
        {/* Contact Form */}
        <div className="relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 bg-background/5 backdrop-blur-sm">
          <div className="relative flex flex-col overflow-hidden rounded-xl border-[0.75px] bg-background/80 p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-foreground text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-foreground text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-muted-foreground mb-1">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formState.projectType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-foreground text-sm"
                  >
                    <option value="" disabled>Select project type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-muted-foreground mb-1">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formState.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-foreground text-sm"
                  >
                    <option value="" disabled>Select budget range</option>
                    <option value="< $10k">Less than $10,000</option>
                    <option value="$10k-$50k">$10,000 - $50,000</option>
                    <option value="$50k-$100k">$50,000 - $100,000</option>
                    <option value="$100k+">More than $100,000</option>
                    <option value="TBD">TBD / To be discussed</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                  Project Description <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-foreground text-sm resize-none"
                  placeholder="Briefly describe your project or requirements..."
                ></textarea>
              </div>
              
              {submitStatus && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "p-4 rounded-md text-sm",
                    submitStatus.success 
                      ? "bg-green-500/10 border border-green-500/30 text-green-500" 
                      : "bg-red-500/10 border border-red-500/30 text-red-500"
                  )}
                >
                  {submitStatus.message}
                </motion.div>
              )}
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-3 px-4 rounded-md text-sm font-medium transition-all duration-300",
                    isSubmitting
                      ? "bg-muted text-muted-foreground cursor-not-allowed"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 