const scoreBoard = document.querySelector('.scoreboard') as HTMLElement | null;
const scoreText = document.querySelector('.score-text') as HTMLElement | null;
const scoreValue = document.querySelector('.score-value') as HTMLElement | null;
const gameBoard = document.querySelector('.gameboard') as HTMLElement | null;
const marks = document.querySelectorAll('.choices'); 
const displayStatus = document.querySelector('.display-status') as HTMLElement | null;
const winText = document.querySelector('.won') as HTMLElement | null;
const lostText = document.querySelector('.lost') as HTMLElement | null;
const drawText = document.querySelector('.draw') as HTMLElement | null;
const nextRoundBtn = document.querySelector('.next-round') as HTMLElement | null;
const rulesBtn = document.querySelector('.rule-text') as HTMLElement | null;
const ruleLogo = document.querySelector('.rules') as HTMLElement | null;
const closeMark = document.querySelector('#close') as HTMLElement | null;
const userIcon = document.querySelector('.user-icon');
const houseIcon = document.querySelector('.house-icon');
const startPage = document.getElementById('start-page') as HTMLElement | null;
let score = 0;

if (nextRoundBtn) {
    nextRoundBtn.addEventListener('click', () => {
   
    if (startPage) {
      startPage.style.display = "block";
     
    }
    if (gameBoard) {
      gameBoard.style.display = "none";
    }

});
}
if (rulesBtn && ruleLogo) {
    rulesBtn.addEventListener('click', () => {
        if (ruleLogo) {
          ruleLogo.style.display = 'block';
        }
});
}
if (closeMark) {
    closeMark.addEventListener('click', () => {
        if (ruleLogo) {
          ruleLogo.style.display = 'none';
        }
    });
}

function getUserChoice(button: HTMLElement) {
    const classNames = button.className.split(' ');
    return classNames[0];
}


function handleClick (event: Event): void {

    if (nextRoundBtn) {
        nextRoundBtn.style.display = 'none';
    }
    if (userIcon) {
        userIcon.classList.remove('rock', 'paper', 'scissors','spock', 'lizard');
    }
    if (houseIcon) {
        houseIcon.classList.remove('rock', 'paper', 'scissors', 'spock', 'lizard');
    }
    if (lostText) {
        lostText.style.display = 'none';
    }
    if (winText) {
        winText.style.display = 'none';
    }
    if (drawText) {
        drawText.style.display = 'none';
    }

    const button = event.target as HTMLElement;


    const userChoice = getUserChoice(button);
    const allChoices = ['rock', 'paper', 'scissors'];
    const housePlayerIndex = Math.floor(Math.random() * 3);
    const computerChoice = allChoices[housePlayerIndex];


 
    if (startPage) {
      startPage.style.display = "none";
     
    }
    if (gameBoard) {
      gameBoard.style.display = "block";
    }

    if (userIcon) {
        userIcon.classList.toggle(userChoice);
    }
   
    setTimeout(() => {
    if (houseIcon) {
        houseIcon.classList.toggle(computerChoice);
    }
  }, 1000);

    playRound(userChoice, computerChoice);  
};

marks.forEach((mark) => {
    if (mark instanceof HTMLElement) {
        mark.addEventListener('click', handleClick); 
    } 
});

// function playRound(userChoice: string, computerChoice: string) {
    
//     if (userChoice === computerChoice) {
//         setTimeout(() => {
//         if (drawText) {
//             drawText.style.display = "block";
//         }
//         if (nextRoundBtn)
//             nextRoundBtn.style.display = "block";
//         }, 1300);
       
//     }
//     else if 
//        ((userChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) || 
//        (userChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) || 
//        (userChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
//        (userChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors')) ||
//        (userChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ) {

//        setTimeout(() => {
//         if (winText) {
//             winText.style.display = "block";
//         }
//         if (nextRoundBtn)
//            nextRoundBtn.style.display = "block";

//         if (scoreValue) {
//             scoreValue.innerHTML = '' + ++score;
//         }
//     }, 1300);
        
        
//     } 
//     else {
//         setTimeout(() => {
//         if (lostText) {
//             lostText.style.display = "block";
//         }
//         if (nextRoundBtn) {
//             nextRoundBtn.style.display = "block";
//         }
     
//        if (scoreValue) {
//             score--;
//             scoreValue.innerHTML = '' + score;
//         }    
//     }, 1300);

        
//     }
// };


function initializeScoreDisplay() {
    if (scoreValue) {
        scoreValue.innerHTML = '' + score;
    }
}

window.addEventListener('load', () => {
    score = parseInt(localStorage.getItem('score') || '0');
    initializeScoreDisplay(); 
});

function playRound(userChoice: string, computerChoice: string) {
   
    if (userChoice === computerChoice) {
        setTimeout(() => {
            if (drawText) {
                drawText.style.display = "block";
            }
            if (nextRoundBtn) {
                nextRoundBtn.style.display = "block";
            }
        }, 1300);
    } else if (
        (userChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (userChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (userChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (userChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors')) ||
        (userChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper'))
    ) {
        setTimeout(() => {
            if (winText) {
                winText.style.display = "block";
            }
            if (nextRoundBtn) {
                nextRoundBtn.style.display = "block";
            }

            if (scoreValue) {
                score++;
                scoreValue.innerHTML = '' + score;
                localStorage.setItem('score', score.toString());
            }
        }, 1300);
    } else {
        setTimeout(() => {
            if (lostText) {
                lostText.style.display = "block";
            }
            if (nextRoundBtn) {
                nextRoundBtn.style.display = "block";
            }

            if (scoreValue) {
                score--;
                scoreValue.innerHTML = '' + score;
                localStorage.setItem('score', score.toString());
            }
        }, 1300);
    }

//     window.addEventListener('load', () => {
//     score = parseInt(localStorage.getItem('score')!);

//     if (scoreValue) {
//                 scoreValue.innerHTML = '' + score;
//     }

// })

   initializeScoreDisplay();
};



 