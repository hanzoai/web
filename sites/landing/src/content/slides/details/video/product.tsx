"use client";

import React, { useEffect, useRef } from 'react';
import { type LucideProps } from 'lucide-react';

const Products: React.FC<LucideProps> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollY = window.scrollY + window.innerHeight / 2;

        const progress = Math.min(
          Math.max((scrollY - rect.height) / rect.height, 0),
          1
        );
        const duration = videoRef.current.duration;
        if (!isNaN(duration)) {
          videoRef.current.currentTime = progress * duration;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: '200vh', position: 'relative' }}>
      <video
        ref={videoRef}
        width={582}
        muted
      >
        <source src='/assets/hanzo-site-animation/02_black.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Products;