/*

-Three Difficulty Levels: Easy, Medium, Hard

Easy: Range 1-100, 7 guesses, High-Low Prompts

Medium: Range 1-1000, 11 guesses, High-Low Prompts

Hard: Range 1-1000, 20 guesses, Too Low Prompts Only


Guesses Remaining Counter:
    -Displays remaining guesses
    -Guesses remaining turns red on final three guesses.

Select Difficulty on Dropdown Menu
    -Selecting New Difficulty mid-game makes
     alert window confirming start of new game

Buttons:

Reset:
Guess-field:

*/

let elem1 = document.getElementById("pigeon");

function changeButton(){
    elem1.innerHTML = "Button that turns a pigeon into a pigeon.";

    };
elem1.onclick = changeButton;


let magicNum = [];
let guesses = [];
let mode = document.getElementById("mode");
let remaining = document.getElementById("numLeft");

function reset(mode){
    if(mode === "Easy"){

    } else if(mode === "Medium"){

    } else if(mode === "Hard"){

    }
};






//1-100
let eRange = Math.floor(Math.random(10)*100);
console.log(eRange);





//1-1000
let mRange = Math.floor(Math.random(10)*1000);
console.log(mRange);





//1-10000
let hRange = Math.floor(Math.random(10)*10000);
console.log(hRange);

