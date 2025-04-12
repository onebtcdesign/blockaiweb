import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8 border-t border-white/10">
      {/* Background effect */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Logo & Introduction */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 flex justify-start pl-0">
              <Image 
                src="/blockai_logo.jpg" 
                alt="Blockai Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            
            <p className="text-gray-400 text-sm mb-6">
              A one-stop platform focused on the Crypto/Web3 industry, providing product design, full-stack development, and operational services to help blockchain projects succeed
            </p>
            
            <div className="flex space-x-4">
              {["twitter", "telegram", "github", "discord"].map((platform, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center border border-white/10 hover:border-neon-blue/50 text-gray-400 hover:text-neon-blue transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {platform === "twitter" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  )}
                  {platform === "telegram" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.417 15.181l-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"/>
                    </svg>
                  )}
                  {platform === "github" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {platform === "discord" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
          
          {/* Services Links */}
          <div>
            <h4 className="text-white font-medium text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                { label: "Crypto Project Design", href: "#" },
                { label: "Full-Stack Development", href: "#" },
                { label: "One-Stop Development", href: "#" },
                { label: "Project Collaboration", href: "#" },
                { label: "Technical Consulting", href: "#" }
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Case Studies Links */}
          <div>
            <h4 className="text-white font-medium text-lg mb-6">Case Studies</h4>
            <ul className="space-y-4">
              {[
                { label: "NFT Projects", href: "#" },
                { label: "DAPP Development", href: "#" },
                { label: "Wallet Applications", href: "#" },
                { label: "Trading Platforms", href: "#" },
                { label: "DeFi Protocols", href: "#" }
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-white font-medium text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter to receive the latest Web3 news and project updates
            </p>
            
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-3 py-2 bg-black/50 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-neon-blue text-white text-sm"
                />
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-neon-blue text-white rounded-r-md hover:bg-neon-blue/90 transition-colors duration-300 text-sm"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            <p className="text-gray-500 text-xs">
              We respect your privacy and will never send spam.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Blockai. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
              <Link 
                key={index}
                href="#" 
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 