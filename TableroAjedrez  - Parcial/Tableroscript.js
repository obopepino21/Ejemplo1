generar = () => {
  const tablero = document.getElementById("tablero");

  for (let fila = 0; fila < 5; fila++) {
    const filaElemento = document.createElement("tr");
    for (let columna = 0; columna < 5; columna++) {
      const casilla = document.createElement("td");
      filaElemento.appendChild(casilla);
      if ((fila + columna) % 2 === 0) {
        casilla.classList.add("casilla-blanca");
      } else {
        casilla.classList.add("casilla-negra");
      }
      // Creación de elemento para generar imagen
      const Cimagen = document.createElement("img");
      if (fila === 1 || fila === 3) {
        Cimagen.src = "Peon.png";
      }
      Cimagen.classList.add("EstiloImagen");
      casilla.appendChild(Cimagen);
    }
    tablero.appendChild(filaElemento);
  }
};
