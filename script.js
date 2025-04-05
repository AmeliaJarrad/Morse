import { createTextBox } from "./dom.js";

const alphamorse = 
{
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
}



// console.log(Object.getOwnPropertyNames(alphamorse))
// console.log(Object.getOwnPropertyDescriptors(alphamorse))


// const myAlphs = Object.keys(alphamorse)
// console.log(Object.keys(alphamorse))

const myMorse = Object.values(alphamorse)
// console.log(Object.values(alphamorse))

// now I need one value to call the other - for(let someval in array) { let }

function getAlphFromMorse(object, value) {
    
    return Object.keys(object).find(key => 
        object[key] === value);
}

const a2m = getAlphFromMorse(alphamorse, "--..");
console.log(a2m);



function getMorseFromAlpha(object, key) {
    
    for (let i =0; i< Object.values(object).length; i++)
    {
        if(Object.keys(object)[i] === key)
        {
            return Object.values(object)[i];
        }
    }
}

const m2a = getMorseFromAlpha(alphamorse, "Q");
console.log(m2a);

//possibly above can be redone with a .map and/or .filter

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("form submitted")
    const userInput = document.querySelector("#input")
    const userText = userInput.value.toUpperCase()
    console.log(userText)
});

//just thinking that with the userinput may need to reword to something like:
//  const userText = toUpperCase.userInput.value