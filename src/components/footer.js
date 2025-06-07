import React from 'react';
import './footer.css';
import { Linkedin, Mail, Instagram } from 'lucide-react'; // Lucide icons

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} Club Artisti. All rights reserved.</p>

      <div className="footer-icons">
        <a href="https://www.linkedin.com/company/artisti-smit/posts/?feedView=all" target="_blank" rel="noreferrer">
          <Linkedin className="footer-icon" />
        </a>
        <a href="mailto:artistiartclubsmit@gmail.com">
          <Mail className="footer-icon" />
        </a>
        <a href="https://www.instagram.com/artistismit/" target="_blank" rel="noreferrer">
          <Instagram className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
