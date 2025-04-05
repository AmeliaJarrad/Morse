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


export function getAlphFromMorse(object, value) {
    
    return Object.keys(object).find(key => 
        object[key] === value);
}

const a2m = getAlphFromMorse(alphamorse, "--..");
console.log(a2m);

//couldn't get the mirror of getAlphFromMorse to work, the .find only would return first 
//character in the morse result, so have used for loop

export function getMorseFromAlpha(object, key) {
    
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

// need to create some function that succesfully takes user input, if input is alpha - use
// .split to firstly split each word using delimiter " " (single space) and store each word 
// into an array, then .split each word in the arrray to take each letter in a word, then 
// return the morse character for each letter in the word, then use .join for the return with
//  each morse character delimited with " "(single space). 

const userInput = document.querySelector("#input");
const usersWords = [];

