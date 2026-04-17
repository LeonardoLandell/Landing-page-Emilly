"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Alivio para o seu corpo <br></br>
        Equilíbrio para sua mente.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Um momento de cuidado, presença e reconexão através do toque
        terapêutico.
      </motion.p>

      <motion.a
        href="https://wa.me/5511988836275"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cta-button"
      >
        Agendar agora o meu momento
      </motion.a>
    </section>
  );
}
