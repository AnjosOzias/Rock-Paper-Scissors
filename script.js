let humanScore = 0
let computerScore = 0

const opcoes = ["pedra", "papel", "tesoura"];
const btn = document.querySelector(".btn")
const btnRock = document.querySelector("#btnRock")
const btnPaper = document.querySelector("#btnPaper")
const btnScissors = document.querySelector("#btnScissors")
const resultado = document.querySelector("#resultado")

document.body.addEventListener("click", (event) => {
 
    if(!event.target.classList.contains("btn")) return;
    console.log(event.target)
    const escolhaHumano = event.target.textContent
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
    let mensagem = ""
    
    if(escolhaHumano === escolhaComputador){
        mensagem =  "Empate!"
    }else if(
        (escolhaHumano === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaHumano === "papel" && escolhaComputador === "pedra") ||
        (escolhaHumano === "tesoura" && escolhaComputador === "papel")
    ){  humanScore++
        mensagem =  "Você venceu!"
    } else {
        computerScore++
        mensagem = "O computador venceu!"
      }
    
    p.textContent = `
        Você: ${escolhaHumano} | 
        Computador: ${escolhaComputador} | 
        Resultado: ${mensagem} |
    `;
    para.textContent = `Pontos PC: ${computerScore} | Pontos humanos: ${humanScore}`
     
});
const p = document.createElement("p");
resultado.appendChild(p);
const div = document.createElement("div")
const para = document.createElement("p")

resultado.appendChild(para)




// let humanScore = 0
// let computerScore = 0


// let result = 0
// let round= 3
// function getComputerChoice(){
//     let randomValue = Math.random()
//     if(randomValue <= 0.33){
//         return "rock"
//     }else if(randomValue > 0.33 && randomValue < 0.66){
//         return "paper"   
//     }else{
//         return "scissors"
//      }
// }


// const btn = document.querySelector(".btn")
// const btnRock = document.querySelector("#btnRock")
// const btnPaper = document.querySelector("#btnPaper")
// const btnScissors = document.querySelector("#btnScissors")
// const resultado = document.querySelector("#resultado")

// btnRock.addEventListener("click",(evt)=>{
// const humanSelection = evt.target.textContent.toLowerCase()
// const computerSelection = getComputerChoice()
// playRound(computerSelection, humanSelection)
// const message = playRound(computerSelection, humanSelection)

// const p = document.createElement("p")
// p.textContent = message
// resultado.textContent = `${message} |Placar: Você ${humanScore} - PC ${computerScore}`;
// })

// btnPaper.addEventListener("click",(evt)=>{
// const humanSelection = evt.target.textContent.toLowerCase()
// const computerSelection = getComputerChoice()
// const message = playRound(computerSelection, humanSelection)

// const p = document.createElement("p")
// p.textContent = message
// resultado.textContent = `${message} |Placar: Você ${humanScore} - PC ${computerScore}`;

// })

// btnScissors.addEventListener("click",(evt)=>{
// const humanSelection = evt.target.textContent.toLowerCase()
// const computerSelection = getComputerChoice()
// const message = playRound(computerSelection, humanSelection)

// const p = document.createElement("p")
// p.textContent = message
// resultado.textContent = `${message} |Placar: Você ${humanScore} - PC ${computerScore}`;
// })


// function playRound(computerSelection,humanSelection ){
  
//         if (computerSelection == "rock" && humanSelection == "scissors"){
//             computerScore++
//             return "The computer’s rock beat your scissors."
            
//         }else if(computerSelection == "scissors" && humanSelection == "rock"){
//             humanScore++
//             return "Your rock beat the computer’s scissors."

//         }else if(computerSelection == "rock" && humanSelection == "paper"){
//             humanScore++
//             return "Your paper beat the computer’s rock."

//         }else if(computerSelection == "paper" && humanSelection == "rock"){
//             computerScore++
//             return "The computer’s paper beat your rock."

//         }else if(computerSelection == "paper" && humanSelection == "scissors"){
//             humanScore++
//             return "Your scissors beat the computer’s paper."

//         }else if(computerSelection == "scissors" && humanSelection == "paper"){
//             computerScore++
//             return "The computer’s scissors beat your paper."

//         }else  {computerSelection == humanSelection
//             return "empate"
//         }    
// }

// console.log(` The computer scored ${computerScore} points`)
// console.log(` You scored ${humanScore} points`)

// let humanScore = 0;
// let computerScore = 0;

// // Gerar o valor dentro da função garante que o PC mude a escolha a cada rodada
// function getComputerChoice() {
//     let randomValue = Math.random();
//     if (randomValue <= 0.33) {
//         return "rock";
//     } else if (randomValue > 0.33 && randomValue < 0.66) {
//         return "paper";
//     } else {
//         return "scissors";
//     }
// }

// function getHumanChoice() {
//     let choice = prompt("Enter an option (rock, paper, scissors):");
//     return choice ? choice.toLowerCase() : ""; 
// }

// // Passamos as escolhas já sorteadas/digitadas como argumentos
// function playRound(computerSelection, humanSelection) {
//     if (computerSelection === "rock" && humanSelection === "scissors") {
//         computerScore++;
//         console.log("The computer’s rock beat your scissors.");
//     } else if (computerSelection === "scissors" && humanSelection === "rock") {
//         humanScore++;
//         console.log("Your rock beat the computer’s scissors.");
//     } else if (computerSelection === "rock" && humanSelection === "paper") {
//         humanScore++;
//         console.log("Your paper beat the computer’s rock.");
//     } else if (computerSelection === "paper" && humanSelection === "rock") {
//         computerScore++;
//         console.log("The computer’s paper beat your rock.");
//     } else if (computerSelection === "paper" && humanSelection === "scissors") {
//         humanScore++;
//         console.log("Your scissors beat the computer’s paper.");
//     } else if (computerSelection === "scissors" && humanSelection === "paper") {
//         computerScore++;
//         console.log("Computer’s scissors beat your paper.");
//     } else if (computerSelection === humanSelection) {
//         console.log("Empate nesta rodada!");
//     } else {
//         console.log("Opção inválida: " + humanSelection);
//     }
// }

// function playGame() {
//     // Loop de 5 rodadas (i = 0 até 4)
//     for (let i = 0; i < 5; i++) {
//         console.log(`--- Rodada ${i + 1} ---`);
//         const computerSelection = getComputerChoice();
//         const humanSelection = getHumanChoice();
        
//         playRound(computerSelection, humanSelection);
//     }
    
//     // Resultado Final após o loop
//     console.log("--- RESULTADO FINAL ---");
//     console.log(`The computer scored ${computerScore} points`);
//     console.log(`You scored ${humanScore} points`);
// }

// playGame();
// Use o código com cuidado.

// O que foi corrigido:
// Escopo do Math.random(): No seu código original, ele estava fora das funções. Isso fazia com que o computador escolhesse a mesma opção em todas as 5 rodadas. Agora ele está dentro de getComputerChoice.
// Argumentos da Função: Na função playRound, você estava tentando usar os nomes das funções como variáveis. O correto é chamar as funções fora e passar os resultados delas para a playRound.
// Iteração do Loop: Usei for (let i = 0; i < 5; i++) para garantir que o prompt apareça exatamente 5 vezes conforme solicitado.
// Consistência: Adicionei .toLowerCase() no prompt para evitar erros caso o usuário digite "Rock" com letra maiúscula.
// Você gostaria de adicionar uma mensagem de vencedor final (quem fez mais pontos) ao término das 5 rodadas?
