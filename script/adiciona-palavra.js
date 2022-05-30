
let adicionar = document.querySelector(".adicionar");


adicionar.addEventListener("click", function(e){
    e.preventDefault();
    salvar();
    mudarPagina();
}) 

function salvar() {
    let input = document.querySelector(".input");
    let novaPalavra = input.value;
    
    window.localStorage.setItem("nova", JSON.stringify(novaPalavra));
    salvo = window.localStorage.getItem("nova");
    array = [...salvo];
    palavras.push(array);
    console.log(array);
}

function mudarPagina() {    
    window.location.href="game.html";
}


