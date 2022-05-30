//DESENHA BONECO
function desenhaBoneco(){
  
  console.log(letrasErradas.length)
  if (letrasErradas.length == 1){    
    document.getElementById("painel").src="./img/forca2.jpg";
    }
    if (letrasErradas.length == 2){                
        document.getElementById("painel").src="./img/forca3.jpg";
        }
        if (letrasErradas.length == 3){            
            document.getElementById("painel").src="./img/forca4.jpg";
            }
            if (letrasErradas.length == 4){
                document.getElementById("painel").src="./img/forca5.jpg";
                }
                if (letrasErradas.length == 5){
                    document.getElementById("painel").src="./img/forca6.jpg";
                    }
                    if (letrasErradas.length == 6){
                        document.getElementById("painel").src="./img/forca7.jpg";
                        }
                      
}   

