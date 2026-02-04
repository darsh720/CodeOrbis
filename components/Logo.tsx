'use client';
import Image from 'next/image';

export default function Logo({ className = "", textClassName = "" }: { className?: string; textClassName?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      
      {/* THE LOGO IMAGE */}
      {/* Since logo.png is in the public folder, we reference it as "/logo.png" */}
      <Image 
        src="/new.png" 
        alt="CodeOrbis Logo" 
        width={100} 
        height={100} 
        className="shrink-0 object-contain"
        priority // Loads immediately since it is in the navbar
      />

      {/* THE TEXT */}
      {/* <div className={`flex flex-col leading-none ${textClassName}`}>
        <span className="font-bold text-[22px] text-slate-900 tracking-tight font-sans">
          CodeOrbis
        </span>
      </div> */}
    </div>
  );
}