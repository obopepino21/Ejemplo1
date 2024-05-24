generar = () => {
  const filaPosicion = parseInt(document.getElementById("fila").value) - 1;
  const columnaPosicion = parseInt(document.getElementById("columna").value) - 1;
  const tablero = document.getElementById("tablero");
  
  tablero.innerHTML = "";

  for (let fila = 0; fila < 5; fila++) {
      const filaElemento = document.createElement("tr");
      for (let columna = 0; columna < 5; columna++) {
          const casilla = document.createElement("td");
          if ((fila + columna) % 2 === 0) {
              casilla.classList.add("casilla-blanca");
          } else {
              casilla.classList.add("casilla-negra");
          }
          
          if (fila === filaPosicion && columna === columnaPosicion) {
              const imagen = document.createElement("img");
              imagen.src = "reina.png";
              imagen.classList.add("EstiloImagen");
              casilla.appendChild(imagen);
          }
          if (fila === filaPosicion || columna === columnaPosicion || fila + columna === filaPosicion + columnaPosicion || fila - columna === filaPosicion - columnaPosicion){
            casilla.classList.add("posicion-valida");
          }
      
          filaElemento.appendChild(casilla);
      }
      tablero.appendChild(filaElemento);
  }
}
