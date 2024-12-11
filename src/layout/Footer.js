import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <p className="text-muted">
          © {new Date().getFullYear()} Booking.lk. All rights reserved.
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#" className="text-decoration-none text-muted">
              Privacy Policy
            </a>
          </li>
          <li className="list-inline-item mx-3">
            <a href="#" className="text-decoration-none text-muted">
              Terms of Service
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-decoration-none text-muted">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;