const cartas = [
    // Actores y Actrices
    { nombre: "Ricardo Darín", valor: 9, categoria: "Actores" },
    { nombre: "Adrián Suar", valor: 7, categoria: "Actores" },
    { nombre: "Luisana Lopilato", valor: 7, categoria: "Actores" },
    { nombre: "Guillermo Francella", valor: 9, categoria: "Actores" },
    { nombre: "Florencia Peña", valor: 7, categoria: "Actores" },
    { nombre: "Celeste Cid", valor: 5, categoria: "Actores" },
  
    // Cantantes
    { nombre: "Fito Páez", valor: 9, categoria: "Cantantes" },
    { nombre: "Charly García", valor: 9, categoria: "Cantantes" },
    { nombre: "Abel Pintos", valor: 7, categoria: "Cantantes" },
    { nombre: "Tini", valor: 9, categoria: "Cantantes" },
    { nombre: "Lali", valor: 9, categoria: "Cantantes" },
    { nombre: "Emilia Mernes", valor: 8, categoria: "Cantantes" },
  
    // Deportistas
    { nombre: "Leo Messi", valor: 10, categoria: "Deportistas" },
    { nombre: "Franco Colapinto", valor: 7, categoria: "Deportistas" },
    { nombre: "Manu Ginóbili", valor: 8, categoria: "Deportistas" },
    { nombre: "Peque Pareto", valor: 6, categoria: "Deportistas" },
    { nombre: "Gabriela Sabatini", valor: 8, categoria: "Deportistas" },
    { nombre: "Ángel Di María", valor: 8, categoria: "Deportistas" },
  
    // Conductores de TV
    { nombre: "Susana Giménez", valor: 9, categoria: "Conductores" },
    { nombre: "Mirtha Legrand", valor: 9, categoria: "Conductores" },
    { nombre: "Marcelo Tinelli", valor: 8, categoria: "Conductores" },
    { nombre: "Marley", valor: 6, categoria: "Conductores" },
    { nombre: "Guido Kaczka", valor: 6, categoria: "Conductores" },
  
    // Políticos
    { nombre: "Perón", valor: 9, categoria: "Políticos" },
    { nombre: "Cristina Kirchner", valor: 8, categoria: "Políticos" },
    { nombre: "Mauricio Macri", valor: 7, categoria: "Políticos" },
    { nombre: "Milei", valor: 9, categoria: "Políticos" },
    { nombre: "Eva Perón", valor: 8, categoria: "Políticos" },
    { nombre: "Patricia Bullrich", valor: 5, categoria: "Políticos" },
  
    // Streaming
    { nombre: "Ochiatto", valor: 7, categoria: "Streaming" },
    { nombre: "Granados", valor: 7, categoria: "Streaming" },
    { nombre: "Nati J", valor: 6, categoria: "Streaming" },
    { nombre: "Leuco", valor: 6, categoria: "Streaming" },
    { nombre: "Momi", valor: 6, categoria: "Streaming" },
    { nombre: "Yoyi", valor: 6, categoria: "Streaming" },
    { nombre: "Mica", valor: 6, categoria: "Streaming" },
    { nombre: "Trinche", valor: 6, categoria: "Streaming" },
  
    // WandaGate
    { nombre: "Wanda Nara", valor: 8, categoria: "WandaGate" },
    { nombre: "Mauro Icardi", valor: 7, categoria: "WandaGate" },
    { nombre: "L-Gante", valor: 7, categoria: "WandaGate" },
    { nombre: "Yanina Latorre", valor: 7, categoria: "WandaGate" },
    { nombre: "La China", valor: 8, categoria: "WandaGate" },
    { nombre: "Pampita", valor: 8, categoria: "WandaGate" },
  
    // Gran Hermano
    { nombre: "Juli Poggio", valor: 6, categoria: "Gran Hermano" },
    { nombre: "Santiago Del Moro", valor: 7, categoria: "Gran Hermano" },
    { nombre: "Furia", valor: 6, categoria: "Gran Hermano" },
    { nombre: "Laura Ubfal", valor: 5, categoria: "Gran Hermano" },
    { nombre: "Gastón Trezeguet", valor: 4, categoria: "Gran Hermano" },
    { nombre: "Sol Pérez", valor: 6, categoria: "Gran Hermano" },
  
    // Fallecidos
    { nombre: "Maradona", valor: 10, categoria: "Fallecidos" },
    { nombre: "Lanata", valor: 8, categoria: "Fallecidos" },
    { nombre: "Silvina Luna", valor: 6, categoria: "Fallecidos" },
    { nombre: "Sofovich", valor: 7, categoria: "Fallecidos" },
    { nombre: "Natacha Jaitt", valor: 6, categoria: "Fallecidos" },
    { nombre: "Gilda", valor: 7, categoria: "Fallecidos" },
  
    // Influencers
    { nombre: "Maratea", valor: 6, categoria: "Influencers" },
    { nombre: "Stefi Roitman", valor: 5, categoria: "Influencers" },
    { nombre: "Martín Cirio", valor: 6, categoria: "Influencers" },
    { nombre: "Julián Serrano", valor: 4, categoria: "Influencers" },
    { nombre: "Sofi Morandi", valor: 5, categoria: "Influencers" },
    { nombre: "Sofi Gonet", valor: 5, categoria: "Influencers" },
  
    // Internacionales
    { nombre: "Ronaldo", valor: 9, categoria: "Internacionales" },
    { nombre: "Donald Trump", valor: 9, categoria: "Internacionales" },
    { nombre: "Papá Francisco", valor: 10, categoria: "Internacionales" },
    { nombre: "Shakira", valor: 8, categoria: "Internacionales" },
    { nombre: "Golda Meir", valor: 6, categoria: "Internacionales" },
    { nombre: "Frida Khalo", valor: 6, categoria: "Internacionales" },
  
    // Polémicos
    { nombre: "Carmen Barbieri", valor: 6, categoria: "Polémicos" },
    { nombre: "Charlotte", valor: 6, categoria: "Polémicos" },
    { nombre: "La Bomba Tucumana", valor: 4, categoria: "Polémicos" },
    { nombre: "Chano", valor: 5, categoria: "Polémicos" },
    { nombre: "Ricardo Fort", valor: 8, categoria: "Polémicos" },
    { nombre: "Chiqui Tapia", valor: 7, categoria: "Polémicos" },
  ];
  // Jugador y máquina
const jugador = { cartas: [], puntos: 0 };
const maquina = { cartas: [], puntos: 0 };

// Función para repartir cartas
function repartirCartas() {
  jugador.cartas = [
    cartas[Math.floor(Math.random() * cartas.length)],
    cartas[Math.floor(Math.random() * cartas.length)],
    cartas[Math.floor(Math.random() * cartas.length)],
  ];
  maquina.cartas = [
    cartas[Math.floor(Math.random() * cartas.length)],
    cartas[Math.floor(Math.random() * cartas.length)],
    cartas[Math.floor(Math.random() * cartas.length)],
  ];
  mostrarCartas();
}

// Mostrar cartas en la pantalla
function mostrarCartas() {
  const jugadorDiv = document.getElementById("cartas-jugador");
  const maquinaDiv = document.getElementById("cartas-maquina");
  jugadorDiv.innerHTML = jugador.cartas.map(
    (carta) => `<div>${carta.nombre} (${carta.categoria})</div>`
  ).join("");
  maquinaDiv.innerHTML = "(Ocultas)";
}

// Verificar cartas de la misma categoría
function verificarCartasMismaCategoria(cartas) {
  const conteo = {};
  cartas.forEach((carta) => {
    conteo[carta.categoria] = (conteo[carta.categoria] || 0) + 1;
  });
  return Object.entries(conteo).find(([categoria, cantidad]) => cantidad >= 2);
}

// Lógica para pedir envido
function pedirEnvido(autor) {
  const jugadorEnvido = verificarCartasMismaCategoria(jugador.cartas);
  const maquinaEnvido = verificarCartasMismaCategoria(maquina.cartas);

  if (autor === "jugador") {
    if (jugadorEnvido) {
      if (maquinaEnvido) {
        resolverEnvido(jugadorEnvido, maquinaEnvido);
      } else {
        jugador.puntos += 1;
        alert("La máquina rechazó el envido. ¡El jugador suma 1 punto!");
        actualizarPuntos();
      }
    } else {
      alert("El jugador no tiene cartas suficientes para pedir envido.");
    }
  } else if (autor === "maquina") {
    if (maquinaEnvido) {
      if (jugadorEnvido) {
        resolverEnvido(jugadorEnvido, maquinaEnvido);
      } else {
        maquina.puntos += 1;
        alert("El jugador rechazó el envido. ¡La máquina suma 1 punto!");
        actualizarPuntos();
      }
    }
  }
}

// Resolver envido y determinar ganador
function resolverEnvido(jugadorEnvido, maquinaEnvido) {
  const puntosJugador = jugador.cartas
    .filter((carta) => carta.categoria === jugadorEnvido[0])
    .reduce((acc, carta) => acc + carta.valor, 0);
  const puntosMaquina = maquina.cartas
    .filter((carta) => carta.categoria === maquinaEnvido[0])
    .reduce((acc, carta) => acc + carta.valor, 0);

  if (puntosJugador > puntosMaquina) {
    jugador.puntos += 2;
    alert("¡El jugador ganó el envido!");
  } else {
    maquina.puntos += 2;
    alert("¡La máquina ganó el envido!");
  }
  actualizarPuntos();
}

// Actualizar los puntos en pantalla
function actualizarPuntos() {
  document.getElementById("puntos-jugador").innerText = jugador.puntos;
  document.getElementById("puntos-maquina").innerText = maquina.puntos;
}

// Máquina decide si pide envido
function maquinaPedirEnvido() {
  if (Math.random() > 0.5) {
    pedirEnvido("maquina");
  }
}

// Inicializar el juego
function iniciarJuego() {
  repartirCartas();
  actualizarPuntos();
}

// Eventos para los botones
document.getElementById("btn-envido").onclick = () => pedirEnvido("jugador");
document.getElementById("btn-iniciar").onclick = iniciarJuego;