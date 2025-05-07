"use client";

// import "MessageSubscription.css";
import { useState, useEffect } from "react";

const fetchValidationMessage = () =>
  new Promise((resolve) => setTimeout(() => resolve("ok"), 100));

export default function MessageSubscription() {
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(true);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (!subscribed) {
      if (intervalId) {
        clearInterval(intervalId);
      }
      setIntervalId(null);
      return;
    }

    const validate = async () => {
      const msg = await fetchValidationMessage();
      setMessage(msg);
    };

    validate();

    const id = setInterval(validate, 3000);
    setIntervalId(id);
    return () => {
      clearInterval(id);
    };
  }, [subscribed]);

  const handleCancel = () => setSubscribed(false);
  const handleRestart = () => setSubscribed(true);

  return (
    <div className="container">
      <h2>Subscripción de Mensaje</h2>
      <p>
        Estado:{" "}
        <b style={{ color: subscribed ? "green" : "red" }}>
          {subscribed ? "Activa" : "Cancelada"}
        </b>
      </p>
      <p>Mensaje: {message}</p>
      <button onClick={handleCancel} disabled={!subscribed}>
        Cancelar subscripción
      </button>
      <button onClick={handleRestart} disabled={subscribed}>
        Reiniciar subscripción
      </button>
    </div>
  );
}
