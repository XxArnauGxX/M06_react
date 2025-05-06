import "./mission.css";

export default function Mission() {
  return (
    <>
      <h1 className="title">Información detallada de la misión</h1>
      <p className="description">
        Aquí se detalla diversa información sobre la misión, como sus objetivos,
        la duración y el equipo de personas que la compone.
      </p>
      <div className="main-content">
        <section className="section">
          <h2 className="section-title">Objetivos</h2>
          <p className="section-description">
            Hay diversos objetivos para esta misión, tanto para la ayuda a la
            evolución humana como para el avance en la investigación científica
            y de lo que nos rodea. Aquí se detallan los principales objetivos:
          </p>
          <ul className="section-list">
            <li className="section-list-element">
              Aprender más sobre los planetas del sistema solar
            </li>
            <li className="section-list-element">
              Mejorar la capacidad de la tecnología en viajes largos tanto de
              tiempo como de distancia
            </li>
            <li className="section-list-element">
              Construir una pequeña civilización en Marte
            </li>
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">Duración</h2>
          <p className="section-description">
            Esta misión, dada su gran envergadura, puede llegar a tardar muchos
            meses e incluso años. Tenemos previsto que la duración no supere los{" "}
            <strong style={{ color: "red" }}>2 años</strong>.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">Equipo</h2>
          <p className="section-description">
            El equipo para esta misión está compuesto por 5 personas: 3
            astronautas, un médico y nutricionista y un militar, que serán los
            siguientes:
          </p>
          <ul className="section-list">
            <li className="section-list-element">Marcos (Astronauta)</li>
            <li className="section-list-element">Laia (Astronauta)</li>
            <li className="section-list-element">John (Astronauta)</li>
            <li className="section-list-element">
              Jimmy (Médico y nutricionista)
            </li>
            <li className="section-list-element">Pablo (Militar)</li>
          </ul>
        </section>
      </div>
      <p className="description">
        Esta es toda la información disponible hasta ahora acerca de la misión a
        Marte, en un futuro habrá más.
      </p>
    </>
  );
}
