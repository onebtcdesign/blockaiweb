"use client";

import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Young",
    role: "Founder / CEO",
    bio: "Blockchain industry veteran with 10 years of technology and product experience, having served as a technical advisor for several well-known Web3 projects",
    skills: ["Product Strategy", "Web3 Vision", "Business Development"],
    image: "/team/young.jpg",
    socials: {
      twitter: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "Jesn",
    role: "Technical Director / CTO",
    bio: "Full-stack engineer, proficient in frontend and blockchain development, has provided technical support for multiple DeFi and NFT projects",
    skills: ["Blockchain Development", "Smart Contracts", "Frontend Architecture"],
    image: "/team/jesn.jpg",
    socials: {
      twitter: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    id: 3,
    name: "Power",
    role: "Design Director / CDO",
    bio: "Senior UI/UX designer, focusing on Web3 and blockchain product design, with extensive experience in crypto project interface design",
    skills: ["UI/UX Design", "Brand Design", "User Experience"],
    image: "/team/power.jpg",
    socials: {
      twitter: "#",
      github: "#",
      dribbble: "#"
    }
  },
  {
    id: 4,
    name: "Tomey",
    role: "Operations Director / COO",
    bio: "Marketing and community operations expert with years of crypto community management experience, specializing in project promotion and user growth",
    skills: ["Community Operations", "Market Promotion", "Strategic Partnerships"],
    image: "/team/tomey.jpg",
    socials: {
      twitter: "#",
      telegram: "#",
      medium: "#"
    }
  }
];

const Team = () => {
  return (
    <section className="py-20 relative" id="team">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-white">Core</span>
            <span className="text-neon-blue"> Team</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We consist of a group of professionals passionate about blockchain and Web3, with rich industry experience and technical backgrounds
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group relative"
            >
              {/* Member avatar and glow effect */}
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/40 via-neon-blue/30 to-neon-pink/40 opacity-70 z-10"></div>
                
                {/* Temporary placeholder, replace with actual images in production */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <span className="text-7xl font-bold text-white/20">{member.name.charAt(0)}</span>
                </div>
                
                {/* Replace placeholder with image when loaded */}
                {/* <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                /> */}
              </div>
              
              {/* Member information */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 font-mono">{member.name}</h3>
                <p className="text-neon-blue text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                
                {/* Skill tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-black/50 text-neon-pink border border-neon-purple/30 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Social media links */}
                <div className="flex space-x-3 items-center">
                  {Object.entries(member.socials).map(([platform, link], index) => (
                    <a 
                      key={index} 
                      href={link} 
                      className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center border border-white/10 hover:border-neon-blue/50">
                        {platform === "twitter" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721
                             13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                          </svg>
                        )}
                        {platform === "github" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        )}
                        {platform === "linkedin" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                          </svg>
                        )}
                        {platform === "dribbble" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.95.67 1.424-4.38 1.328-7.468 4.052-9.214 8.16-1.953-1.651-3.222-4.082-3.419-6.75zm4.253 7.803c1.522-3.877 4.282-6.395 8.372-7.528 1.092 2.84 2 5.771 2.742 8.793-.978.399-2.044.627-3.164.627-2.922 0-5.522-1.199-7.395-3.122-2.7.333 0 0 0 0-5.54-.555-.001 0-.001 0h-.554zm11.678 2.166c-.709-2.834-1.573-5.603-2.599-8.277 1.913-.281 3.936-.196 6.06.256-.519 3.424-1.718 6.099-3.461 8.021z"/>
                          </svg>
                        )}
                        {platform === "telegram" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9.417 15.181l-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"/>
                          </svg>
                        )}
                        {platform === "medium" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/>
                          </svg>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-neon-blue/50 group-hover:glow transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            We are not just a team, but innovators and leaders in Web3. Join us to explore the unlimited possibilities of blockchain.
          </p>
          <a href="#contact" className="px-8 py-3 bg-transparent hover:bg-neon-blue/10 text-neon-blue border border-neon-blue rounded-md font-medium transition-all duration-300 inline-flex items-center">
            Join Us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
      
      <style jsx>{`
        .glow {
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Team; 