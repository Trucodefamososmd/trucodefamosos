import React, { useState } from "react";
import ReactDOM from "react-dom";

// Componente principal del juego
function App() {
  const [jugadorCartaElegida, setJugadorCartaElegida] = useState(null);
  const [maquinaCartaElegida, setMaquinaCartaElegida] = useState(null);
  const [jugadorPuntos, setJugadorPuntos] = useState(0);
  const [maquinaPuntos, setMaquinaPuntos] = useState(0);

  // Cartas disponibles para el juego
  const cartasDisponibles = ["carta1", "carta2", "carta3"]; // Cambia por las cartas reales

  // Función para la máquina eligiendo una carta al azar
  const maquinaEligeCarta = () => {
    return cartasDisponibles[Math.floor(Math.random() * cartasDisponibles.length)];
  };

  // Función para manejar la jugada contra la máquina
  const handleJugarContraMaquina = () => {
    // Paso 1: Mostrar las 3 cartas disponibles
    console.log("Cartas disponibles:", cartasDisponibles);

    // Paso 2: El jugador elige una carta
    setJugadorCartaElegida(cartasDisponibles[0]); // Aquí puedes cambiar para que el jugador elija

    // Paso 3: La máquina elige una carta al azar
    const cartaMaquina = maquinaEligeCarta();
    setMaquinaCartaElegida(cartaMaquina);

    // Paso 4: Mostrar ambas cartas y permitir que el jugador seleccione qué equipo suma
  };

  // Función para sumar puntos
  const sumarPuntos = (equipo) => {
    if (equipo === "jugador") {
      setJugadorPuntos(jugadorPuntos + 1);
    } else if (equipo === "maquina") {
      setMaquinaPuntos(maquinaPuntos + 1);
    }
  };

  return (
    <div>
      <h1>Truco de Famosos</h1>

      {/* Mostrar las cartas elegidas */}
      <div>
        <h3>Jugador:</h3>
        <p>{jugadorCartaElegida}</p>
      </div>

      <div>
        <h3>Máquina:</h3>
        <p>{maquinaCartaElegida}</p>
      </div>

      {/* Botón para jugar contra la máquina */}
      <button onClick={handleJugarContraMaquina}>Jugar contra la Máquina</button>

      {/* Opciones para sumar puntos */}
      {jugadorCartaElegida && maquinaCartaElegida && (
        <div>
          <button onClick={() => sumarPuntos("jugador")}>Suma Punto Jugador</button>
          <button onClick={() => sumarPuntos("maquina")}>Suma Punto Máquina</button>
        </div>
      )}

      {/* Mostrar los puntajes */}
      <div>
        <h2>Puntajes:</h2>
        <p>Jugador: {jugadorPuntos}</p>
        <p>Máquina: {maquinaPuntos}</p>
      </div>
    </div>
  );
}

// Renderizar el componente de React
ReactDOM.render(<App />, document.getElementById("app"));
