let tv = 0
let chip = 0
let virtua = 0
let falas=0

function typewriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML="";
    textoArray.forEach((letra, i) => {
        setTimeout(() =>{
            elemento.innerHTML += letra;
        }, 75 * i);
    })
    if (falas==0){
    setInterval(() => {
        setTimeout(()=>{
            elemento.innerHTML = ""
        }, 6800);
    }, 4000);
   }}
const fala = document.getElementById('fala_chris')
typewriter(fala);
setTimeout(()=>{
    const fala2 = document.getElementById('fala_chris1');
    fala.style.display="none";
    fala2.style.display="block";
    falas = 1;
    typewriter(fala2);
},7800);


