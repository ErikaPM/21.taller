const tarea = document.querySelector("#tarea");
const enviar = document.querySelector("#enviar");
const lista = document.querySelector(".listaDeTareas");
const nombreDeUsuario = document.querySelector("#usuario");
const etiquetaUsuario = document.createElement("h2");
let nombreLocal = localStorage.getItem("Nombre");
let usuarioLocal = document.createTextNode(nombreLocal);
etiquetaUsuario.appendChild(usuarioLocal);
nombreDeUsuario.appendChild(etiquetaUsuario);

enviar.addEventListener("click", e => {
  e.preventDefault();

  if (tarea.value == "") {
    tarea.className = "error";
  } else {
    tarea.className = "correcto";
    const itemLista = document.createElement("p");
    let textoLista = document.createTextNode(tarea.value);
    itemLista.appendChild(textoLista);
    lista.appendChild(itemLista);
    tarea.value = "";
    itemLista.addEventListener("click", () => {
      itemLista.classList.toggle("tachar");
    });

    itemLista.addEventListener("dblclick", () => {
      lista.removeChild(itemLista);
    });
  }
});

const listas = document.querySelector("#listas");

const listaListas = document.querySelector(".listasDeListas");
listas.addEventListener("click", e => {
  e.preventDefault();

  const itemLista = document.createElement("p");
  let textoLista = document.createTextNode(prompt("Agrega nueva lista"));
  itemLista.appendChild(textoLista);
  listaListas.appendChild(itemLista);

  itemLista.addEventListener("click", () => {
    itemLista.classList.toggle("tachar");
  });

  itemLista.addEventListener("dblclick", () => {
    listaListas.removeChild(itemLista);
  });
});
