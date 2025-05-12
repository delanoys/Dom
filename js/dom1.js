
console.log("Ejercicio 1");
 
// Crea un párrafo con id="parrafo1" y cambia su texto a "Texto cambiado" usando getElementById.

const p1=document.getElementById("parrafo1");
console.log("Parrafo1 ",p1.innerText);
p1.innerText=" Parrafo 1 Modificado";


console.log("Ejercicio 2");
 
// Crea 2 párrafos con class="par" y cambia su color de texto a azul usando getElementsByClassName.

const par = document.getElementsByClassName("par");
console.log(par);


for(let i=0; i < par.length;i++){
    par[i].style.color = "blue"; 
}

Array.from(par).forEach(p =>{
    p.style.color="blue"
    // setInterval()
    p.style.color="red"
});
console.log("Ejercicio 3");
 
// Crea 3 elementos <p> y selecciona el segundo usando getElementsByTagName. Cambia su texto.
// recoriendo coleccion usando ciclo for (const element of object) {  }

const parrafo2=document.getElementsByTagName("p");
// console.log("parrafo2: ",parrafo2);
for (const p of parrafo2) {
    // console.log("Elemento: ",p,"Contenido: ",p.innerText);
    
    if (p.innerText=="Dos"){
        p.innerText="DOS Modificando el DOM";
        p.style.color="blue";
    }
}

console.log("Ejercicio 4");
 
// 🔧 Crea un <div class="caja">Caja 1</div> y usa querySelector(".caja") para seleccionar el primero. Cámbiale el fondo a verde.

const caja = document.querySelector(".caja");
console.log("DIV clase Caja: ",caja);
console.log("Contenido HTML: ",caja.innerHTML);
console.log("contenido Texto: ",caja.innerText);

console.log("Agregando contenido");
caja.innerHTML="Contenido agregado desde el DOM"

caja.style.color="#00ff11";
caja.style.backgroundColor ="black";

console.log("Ejercicio 5");
//   Crea 3 elementos con clase "lista" (por ejemplo, <li class="lista">Item 1</li>) y usa querySelectorAll(".lista") para imprimir sus textos en consola con un for...of.
const lista = document.querySelectorAll(".lista");
console.log(lista);
for (const l of lista) {
    console.log(l.innerHTML);
    l.style.color="black";
    l.style.fontStyle="italic"
    l.style.fontSize="25px"
    l.style.backgroundColor="#aa55aa";
     
}