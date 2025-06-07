import React, { useEffect, useRef, useState } from 'react';
import './services.css';

import membershipIcon from '../assets/logo/membership.png';
import workshopIcon from '../assets/logo/workshop.png';
import eventsIcon from '../assets/logo/events.png';
import critiqueIcon from '../assets/logo/critique.png';
import exhibitionsIcon from '../assets/logo/exhibitions.png';
import consultationIcon from '../assets/logo/consultation.png';

const services = [
  {
    title: 'Club Membership',
    image: membershipIcon,
    description: 'Our Art Club Membership gives you access to exclusive art content, such as tutorials, artist interviews, and behind-the-scenes content.',
  },
  {
    title: 'Art Workshops',
    image: workshopIcon,
    description: 'We offer a variety of art workshops for all skill levels. Topics include drawing, painting, sculpture, printmaking, and more.',
  },
  {
    title: 'Art Events',
    image: eventsIcon,
    description: 'We organize art fairs, markets, and auctions to give artists the chance to sell their work and enthusiasts to discover new styles.',
  },
  {
    title: 'Art Critique Sessions',
    image: critiqueIcon,
    description: 'A constructive environment for artists to receive feedback and improve techniques through thoughtful critiques.',
  },
  {
    title: 'Art Exhibitions',
    image: exhibitionsIcon,
    description: 'We host exhibitions showcasing the work of local and emerging artists, providing a public platform for discovery.',
  },
  {
    title: 'Consultations',
    image: consultationIcon,
    description: 'We provide expert advice tailored to your style, space, and budget for individuals or businesses interested in art.',
  },
];

const ServiceSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
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
      ref={sectionRef}
      className={`services-section ${isVisible ? 'visible' : 'hidden'}`}
    >
      <h2 className="services-title">What We Offer?</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-icon" />
            <h3 className="service-name">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
