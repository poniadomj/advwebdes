const game = () => {
	let aScore = 0;
	let pScore = 0;
	



const startRPC = () => {
	
	const choices = document.querySelectorAll(".choices button");
	const aihand = document.querySelector(".aih");
	const playerhand = document.querySelector(".playerh");
	const hands = document.querySelectorAll(".hands img");
	
	const aiChoices =["rock", "paper", "scissors", "mi"];
	
	choices.forEach(choice => {
		choice.addEventListener("click",function(){
			
					const aiNumber = Math.floor(Math.random() * 3);
					const aiOptions = aiChoices[aiNumber];
			
			gameResults(this.textContent, aiOptions);
		//images
			aihand.src = `./rpspix/${aiOptions}.png`;
			playerhand.src = `./rpspix/${this.textContent}.png`;
					
		});
	
	});
	
};
	
	const showScore = () => {
	const artiScore = document.querySelector(".aiscores p");
    const playerScore = document.querySelector(".plyrscores p");
    
	artiScore.textContent = aScore;
    playerScore.textContent = pScore;
    
  };
	
	
	

const gameResults = (playerOptions, aiOptions) =>{
	
	const wins = document.querySelector(".wins");
	if (playerOptions === aiOptions){
		wins.textContent = "Tie";
		return;
	}
	
	if (playerOptions === "rock"){
		if(aiOptions === "scissors"){
			wins.textContent ="Player Wins";
			pScore++;
			showScore();
			return;
		}else{
			wins.textContent="AI Wins";
			aScore++;
			showScore();
			return;
		}
		
	}
	
	if (playerOptions === "paper"){
		if(aiOptions === "scissors"){
			wins.textContent ="AI Wins";
			aScore++;
			showScore();
			return;
		}else{
			wins.textContent="Player Wins";
			pScore++;
			showScore();
			return;
		}
		
	}
	
	if (playerOptions === "scissors"){
		if(aiOptions === "rock"){
			wins.textContent ="AI Wins";
			aScore++;
			showScore();
			return;
		}else{
			wins.textContent="Player Wins";
			pScore++;
			showScore();
			return;
		}
		
	}
}
 


startRPC();

}

game();







