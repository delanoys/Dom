console.log("Trabajando con el Dom");


console.log(window); //entorno del navegador
console.log(document);// el HTML de la pagina

// trabajando con el DOM desde Js
const titulo =document.getElementById("titulo");
const mensaje=document.getElementById("mensaje");
const reto1 = document.getElementById("reto1");
console.log("Texto del titulo: ",titulo.innerHTML);
console.log("HTML del parrafo: ",mensaje.innerHTML);

mensaje.innerText="DOM - estructura de árbol que representa todos los elementos de una página HTML";

// Tu reto
// Agrega otro elemento HTML (como un <div> con texto) y muéstralo en consola.
reto1.innerHTML="Agregando text Texto al DOM"
console.log("RETO1",reto1.innerHTML);

// // Intenta cambiar el contenido de ese nuevo elemento desde JavaScript.

/*
Hola GPT, necesito aprender paso a paso aprender a manejar DOM con java script. Crea un plan de estudios con explicaciones
 y ejercicios para practicar desde, baja complejidad hasta llegar a un nivel avanzado de tal manera que pueda dominar el DOM. 
 Tambien me gustaria tener todo en un pdf com una guia, aunque la practica la realice con tu supervisión.

*/