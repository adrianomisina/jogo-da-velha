//Selecionar os Elementos
let x = document.querySelector(".x");
let o = document.querySelector(".o");

let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");

let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");

let secoundPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

//adicionar o evento de click aos boxes:s
for(let i = 0; i < boxes.length; i++) {
  // quando alguem clicar na caixa
  boxes[i].addEventListener("click", function() {

    let el = checkEL(player1, player2);

    if(this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);

      // para adicionar o elemento dentro da caixa usar appendChild
      this.appendChild(cloneEl);
  
      //computar jogada - alternância
      if(player1 === player2){
        player1++;
      } else {
        player2++;
      } 
    }
  });
}

//ver quem vai jogar 
function checkEL(player1, player2) {
  if(player1 === player2) {
    //x;
    el = x;
  } else {
    //o;
    el = o
  }
  return el;
}

