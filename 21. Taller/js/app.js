/// function validar (){
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const correo = document.querySelector("#correo");
const celular = document.querySelector("#celular");
const contrasena = document.querySelector("#contrasena");
const form = document.querySelector("#form");
const errores = document.querySelector("#errores");
// const expresion = /\w+@+\w+\.+[a-z]/;

form.addEventListener("click", e => {
  let mensajes = [];
  if (e.target.id === "boton") {
    if (nombre.value === "" || nombre.value === null) {
      mensajes.push("Diligenciar campo nombre");
    }
    if (apellido.value === "" || apellido.value === null) {
      mensajes.push("Diligenciar campo apellido");
    }
    if (correo.value === "" || correo.value === null) {
      mensajes.push("Diligenciar campo correo");
      // }
      //   if(!expresion.test(correo)){
      //   mensajes.push("Correo no es válido");
    }
    if (celular.value === "" || celular.value === null) {
      mensajes.push("Diligenciar campo celular");
    }
    if (contrasena.value === "" || contrasena.value === null) {
      mensajes.push("Diligenciar campo contrasena");
    }
    if (parseInt(celular.value) != celular.value) {
      mensajes.push("Sólo puedes usar números");
    }
    if (!contrasena.value > 6 || contrasena.value < 10) {
      mensajes.push("Contraseña debe ser mayor de 6 caracteres y menor de 10");
    }
    if (mensajes.length != 0) {
      errores.innerHTML = mensajes.join(" ,");
    }
    if (mensajes.length == 0) {
      let continuar = "index2.html";
      form.setAttribute("action", continuar);
      localStorage.setItem("Nombre", nombre.value);
      localStorage.setItem("Apellido", apellido.value);
    } else if (mensajes.length > 0) {
      e.preventDefault();
    }
  }
});
