"use client";
import { motion } from "framer-motion";
import { FaSpa } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="navbar"
    >
      {/* Logo com ícone + texto */}
      <div className="logo">
        <FaSpa size={32} color="var(--burnt-rose)" />
        <span> Toque de Cura </span>
      </div>

      {/* Links desktop */}
      <ul className="nav-links">
        {["Sobre", "Serviços", "Depoimentos"].map((item, i) => (
          <motion.li key={i} whileHover={{ scale: 1.1 }}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </motion.li>
        ))}
      </ul>

      {/* Menu mobile */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
      {open && (
        <ul className="mobile-menu">
          {["Serviços", "Depoimentos", "Contato"].map((item, i) => (
            <li key={i}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </motion.nav>
  );
}
