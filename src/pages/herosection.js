import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import heroImage from '../assets/hero1.jpg';

const HeroSection = () => {
    const imageRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const blackRefs = {
      STATE: useRef(null),
      THE: useRef(null),
      OF: useRef(null),
      ART: useRef(null)
    };
  
    const [visibleElements, setVisibleElements] = useState({
      STATE: true,
      THE: true,
      OF: true,
      ART: true,
    });
  
    const lastScrollY = useRef(window.scrollY);
  
    const updateClipPaths = () => {
      const imageEl = imageRef.current;
      if (!imageEl) return;
      const imageRect = imageEl.getBoundingClientRect();
  
      Object.entries(blackRefs).forEach(([key, ref]) => {
        const el = ref.current;
        if (!el) return;
        const textRect = el.getBoundingClientRect();
  
        const leftInset = Math.max(0, imageRect.left - textRect.left);
        const rightInset = Math.max(0, textRect.right - imageRect.right);
  
        el.style.clipPath = `inset(0px ${rightInset}px 0px ${leftInset}px)`;
      });
    };
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        updateClipPaths();
      };
      
      updateClipPaths();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
  
        if (currentScrollY > lastScrollY.current) {
          fadeElements(false);
        } else {
          fadeElements(true);
        }
        lastScrollY.current = currentScrollY;
      };
  
      let fadeTimeouts = [];
  
      const fadeElements = (fadeIn) => {
        const keys = ['STATE', 'THE', 'OF', 'ART'];
        fadeTimeouts.forEach((t) => clearTimeout(t));
        fadeTimeouts = [];
  
        keys.forEach((key, idx) => {
          const timeout = setTimeout(() => {
            setVisibleElements((prev) => ({
              ...prev,
              [key]: fadeIn,
            }));
          }, idx * 150);
          fadeTimeouts.push(timeout);
        });
      };
  
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        fadeTimeouts.forEach((t) => clearTimeout(t));
      };
    }, []);
  
    const bgFadeClass = visibleElements.STATE ? 'fade visible' : 'fade hidden';
    const getFadeClass = (isVisible) => isVisible ? 'fade visible' : 'fade hidden';
  
    return (
      <div className="hero-section">
        <div
          className={`hero-image ${bgFadeClass}`}
          ref={imageRef}
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
  
        <div className="text-container">
 
          <div className={`hero-text text-state text-white ${getFadeClass(visibleElements.STATE)}`}>
            STATE
          </div>
          <div className={`hero-text text-state text-black ${getFadeClass(visibleElements.STATE)}`} ref={blackRefs.STATE}>
            STATE
          </div>
  

          <div className={`hero-text text-the text-white ${getFadeClass(visibleElements.THE)}`}>
            THE
          </div>
          <div className={`hero-text text-the text-black red-tint ${getFadeClass(visibleElements.THE)}`} ref={blackRefs.THE}>
            THE
          </div>

          <div className={`hero-text text-of text-white ${getFadeClass(visibleElements.OF)}`}>
            OF
          </div>
          <div className={`hero-text text-of text-black ${getFadeClass(visibleElements.OF)}`} ref={blackRefs.OF}>
            OF
          </div>
  

          <div className={`hero-text text-art text-white ${getFadeClass(visibleElements.ART)}`}>
            ART
          </div>
          <div className={`hero-text text-art text-black ${getFadeClass(visibleElements.ART)}`} ref={blackRefs.ART}>
            ART
          </div>
        </div>
      </div>
    );
};

export default HeroSection;