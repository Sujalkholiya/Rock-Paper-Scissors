let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const computerChoice=()=>{
    const options =["rock","paper","scissors"];
    const randomanswer=Math.floor(Math.random()*3);
    return options[randomanswer];
}
const drawGame=() =>{ 
    msg.innerText="draw";
    msg.style.backgroundColor="blue";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`🎉 You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{ 
        computerScore++
        compScorePara.innerText=userScore;
        msg.innerText=`😞 You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice= computerChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin=compChoice==="paper"? false:true; 
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false:true;

        }
        else{
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin, userChoice, compChoice);;
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const userChoice=choice.getAttribute("id");
      playGame(userChoice);
    })
})