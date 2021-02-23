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
let remaining = document.getElementById("numLeft");

let mode = document.getElementById("mode");
let eMode = document.getElementById("drop-easy");
let mMode = document.getElementById("drop-medium");
let hMode = document.getElementById("drop-hard");


//let alert = "Are you sure you wish to reset your progress?";
//let accept = ;


/*function reset(mode){
    /*accept;
    if(accept ===true){

    if(mode === "Easy"){
        
    } else if(mode === "Medium"){

    } else if(mode === "Hard"){

    }
};
};

//Debugging other reset function
*/
eMode.onclick = reset(mode);
mMode.onclick = reset(mode);
hMode.onclick = reset(mode);




//1-100
let eRange = Math.floor(Math.random(10)*100);
console.log(eRange);
//Clears guesses array

for(let e = 0; e <= remaining+guesses.length; e++){
    guesses.pop();
};




//1-1000
let mRange = Math.floor(Math.random(10)*1000);
console.log(mRange);





//1-10000
let hRange = Math.floor(Math.random(10)*10000);
console.log(hRange);

function resetTest(){
    let accept = true;
    if(accept === true){
        confirm("Are you sure you wish to reset your progress?");
        if(mode === "easy"){
            eRange;
            guesses = [];
        }
    }else{
        console.log("Ok!");
    }
}

let button1 = document.getElementById("reset");
button1.onclick = resetTest;
