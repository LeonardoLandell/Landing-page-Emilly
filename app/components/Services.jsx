export default function Services() {
  return (
    <section id="servicos" className="servicos">
      <h2>Serviços</h2>
      <div className="cards">
        <div className="card">
          <img src="/images/icone-flor.png" alt="Massagem Relaxante" />
          <h3>Massagem Relaxante</h3>
          <p>
            Movimentos suaves e deslizantes para relaxanmento muscular geral.
            <br></br>
            reduzindo estresse e ansiedade.
          </p>
        </div>
        <div className="card">
          <img src="/images/icone-flor.png" alt="Massagem Qualificada" />
          <h3>Massagem Modeladora/Linfática</h3>
          <p>
            Massagem de movimentos leves ou firmes repetetitivos que reduzem a
            retenção de liquido,<br></br> inchaço e modelam o corpo.
          </p>
        </div>
        <div className="card">
          <img
            src="/images/icone-flor.png"
            alt="Massagem em cadeira especial e ágil"
          />
          <h3>Massagem Rápida</h3>
          <p>
            Terapia revigorante mais ágil, focada en costas, pescoço e ombros.
            <br></br>
            Promovendo alívio imediato.
          </p>
        </div>
        <div className="card">
          <img
            src="/images/icone-flor.png"
            alt="Massagem com técnica japnesa"
          />
          <h3>Shiatsu</h3>
          <p>
            {" "}
            Técnica japonesa que utiliza pressão com os dedos e palmas <br></br>
            em meridianos de energia para liberar tensões e dores físicas.
          </p>
        </div>
      </div>
    </section>
  );
}
