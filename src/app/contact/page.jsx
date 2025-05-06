import "./contact.css";

export default function Contact() {
  return (
    <>
      <h1 className="title">Formulario de inscripción</h1>
      <p className="description">
        Aquí tienes un breve formulario para quienes deseen inscribirse en la
        misión y enviar su solicitud.
      </p>
      <form action="#" className="form">
        <section className="form-section">
          <label htmlFor="name" className="label">
            Nombre:
          </label>
          <input type="text" id="name" name="name" className="input" />
        </section>
        <section className="form-section">
          <label htmlFor="email" className="label">
            Correo electrónico:
          </label>
          <input type="email" id="email" name="email" className="input" />
        </section>
        <section className="form-section">
          <label htmlFor="message" className="label">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            className="input input-message"
          />
        </section>
        <button type="submit" className="button">
          Enviar
        </button>
      </form>
    </>
  );
}
