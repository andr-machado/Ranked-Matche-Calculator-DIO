// Code - Ranked Matches Calculator

let winningBalance = Ranked (100, 50)
let level = classification (winningBalance)

function Ranked(victories, defeats){
	return victories - defeats
}

function classification(balance){
    let whatlevel = " "
    if (balance <=10){
    	whatlevel = "Ferro"
    } 
    if (balance >=11 && balance <=20){
    	whatlevel = "Bronze"
    }
    if (balance >=21 && balance <=50){
    	whatlevel = "Prata"
    }
    if (balance >=51 && balance <=80){
    	whatlevel = "Ouro"
    }
    if (balance >=81 && balance <=90){
    	whatlevel = "Diamante"
    }
    if (balance >=91 && balance <=100){
    	whatlevel = "Lendário"
    }
    if (balance >=101){
    	whatlevel = "Imortal"
    } 
    
   return whatlevel

}

console.log("O Herói tem um saldo de " + winningBalance + " e está no nível " + level) 
