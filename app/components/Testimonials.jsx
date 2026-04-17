"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState("");
  const [newName, setNewName] = useState("");

  const API_URL =
    "https://script.google.com/macros/s/AKfycbzCKah7mCK7wsDrO_1IzDI0__7Q8xy1m96WdJ0HTtkAnGdgxiakYzpdE7qy3i5CRNqJ/exec";

  // Carregar depoimentos
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTestimonials(data.slice(1)));
  }, []);

  // Enviar novo depoimento
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        nome: newName || "Anônimo",
        depoimento: newTestimonial,
      }),
    });
    setNewTestimonial("");
    setNewName("");

    // Atualiza lista
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTestimonials(data.slice(1)));
  };

  return (
    <section id="testimonials" className="testimonials">
      <h2>Depoimentos</h2>

      {testimonials.length === 0 ? (
        <p>Ainda não temos depoimentos. Seja o primeiro a deixar o seu!</p>
      ) : (
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          navigation
          pagination={{ clickable: true }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <p>
                <strong>{t[0] || "Anônimo"}:</strong> {t[1]} <br />
                <small>{new Date(t[2]).toLocaleDateString("pt-BR")}</small>
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <form onSubmit={handleSubmit} className="form-testimonial">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Seu nome"
          className="input-nome"
        />
        <textarea
          value={newTestimonial}
          onChange={(e) => setNewTestimonial(e.target.value)}
          placeholder="Compartilhe sua experiência..."
          rows="4"
          required
          className="input-depoimento"
        />
        <button type="submit">Enviar Depoimento</button>
      </form>
    </section>
  );
}
