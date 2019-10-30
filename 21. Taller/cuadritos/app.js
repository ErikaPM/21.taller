const cajaContenedora = document.querySelector("#caja");
const botonCrear = document.querySelector("#crear");
const botonBorrar = document.querySelector("#borrar");

botonCrear.addEventListener("click", () => {
    const cajasHermanas = document.querySelectorAll(".caja");
    const cajaMenor = document.createElement("div");
    const numeroCaja = cajasHermanas.length + 1;
    const texto = document.createTextNode(numeroCaja);
    cajaMenor.className = "caja";
    cajaMenor.appendChild(texto);
    cajaContenedora.appendChild(cajaMenor);
})

botonBorrar.addEventListener("click", () => {
    const cajasBorrar = document.querySelectorAll(".caja");
    if (cajasBorrar.length != 0) {
        cajaContenedora.removeChild(cajasBorrar[cajasBorrar.length - 1]);
    }
})