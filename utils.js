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

// import { IsANumError } from "./errors.js";

export function getAlphFromMorse(value) {

    // if (value === !isNaN) {
    //     throw new IsANumError("Can't do numbers");
    // }
    
    return Object.keys(alphamorse).find(key => 
        alphamorse[key] === value);

}

// const a2m = getAlphFromMorse(alphamorse, "--..");
// console.log(a2m);

//couldn't get the mirror of getAlphFromMorse to work, the .find only would return first 
//character in the morse result, so have used for loop

export function getMorseFromAlpha(key) {
    
    for (let i = 0; i < Object.values(alphamorse).length; i++)
    {
        if(Object.keys(alphamorse)[i] === key)
        {
            return Object.values(alphamorse)[i];
        }
    }
}




// const m2a = getMorseFromAlpha(alphamorse, "Q");
// console.log(m2a);

export function inputValidate (userText) {
    let val = userText
    console.log(val + " is this val")
    let isAlphabetic = /^[a-zA-Z ]+$/.test(val);
    console.log(isAlphabetic)
    return isAlphabetic
}