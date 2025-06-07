import React from 'react';
import './footer.css'; // Optional: for styling

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© 2025 Club Artisti. All rights reserved.</p>

      <div className="footer-icons">
        <a href="https://www.linkedin.com/company/artisti-smit/posts/?feedView=all" target="_blank" rel="noreferrer">
          <img src="/assets/logo/linkedin.png" alt="LinkedIn" className="footer-icon" />
        </a>
        <a href="mailto:artistiartclubsmit@gmail.com">
          <img src="/assets/logo/mail.png" alt="Email" className="footer-icon" />
        </a>
        <a href="https://www.instagram.com/artistismit/" target="_blank" rel="noreferrer">
          <img src="/assets/logo/instagram.png" alt="Instagram" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
