let tv = 0
let chip = 0
let virtua = 0
let geral = 0
let falas=0
let token
let preenchido
let tempo=6800
let fase = 1
let pergunta = 1


const fala = document.getElementById('fala_chris');
const fala2 = document.getElementById('fala_chris1');
let perg1 = document.getElementById('perg_chris1');

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
        }, tempo);
        tempo +=1500
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
    const box = document.getElementById(`box${fase}`);
    box.style.visibility= "visible";
    box.style.animation = "aparece 1s ease 1.7s";
    box.style.animationFillMode= "forwards";
}
function clicou(elemento){
    const card = document.getElementById(elemento);
    card.style.animation = "virar .2s";
    card.style.animationFillMode= "forwards";
    card.style.animation = "desvirar .4s ease .8s";
    card.style.animationFillMode= "forwards";
    const escrita = document.getElementById(`frase_${elemento}`);
    const btn_escolha = document.getElementById(`btn_${elemento}`);
    setTimeout(()=>{
        
        escrita.style.display="block";
        btn_escolha.style.display="block";
        },1000);
}
function escolheu(escolha){
    let box_anterior = `box${fase}`;
    let box_sai = document.getElementById(box_anterior);
    document.getElementById(`frase_tv${fase}`).style.display="none"
    document.getElementById(`btn_tv${fase}`).style.display="none"
    document.getElementById(`frase_chip${fase}`).style.display="none"
    document.getElementById(`btn_chip${fase}`).style.display="none"
    document.getElementById(`frase_virtua${fase}`).style.display="none"
    document.getElementById(`btn_virtua${fase}`).style.display="none"
    document.getElementById(`frase_geral${fase}`).style.display="none"
    document.getElementById(`btn_geral${fase}`).style.display="none"
                 
        box_sai.style.animation = "desaparece .5s ease .3s";
        box_sai.style.visibility= "hiden";  
        box_sai.style.animationFillMode= "forwards";
        if(escolha=="tv"){
            tv +=1
            fase +=1;
            prox_fase(fase)
        }else if (escolha =="chip"){
            chip +=1
            fase +=1;   
            prox_fase(fase)
        }else if (escolha =="virtua"){
            virtua +=1
            fase +=1;  
            prox_fase(fase)
        }else {
            geral +=1
            fase +=1;           
            prox_fase(fase)
        }
    }

    function prox_fase(fase){
        if(fase<=6){
        const box_atual = `box${fase}`
        pergunta += 1
        document.getElementById(`perg_chris${fase-1}`).style.display="none"
        let pergunta_atual = document.getElementById(`perg_chris${fase}`)
        pergunta_atual.style.display="block"
        
        typewriter(pergunta_atual)
        
        
        }
    }


