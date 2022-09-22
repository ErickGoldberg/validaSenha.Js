const entrar = document.querySelector("#entrar");
const senha = document.querySelector("#senha");
const aviso = document.querySelector("#aviso");
const oito = document.querySelector("#oito");
const maiuscula = document.querySelector("#maiuscula");
const num = document.querySelector("#num");
const caracterEspecial = document.querySelector("#caracterEspecial");
//variaveis(que nesse caso são constantes)

const regex = new RegExp(/[A-Z]+/g);
const regex2 = new RegExp(/[0-9]+/g);
const regex3 = new RegExp(/[!#@$%&]+/g);
//Todo o código regex

function processar(){
    const n = regex.test(senha.value);
    const m = regex2.test(senha.value);
    const p = regex3.test(senha.value);
    
    if(senha.value.length < 8){
        alert("Quantidade de caracteres insuficientes");
        aviso.innerHTML = "Tente novamente após corrigir o erro!";
        oito.style.color = 'red';
    }else if(n === false){
        alert("É obrigatorio ter pelo menos uma letra maiuscula")
        aviso.innerHTML = "Tente novamente após corrigir o erro!";
        maiuscula.style.color = 'red';
    }else if(m === false){
        alert("É obrigatorio ter pelo menos um número");
        aviso.innerHTML = "Tente novamente após corrigir o erro!";
        num.style.color = 'red';
    }else if(p === false){
        alert("É obrigatorio ter pelo menos um caracter especial!");
        aviso.innerHTML = "Tente novamente após corrigir o erro!";
        caracterEspecial.style.color = 'red';
    }
}
//Função que processa tudo que deve acontecer após o click

entrar.addEventListener("click", processar);