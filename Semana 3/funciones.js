generar = () => {
    const numFilas = parseInt(document.getElementById("fila").value);
    const numColumnas = parseInt(document.getElementById("columna").value);
    const tablero = document.getElementById("tablero");
    tablero.innerHTML = '';

    const sucesion = [];
    sucesion.push(0);
    for (let i = 1; i <= numFilas * numColumnas; i++) {
        sucesion.push(Math.floor(i / 2));
    }

    let indiceSucesion = 0; 


    for (let fila = 0; fila < numFilas; fila++) {
        const filaElemento = document.createElement("tr");
        for (let columna = 0; columna < numColumnas; columna++) {
            const casilla = document.createElement("td");
            casilla.textContent = sucesion[indiceSucesion++]; 
            casilla.classList.add("Miclase");
            filaElemento.appendChild(casilla);
        }
        tablero.appendChild(filaElemento);
    }
};

