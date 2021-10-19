const LEVELS = 3;
const ADD_SUB_TIME = 1000;
const NEXT_LVL_CORRECT = 3;
let level = 1;
let correct = 0;
let time = 1500;
let strike = 0;


let level1Words = ["hola", "mundo", "corta", "local", "casa", "start", "letra", "en"];
let level2Words = ["muestra", "palabra", "aplicacion", "proyecto", "diagrama", "entregar", "acuerdo", "dificultad"];

function pickWord(lvl){
    switch(lvl){
        case 1:
            return level1Words[Math.floor(Math.random() * ((level1Words.length) - 0) + 0)];
        case 2:
            return level2Words[Math.floor(Math.random() * ((level1Words.length) - 0) + 0)];
        case 3:
            return level1Words[Math.floor(Math.random() * ((level1Words.length) - 0) + 0)] + " " + level2Words[Math.floor(Math.random() * ((level1Words.length) - 0) + 0)];
        default:
            break;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function start(){
    while(level < LEVELS + 1){

        var elem = document.getElementById('word');
        var levelText = document.getElementById('level');
        var correctText = document.getElementById('correct');
        var strikeText = document.getElementById('strike');
        pickedWord = pickWord(level);
        elem.textContent = "Recordar palabra: " + pickedWord;
        levelText.textContent = "Level: " + level;
        correctText.textContent = "Correct: " + correct;
        strikeText.textContent = "Strikes: " + strike;
        console.log(time)
        word = "";

        await sleep(time);
        elem.textContent = ""
        word = prompt("Input Word");
    
        if(word.toLowerCase() == pickedWord.toLowerCase()){
            correct += 1;
            if(correct == NEXT_LVL_CORRECT){
                level += 1;
                correct = 0;
                if(level == 2){
                    time = 1000;
                }else if(level == 3){
                    time = 900;
                }
            }
        }else{
            level -= 1;
            if(correct > 0){
                correct -= 1
            }
            time += ADD_SUB_TIME;
            strike += 1;
            if(level == 0){
                level = 1;
                time -= ADD_SUB_TIME;
            }
                
            if(strike >= 3){
                level = 1;
                time = ADD_SUB_TIME;
                strike = 0;
                correct = 0; 
            }
        }
    }
    elem.textContent = "YOU WIN!!!";
    return;
}

start();








