//Select HTMl Element
let inputsContainer = document.querySelector(".inputs"),
disc = document.querySelector(".disc"),
guessCount = document.querySelector(".guess-count"),
typing = document.querySelector(".typing"),
replay = document.querySelector(".replay"),
succ = new Audio("../audios/audios_succ (1).mp3"),
winner= document.querySelector(".winner");


const words = [
    {
        word: "nodejs",
        disc: "JavaScript Runtime Invironment"
    },
    {
        word: "angular",
        disc: "JavaScript MVW Framework"
    },
    {
        word: "php",
        disc: "General-Purpose Scripting Language"
    },
    {
        word: "react",
        disc: "JavaScript Library"
    },
    {
        word: "vue",
        disc: "JavaScript Framework"
    },
    {
        word: "ruby",
        disc: "Open Source Programing Language"
    },
    {
        word: "python",
        disc: "Programing Language"
    },
    {
        word: "bootstrap",
        disc: "World's Most Famous Free CSS Framework"
    },
    {
        word: "tailwind",
        disc: "A Utility-Frist  CSS Framework"
    },
];

let randomWord 
    maxGuess = 12,
    countToWin = [];

//Focus Game After User Keydown
document.addEventListener('keydown', ()=> typing.focus());
//Get Random Word
function getRandom() {
    //reset Game
    reset();
    let randomNum = Math.floor(Math.random() * words.length);
    randomWord = words[randomNum].word;
    let randomDisc = words[randomNum].disc;
    disc.innerText = randomDisc;
    guessCount.innerText = maxGuess;
    let inputs = "";
    for(let i = 0; i < randomWord.length; i++) {
        inputs += `<input type="text" disabled>`;
    }
    inputsContainer.innerHTML = inputs;
}

getRandom()
//Start Game After User Keydown
typing.addEventListener('input', startGame);
//handle click ResetButton To Change Game
replay.addEventListener('click',getRandom);

function startGame(e) {
    let char = e.target.value;
    if(char.match(/[a-z]/i)) {
        if(randomWord.includes(char)) {
            for (let i = 0; i < randomWord.length; i++) {
                if(char === randomWord[i] &&
                    !inputsContainer.querySelectorAll("input")[i].value) {
                    inputsContainer.querySelectorAll("input")[i].value = char;
                    countToWin.push(char);
                }
            }
        }else {
            maxGuess--;
        }
    }else {
        maxGuess--;
    }
    guessCount.innerText = maxGuess;
    typing.value = '';
    //Winner
    if(randomWord.length === countToWin.length) {
        countToWin = [];
        succ.play();
        winner.classList.remove("hidden");
    }
    setTimeout(() => {
        if(maxGuess <= 0){
            alert("  😄  ياخسران صعب تكسب :)");
            for(let i = 0; i< randomWord.length; i++) {
                inputsContainer.querySelectorAll("input")[i].value = randomWord[i];
            }
        }
    })
}

function reset() {
    // guees count
    maxGuess = 12;
    //hidden winneer
    winner.classList.add("hidden");
    //countToWin
    countToWin = [];
    // paues audio
    succ.pause();
}






































// // reset element
// function reset() {
//   // guees count
//   maxGuess = 12;
//   // hidden winneer
//   winner.classList.add("hidden");
//   // countToWin
//   countToWin = [];
//   // paues audio
//   succ.pause();
// }



