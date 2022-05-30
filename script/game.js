let novoJogo = document.querySelector('.novo-jogo');
let mensagem = document.querySelector('.mensagem');
let letraErrada = document.querySelector('.letra-errada');
let linhas = document.querySelector('.linhas');
let painel = document.getElementById('painel');

let palavras = ['elefante', 'amor', 'calculadora', 'churrasco', 'seriado', 'carinho', 'jesus', 'baleia'];
let letrasCorretas = [];
let letrasErradas = [];
let chances = 0;



//NOVO JOGO
function jogar(){
    document.getElementById('painel').src="./img/forca1.jpg";  
    linhas.innerHTML = "";
    letraErrada.innerHTML = "";
    mensagem.innerHTML = "";
    letrasCorretas = [];
    letrasErradas = [];
    chances = 0;
    palavraSecreta(palavras);
    mostrarLetras();
    habilitarTeclado();
    capturar();
    ;
    
}

//ESCOLHER PALAVRA SECRETA
function palavraSecreta(palavras){
    const random = palavras[Math.floor(Math.random() * palavras.length)]; 
    palavraEscolhida = random.toUpperCase();
    
    console.log(palavraEscolhida);
}


//LETRAS E TRACINHOS
function mostrarLetras(){       
    linhas.innerHTML = "";
        palavraEscolhida.split("").forEach( letra => {
        if(letrasCorretas.includes(letra)) {
            linhas.innerHTML += `<span>${letra}</span>`
        }else{
            linhas.innerHTML += `<span>__ </span>`
        }        
    });
}

//CAPTURAR E VERIFICAR TECLA PRESSIONADA
function capturar() {
        document.body.addEventListener('keypress', function (event){
        const letra = event.key.toUpperCase();
        const code = event.keyCode;
        if(code >= 65 && code <= 90 || code >= 97 && code <=126){
          teclado(letra);
          } else {
              alert("Digite uma letra!") ; 
          }
        console.log(`Key: ${letra}, Code ${code}`);
      });
}


//DESABILITAR O TECLADO
function desabilitarTeclado() {
    document.onkeydown = desabilitarTeclado;         
    return false; 
}

//HABILITAR O TECLADO
function habilitarTeclado() {
    document.onkeydown = habilitarTeclado;         
    return true; 
}

//TECLADO
function teclado(letra){
        if (palavraEscolhida.split('').includes(letra)) {
        letrasCorretas.push(letra);         
        } else {    
            if  (!letrasErradas.includes(letra)) {
                letrasErradas.push(letra);           
                letraErrada.innerHTML += `<span>${letra}, </span>`
                chances++;
                console.log(letrasErradas);
                desenhaBoneco();
                if (chances >=6) {
                    mensagem.innerHTML += `<span>Fim de jogo!</span>`
                    desabilitarTeclado();
                }     
            }
        } mostrarLetras();

        if (linhas.textContent == palavraEscolhida) {
            mensagem.innerHTML = "";
            mensagem.innerHTML += `<span>Você venceu! Parabéns!</span>`
            desabilitarTeclado();
        }     
}

//INPUT CELULAR




   

