"use client";

import { useState, FormEvent } from "react";

// Contact information data
const contactInfo = [
  {
    id: "email",
    label: "Email",
    value: "contact@blockai.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: "telegram",
    label: "Telegram",
    value: "@blockaiofficial",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.417 15.181l-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z" />
      </svg>
    )
  },
  {
    id: "twitter",
    label: "Twitter/X",
    value: "@blockaiofficial",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    )
  }
];

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
    <section className="py-16 relative" id="contact">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-background/10 to-black/20 z-0"></div>
      
      <div className="relative z-10">
        <div className="container max-w-[670px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Whether you have a project idea or need technical consultation, feel free to contact us
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {contactInfo.map(info => (
                <div key={info.id} className="flex items-center">
                  <div className="mr-3 p-2 rounded-full bg-neon-blue/10 text-neon-blue">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">{info.label}</h4>
                    <p className="text-sm text-gray-300">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 font-mono text-neon-blue">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name <span className="text-neon-pink">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-transparent text-white text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address <span className="text-neon-pink">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-transparent text-white text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-1">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formState.projectType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-transparent text-white text-sm"
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
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formState.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-transparent text-white text-sm"
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Project Description <span className="text-neon-pink">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-transparent text-white text-sm resize-none"
                  placeholder="Briefly describe your project or requirements..."
                ></textarea>
              </div>
              
              {submitStatus && (
                <div className={`p-3 rounded-md text-sm ${
                  submitStatus.success ? "bg-green-900/30 border border-green-500/30 text-green-400" : "bg-red-900/30 border border-red-500/30 text-red-400"
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-700 text-gray-300 cursor-not-allowed"
                      : "bg-neon-blue text-white hover:bg-neon-blue/80"
                  }`}
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