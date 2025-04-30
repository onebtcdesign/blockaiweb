"use client";

import { useState, FormEvent, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

// Budget options
const budgetOptions = [
  { value: "< $10k", label: "< $10K" },
  { value: "$10k-$50k", label: "$10-50K" },
  { value: "$50k-$100k", label: "$50-100K" },
  { value: "$100k+", label: "$100K+" },
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    email: "",
    budget: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleBudgetChange = (value: string) => {
    setFormState((prev) => ({
      ...prev,
      budget: value
    }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using EmailJS to send the form
      await emailjs.sendForm(
        'service_id', // Your EmailJS service ID
        'template_id', // Your EmailJS template ID
        formRef.current as HTMLFormElement,
        'user_id' // Your EmailJS user ID (replace with your actual user ID)
      );
      
      // Success response
      setSubmitStatus({
        success: true,
        message: "Message sent successfully! We'll get back to you soon."
      });
      
      // Reset form
      setFormState({
        email: "",
        budget: "",
        message: ""
      });
    } catch (error) {
      // Error handling
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again or contact us directly."
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
    <section className="py-36 module-background" id="contact">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-2 text-white">
            Contact Us
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help
          </p>
        </div>
          
        {/* Contact Form with Glass Effect */}
        <div className="relative rounded-xl overflow-hidden max-w-[670px] mx-auto">
          <div className="relative bg-[#080808] p-8 rounded-xl border border-white/10">
            {/* Toast notification */}
            {submitStatus && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={cn(
                  "absolute top-0 left-0 right-0 p-4 mx-4 mt-2 rounded-lg text-sm font-medium shadow-lg z-50 transform transition-all duration-300",
                  submitStatus.success 
                    ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400" 
                    : "bg-red-500/20 border border-red-500/30 text-red-400"
                )}
              >
                {submitStatus.message}
              </motion.div>
            )}
            
            <h3 className="text-xl font-semibold mb-6 text-white">Send Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-600 text-white text-sm transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Budget Range
                </label>
                <div className="flex flex-wrap gap-3 justify-between">
                  {budgetOptions.map((option) => (
                    <div
                      key={option.value}
                      onClick={() => handleBudgetChange(option.value)}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm cursor-pointer transition-all duration-300 flex-1 text-center min-w-[80px]",
                        formState.budget === option.value
                          ? "bg-[#121212] border border-gray-600 text-white"
                          : "bg-[#121212] border border-gray-700 text-gray-400 hover:border-gray-600"
                      )}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
                <input type="hidden" name="budget" value={formState.budget} />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-600 text-white text-sm resize-none transition-all duration-300"
                  placeholder="Describe your project or requirements..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 bg-[#121212] border border-gray-700 hover:border-gray-600"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : "Send"}
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