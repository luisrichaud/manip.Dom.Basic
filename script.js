// const h1 = document.querySelector('h1');
// const input1 = document.querySelector('#calculo1');
// const input2 = document.querySelector('#calculo2');
// const btn = document.querySelector('#btnCalcular');
// const resultado = document.querySelector('#resultado');

// btn.addEventListener('click', btnOnClick); 

// function  btnOnClick(){
//         const sumaInputs = +input1.value + +input2.value;
//         resultado.innerText = "Resultado = " + sumaInputs;
//         console.log(input1.value, input2.value);
//         console.log(resultado.innerText); 
// }



// const h1 = document.querySelector('h1');
// const form = document.querySelector('#form');
// const input1 = document.querySelector('#calculo1');
// const input2 = document.querySelector('#calculo2');
// const btn = document.querySelector('#btnCalcular');
// const resultado = document.querySelector('#resultado');

// form.addEventListener('submit', sumarInputs); 

// function  sumarInputs(event){
//         event.preventDefault();
//         const sumaInputs = +input1.value + +input2.value;
//         resultado.innerText = "Resultado = " + sumaInputs;
//         console.log(input1.value, input2.value);
//         console.log(resultado.innerText); 
// }


const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');

btn.addEventListener('click', btnOnClick); 

function  btnOnClick(event){
        const sumaInputs = +input1.value + +input2.value;
        resultado.innerText = "Resultado = " + sumaInputs;
        console.log(input1.value, input2.value);
        console.log(resultado.innerText); 
}
 


  