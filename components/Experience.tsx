'use client';
import { useEffect, useState, useRef } from 'react';

const experienceData = [
  {
    title: "Software Development",
    description: "Full-cycle development from concept to deployment. We build scalable web and mobile applications tailored to your needs.",
    icon: (
      <svg className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
    tags: ["Web Apps", "Mobile", "APIs"],
    color: "bg-blue-50 text-blue-600",
    hoverColor: "group-hover:bg-blue-100",
    hoverBorder: "group-hover:border-blue-200",
    hoverShadow: "group-hover:shadow-blue-200/50"
  },
  {
    title: "DevOps Operations",
    description: "Streamline your deployment pipeline with advanced automation, containerization, and cloud infrastructure management.",
    icon: (
      <svg className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    ),
    tags: ["CI/CD", "Docker", "Kubernetes"],
    color: "bg-purple-50 text-purple-600",
    hoverColor: "group-hover:bg-purple-100",
    hoverBorder: "group-hover:border-purple-200",
    hoverShadow: "group-hover:shadow-purple-200/50"
  },
  {
    title: "Network Engineering",
    description: "Designing robust, secure, and high-performance network architectures for seamless enterprise connectivity.",
    icon: (
      <svg className="w-8 h-8 transition-transform duration-500 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
    ),
    tags: ["VoIP Setup", "Guest WiFi", "Security"],
    color: "bg-emerald-50 text-emerald-600",
    hoverColor: "group-hover:bg-emerald-100",
    hoverBorder: "group-hover:border-emerald-200",
    hoverShadow: "group-hover:shadow-emerald-200/50"
  },
  {
    title: "System Engineering",
    description: "Expert management of telephony systems and server environments to ensure maximum uptime and reliability.",
    icon: (
      <svg className="w-8 h-8 transition-all duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
    ),
    tags: ["Telephony", "Asterisk", "Linux"],
    color: "bg-pink-50 text-pink-600",
    hoverColor: "group-hover:bg-pink-100",
    hoverBorder: "group-hover:border-pink-200",
    hoverShadow: "group-hover:shadow-pink-200/50"
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive, user-centric interfaces that not only look stunning but also provide exceptional usability.",
    icon: (
      <svg className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    ),
    tags: ["Figma", "Prototyping", "Research"],
    color: "bg-orange-50 text-orange-600",
    hoverColor: "group-hover:bg-orange-100",
    hoverBorder: "group-hover:border-orange-200",
    hoverShadow: "group-hover:shadow-orange-200/50"
  },
  {
    title: "Support Engineering",
    description: "Dedicated technical resolution and SLA management to ensure your systems and clients are always supported.",
    icon: (
      <svg className="w-8 h-8 transition-transform duration-500 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    ),
    tags: ["Troubleshooting", "SLA", "Resolution"],
    color: "bg-cyan-50 text-cyan-600",
    hoverColor: "group-hover:bg-cyan-100",
    hoverBorder: "group-hover:border-cyan-200",
    hoverShadow: "group-hover:shadow-cyan-200/50"
  },
  {
    title: "Cloud Infrastructure",
    description: "Architecting scalable cloud environments on AWS and Azure for seamless growth and high availability.",
    icon: (
      <svg className="w-8 h-8 transition-transform duration-500 group-hover:translate-y-[-4px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
    ),
    tags: ["AWS", "Azure", "Scalability"],
    color: "bg-indigo-50 text-indigo-600",
    hoverColor: "group-hover:bg-indigo-100",
    hoverBorder: "group-hover:border-indigo-200",
    hoverShadow: "group-hover:shadow-indigo-200/50"
  },
  {
    title: "Database Architecture",
    description: "Designing high-performance data layers, optimizing queries, and ensuring data integrity across clusters.",
    icon: (
      <svg className="w-8 h-8 transition-all duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
    ),
    tags: ["SQL", "NoSQL", "Tuning"],
    color: "bg-rose-50 text-rose-600",
    hoverColor: "group-hover:bg-rose-100",
    hoverBorder: "group-hover:border-rose-200",
    hoverShadow: "group-hover:shadow-rose-200/50"
  },
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative w-full py-24 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 left-[15%] w-[350px] h-[350px] bg-purple-100/30 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite_2s]" />
      
      {/* Floating Particles */}
      <div className="absolute top-40 left-[20%] w-2 h-2 bg-orange-400/40 rounded-full animate-[floatParticle_8s_ease-in-out_infinite]" />
      <div className="absolute top-60 right-[25%] w-3 h-3 bg-blue-400/40 rounded-full animate-[floatParticle_10s_ease-in-out_infinite_1s]" />
      <div className="absolute bottom-40 left-[30%] w-2.5 h-2.5 bg-purple-400/40 rounded-full animate-[floatParticle_9s_ease-in-out_infinite_2s]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header with Staggered Animation */}
        <div className="text-center mb-16">
          <h2 
            className={`text-orange-500 font-bold tracking-widest text-sm mb-3 uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Service Spectrum
          </h2>
          <h3 
            className={`text-4xl md:text-5xl font-extrabold text-slate-900 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Areas of Experience
          </h3>
          <p 
            className={`mt-4 text-slate-500 max-w-2xl mx-auto text-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            We deliver comprehensive technology services across multiple domains, ensuring your business stays ahead.
          </p>
        </div>

        {/* Grid with Staggered Card Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experienceData.map((item, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-3xl p-6 border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer relative overflow-hidden ${item.hoverBorder} ${item.hoverShadow} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${0.4 + index * 0.1}s` 
              }}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 ${item.color.replace('text-', 'bg-').replace('-50', '-100')} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
              
              {/* Animated Border on Hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent animate-[shimmer_2s_linear_infinite]" style={{ color: item.color.split(' ')[1].replace('text-', '') }} />
              </div>

              {/* Icon with Enhanced Animation */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.color} ${item.hoverColor} transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg relative`}>
                {item.icon}
                {/* Ping Effect on Hover */}
                <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ backgroundColor: 'currentColor', opacity: 0.2 }} />
              </div>

              {/* Title with Color Change */}
              <h4 className={`text-xl font-bold text-slate-900 mb-3 transition-colors duration-300 ${item.color.split(' ')[0].replace('bg-', 'group-hover:text-')}`}>
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-slate-600 transition-colors duration-300">
                {item.description}
              </p>

              {/* Tags with Hover Animation */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className={`text-xs font-semibold bg-slate-50 text-slate-600 px-3 py-1 rounded-full border border-slate-200 transition-all duration-300 hover:scale-110 hover:${item.color} hover:border-transparent`}
                    style={{ 
                      transitionDelay: `${i * 0.05}s` 
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Corner Accent - Animated on Hover */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div className={`absolute top-0 right-0 w-full h-full ${item.color.split(' ')[0]} rounded-bl-[100%]`} />
              </div>

              {/* Bottom Shine Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom Call-to-Action */}
        {/* <div 
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1.2s' }}
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-bold text-sm hover:shadow-2xl hover:shadow-purple-300/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Explore All Services
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div> */}

      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          33% { 
            transform: translateY(-30px) translateX(20px);
            opacity: 0.4;
          }
          66% { 
            transform: translateY(-15px) translateX(-20px);
            opacity: 0.35;
          }
        }

        @keyframes floatParticle {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          25% { 
            transform: translate(20px, -30px) scale(1.2);
            opacity: 0.6;
          }
          50% { 
            transform: translate(-10px, -50px) scale(0.8);
            opacity: 0.3;
          }
          75% { 
            transform: translate(30px, -20px) scale(1.1);
            opacity: 0.5;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </section>
  );
}