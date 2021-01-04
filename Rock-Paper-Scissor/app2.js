const game = () =>{
    let pScore = 0;
    let cScore = 0;

    const startGame = () =>{
       const playBtn = document.querySelector(".intro button") ;
       const introScreen = document.querySelector('.intro');
       const match = document.querySelector('.match');
       playBtn.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut');
            match.classList.remove('fadeOut');
            match.classList.add('fadeIn');
       });
    };
    //play match
    const playMatch = () =>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');
        // console.log(        options[1].textContent );
        hands.forEach(hand =>{
            hand.addEventListener("animationend",function(){
                this.style.animation = "";
            });
        });
        const computerOptions = ['rock','paper','scissors'];
        options.forEach(option =>{
            option.addEventListener('click',function(){
                //Computer Choice
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];
                console.log(computerChoice);

                //call compare hands
                setTimeout(()=>{
                    compareHands(this.textContent,computerChoice);
                playerHand.src = `./assets/${this.textContent}.png `;
                computerHand.src = `./assets/${computerChoice}.png `;
                },2000);
                
                playerHand.style.animation = "shakePlayer 2s ease-out";
                computerHand.style.animation = "shakeComputer 2s ease-out";
            });
        });

        const compareHands = (playerChoice,computerChoice) => {
            const winner = document.querySelector('.winner');
            //tie
            if(playerChoice === computerChoice){
                winner.textContent = 'its a  Tie';
                return;
            }
            //rock
            if(playerChoice === 'rock'){
                if(computerChoice === 'scissors'){
                    winner.textContent = 'Player wins';
                    pScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = 'Computer wins';
                    
                    cScore++;
                    updateScore();
                    return;
                }
            }
            // paper
            if(playerChoice === 'paper'){
                if(computerChoice === 'rock'){
                    winner.textContent = 'Player wins';
                    pScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = 'Computer wins';
                    cScore++;
                    updateScore();
                    return;
                }

            }
            //scissor
            if(playerChoice === 'scissors'){
                if(computerChoice === 'paper'){
                    winner.textContent = 'Player wins';
                    pScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = 'Computer wins';
                    cScore++;
                    updateScore();
                    return;
                }

            }
        };



        
    };

    const updateScore = () =>{
        playerScore = document.querySelector('.player-score p');
        computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        


    };
    //computer options

    startGame();
    playMatch();

}

game();