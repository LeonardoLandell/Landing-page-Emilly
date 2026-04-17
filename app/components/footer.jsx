"use client";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo"></div>

        {/* Links com ícones */}
        <div className="footer-links">
          <a
            href="https://wa.me/5511988836275" // substitua pelo seu número com DDI/DDD
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaWhatsapp size={28} /> WhatsApp
          </a>
          <a
            href="https://instagram.com/toquedecuraea" // substitua pelo seu @
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaInstagram size={28} /> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
