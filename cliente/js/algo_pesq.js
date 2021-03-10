let tv = 0
let chip = 0
let virtua = 0
let falas=0
const fala = document.getElementById('fala_chris');
const fala2 = document.getElementById('fala_chris1');
const perg1 = document.getElementById('perg_chris1');
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

typewriter(fala);
setTimeout(()=>{
    
    fala.style.display="none";
    fala2.style.display="block";
    falas = 1;
    typewriter(fala2);
    },7800);
    setTimeout(()=>{
        
        fala2.style.display="none";
        perg1.style.display="block";
        falas = 1;
        typewriter(perg1);
        aparece_1();
        },14500);


function aparece_1(){
    const box1 = document.getElementById("box1");
    box1.style.visibility= "visible";
}


