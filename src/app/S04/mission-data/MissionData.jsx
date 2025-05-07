"use client";

import "./MissionData.css";
import { useState, useEffect } from "react";

function getRandomData() {
  return {
    temperature: (20 + Math.random() * 10).toFixed(2),
    pressure: (1000 + Math.random() * 50).toFixed(2),
  };
}

const MissionData = () => {
  const [data, setData] = useState(getRandomData());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(getRandomData());
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Datos de la Misión (Actualizados cada 5s)</h2>
      <p className="data">Temperatura: {data.temperature} °C</p>
      <p className="data">Presión: {data.pressure} hPa</p>
    </div>
  );
};

export default MissionData;
