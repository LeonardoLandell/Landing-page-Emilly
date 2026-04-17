import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobremim from "./components/Sobremim"; // nome igual ao arquivo
import Services from "./components/Services"; // nome igual ao arquivo
import Testimonials from "./components/Testimonials"; // nome igual ao arquivo
import Footer from "./components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobremim /> {/* id="sobre" dentro do componente */}
        <Services /> {/* id="servicos" dentro do componente */}
        <Testimonials /> {/* id="depoimentos" dentro do componente */}
        <Footer />
      </main>
    </>
  );
}
