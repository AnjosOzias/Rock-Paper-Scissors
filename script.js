let humanScore = 0
let computerScore = 0

let valorAleatorio = Math.random()
let resultado = 0
function getComputerChoice(){
    if(valorAleatorio < 0.33){
        return "pedra"
    }else if(valorAleatorio > 0.33 && valorAleatorio < 0.66){
        return "papel"   
    }else{
        return "tesoura"
    }
        
    console.log(resultado)
}

function getHumanChoice(){
    let nome = prompt("Digite uma opção")
    return nome
}

function playRound(getComputerChoice,getHumanChoice){

        if (computerSelection == "pedra" && humanSelection == "tesoura"){
            computerScore++
            return console.log("A pedra do computador venceu a sua tesoura.")
            
        }else if(computerSelection == "tesoura" && humanSelection == "pedra"){
            humanScore++
            return  console.log("A sua pedra venceu a tesoura do computador")

        }else if(computerSelection == "pedra" && humanSelection == "papel"){
            humanScore++
            return  console.log("O seu papel venceu a pedra do computador")

        }else if(computerSelection == "papel" && humanSelection == "pedra"){
            computerScore++
            return  console.log("O papel do computador venceu sua pedra")   

        }else if(computerSelection == "papel" && humanSelection == "tesoura"){
            humanScore++
            return  console.log("Sua tesoura venceu o papel do computador")

        }else if(computerSelection == "papel" && humanSelection == "tesoura"){
            computerScore++
            return  console.log("A tesoura do computador vence o seu papel")
        } else{
            console.log("nenhuma das opcoes")
        }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

function playGame(){
playRound(getHumanChoice(),getComputerChoice())
playRound(getHumanChoice(),getComputerChoice())

}