const contenedor = document.querySelector("#contenedor");
const usuarioSaludo = document.querySelector("#usuarioSaludo");
const listasTareas = document.querySelector("#listasTareas");
const tareas = document.querySelector("#tareas");
const boton = document.querySelector("#boton2");
const tareasImpresas = document.querySelector("#tareasImpresas");
const misTareas = document.querySelector("#misTareas");
const boton2 = document.querySelector("#boton2");
const nuevasListas = document.querySelector("#nuevasListas");
const boton1 = document.querySelector("#boton");
const form = document.querySelector("#form");

const nombreUsuario = document.querySelector("#usuario");
const inicioUsuario = document.createElement("h4");

let nombreLS = localStorage.getItem("Nombre");
let usuarioLS = document.createTextNode(nombreLS);
inicioUsuario.appendChild(usuarioLS);
nombreUsuario.appendChild(inicioUsuario);

boton2.addEventListener("click", e => {
  e.preventDefault();
  if (tareas.value == "") {
    tareas.className = "error";
  } else {
    tareas.className = "correcto";
    const primeroLista = document.createElement("li");
    let textoLista = document.createTextNode(tareas.value);
    primeroLista.appendChild(textoLista);
    tareasImpresas.appendChild(primeroLista);
    tareas.value = "";
    primeroLista.addEventListener("click", () => {
      tareasImpresas.removeChild(primeroLista);
    });
  }
});
