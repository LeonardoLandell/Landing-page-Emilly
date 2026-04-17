"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SobreMim() {
  return (
    <section id="sobre" className="sobre">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Sobre Mim
      </motion.h2>

      <div className="sobre-content">
        {/* Foto da profissional */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="sobre-foto"
        >
          <Image
            src="/images/Emilly.jpeg" /* coloque sua foto em public/emilly.jpg */
            alt="Foto da profissional Emilly"
            width={300}
            height={400}
            className="foto"
          />
        </motion.div>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="sobre-texto"
        >
          Prazer, sou Emilly Andrade! Aos 28 anos, encontrei na massoterapia não
          apenas uma profissão, mas a minha verdadeira missão: cuidar de
          pessoas.<br></br> Atualmente, estou me aperfeiçoando pelo Senac,
          mergulhando fundo nas técnicas que promovem saúde, alívio e
          equilíbrio.<br></br> No Toque de Cura E&A, acredito que a massagem vai
          muito além da estética ou do relaxamento momentâneo; é uma ferramenta
          de saúde vital para o corpo e para a mente.<br></br> Minha abordagem
          une o conhecimento técnico à sensibilidade de entender o que cada
          cliente precisa. Fora do consultório, sou entusiasta da boa culinária
          — cozinhar é minha terapia pessoal e a forma como nutro quem amo.
          <br></br> Essa mesma dedicação e carinho que coloco nos meus pratos,
          levo para a maca: cada atendimento é preparado para ser um momento
          único de renovação.<br></br> Vamos transformar sua rotina através do
          toque?
        </motion.p>
      </div>

      <motion.a
        href="#contato"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cta-button"
      >
        Fale comigo
      </motion.a>
    </section>
  );
}
