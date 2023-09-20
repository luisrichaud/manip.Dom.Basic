const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo2 = document.querySelector('.parrafo2');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');



console.log({
    h1,
    p,
    parrafo2,
    pid,
    input
});


h1.innerHTML = 'Luis Richaud Prueba <br> DOM' //edita o modifica el elemento en formato html
//h1.innerText = //solo agrega texto y ya no soporta el html.
console.log(h1.getAttribute('pantalla')); // llama al atributo del elemento mencionado
h1.setAttribute('pantalla', 'Luis12') //edita el nombre del atributo del elemento

h1.classList.add('V3')
h1.classList.add ('rojo');

//h1.classList.toogle('V3');
//pone y quita una class dependiendo de la accion ejecutada

//h1.classList.contains('V3') 
// Devuelve TRUE o FALSE dependiendo de si la class existe o no

input.value = "456"

const img = document.createElement('img');
img.setAttribute('src', 'https://http2.mlstatic.com/D_NQ_NP_2X_952988-MLM69210143529_052023-F.webp');
console.log(img);


pid.innerHTML = "";
pid.append(img);
 

 