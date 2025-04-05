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

import { getAlphFromMorse } from "./utils.js";
import { getMorseFromAlpha } from "./utils.js";



//possibly above can be redone with a .map and/or .filter

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("form submitted")
    const userInput = document.querySelector("#input")
    const userText = userInput.value.toUpperCase()
    console.log(userText)
    const a2m = getAlphFromMorse(alphamorse, userText)
    const m2a = getMorseFromAlpha(alphamorse, userText);
    console.log(m2a, a2m, "is the translation")

});

//currently this works for single character inputs only 
