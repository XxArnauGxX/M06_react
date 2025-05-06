import "./welcome-message.css";

export default function WelcomeMessage({ name }) {
  return (
    <>
      <p className="description">¡Bienvenido a la misión, {name}</p>
    </>
  );
}
