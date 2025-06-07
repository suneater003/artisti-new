import React, { useEffect, useRef, useState } from 'react';
import './about.css';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px' 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      className={`about-section ${isVisible ? 'visible' : 'hidden'}`}
      ref={sectionRef}
    >
      <div className="about-content">
        <h1 className="title">artisti</h1>
        <h2 className="subtitle">The Biggest Art Club of SMIT</h2>
        <p className="description">
          Artisti is the largest and most vibrant art club at SMIT, uniting passionate creators from all artistic backgrounds. Through <span className="highlight">workshops, exhibitions, and collaborative projects</span>, we inspire creativity and celebrate the artistic spirit across campus.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;