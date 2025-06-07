import React, { useEffect, useRef, useState } from 'react';
import './joinus.css';

import boyPainting from '../assets/art/boy-painting.png';
import sticker1 from '../assets/art/sticker1.png';
import sticker2 from '../assets/art/sticker2.png';
import sticker3 from '../assets/art/sticker3.png';

const JoinUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      className={`joinus-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      {/* Stickers - different layout for mobile */}
      {isMobile ? (
        <div className="sticker-container">
          <img src={sticker1} alt="Art sticker" className="sticker mobile-sticker" />
          <img src={sticker2} alt="Art sticker" className="sticker mobile-sticker" />
          <img src={sticker3} alt="Art sticker" className="sticker mobile-sticker" />
        </div>
      ) : (
        <>
          <img src={sticker1} alt="Art sticker" className="sticker top-left" />
          <img src={sticker2} alt="Art sticker" className="sticker top-right" />
          <img src={sticker3} alt="Art sticker" className="sticker bottom-right" />
        </>
      )}

      {/* Boy painting image */}
      <img src={boyPainting} alt="Boy Painting" className="center-image" />

      {/* Join details - always visible on mobile */}
      <div className={`joinus-details ${isMobile ? 'mobile-joinus' : ''}`}>
        <h2 className="joinus-title">JOIN US</h2>
        <div className="joinus-info">
          <div className="info-item">
            <h3>ADDRESS</h3>
            <p>
              SIKKIM MANIPAL INSTITUTE OF TECHNOLOGY<br />
              MAJHITAR, SIKKIM, 737136
            </p>
          </div>
          <div className="info-item">
            <h3>WHATSAPP</h3>
            <a href="https://chat.whatsapp.com/your-group-link" target="_blank" rel="noopener noreferrer">
              Join WhatsApp Group
            </a>
          </div>
          <div className="info-item">
            <h3>EMAIL</h3>
            <a href="mailto:artistiartclubsmit@gmail.com">artistiartclubsmit@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;