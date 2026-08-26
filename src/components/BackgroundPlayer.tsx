'use client';
import { useState } from 'react';

export default function BackgroundPlayer() {
  const [activeTheme, setActiveTheme] = useState('water');
  
  return (
    <div className="absolute inset-0 z-0">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="object-cover w-full h-full opacity-80"
      >
        <source src={`/themes/${activeTheme}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
}
