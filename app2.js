let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepar = document.querySelector("#user-score");
const compscorepar = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    };

    const drawGame = () =>{
       
        msg.innerText = "GAME  WAS DRAW";
        msg.style.backgroundColor = "yellow";
        msg.style.textColor = "red";
    };
    const shoeWinner = (userWin, userChoice, compChoice) => {
        if(userWin) {
          userScore++;
          userscorepar.innerText = userScore;
            msg.innerText = 'YOU WIN!';
           msg.style.backgroundColor = "green";
        }else{
           compScore++;
           compscorepar.innerText = compScore;
            msg.innerText = 'YOU LOSE!';
            msg.style.backgroundColor = "red";
        }
    };


const playGame = (userChoice) => {
    console.log("user Choice =", userChoice);
    // genrate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice=", compChoice);
  if(userChoice===compChoice){
    // draw game
    drawGame();
  } else{
    let userWin = true;
    if(userChoice === "rock"){
        // comp-Scisser,paper
        userWin = compChoice =="paper" ? false : true;
    }else if(userChoice === "paper"){
        // comp-rock , scisser 
        userWin = compChoice ==="scissors" ? false : true;
    }else{
        // co-rock , paper 
       userWin = compChoice === "rock" ? false : true;
    }
    shoeWinner(userWin , userChoice, compChoice);
  }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});