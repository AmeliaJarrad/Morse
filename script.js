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
import { lettersOrMorseOnly } from "./utils.js";



//possibly above can be redone with a .map and/or .filter

const form = document.querySelector("form");
const output = document.getElementById("output")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("form submitted")
    const userInput = document.querySelector("#input")
    const userText = userInput.value.toUpperCase()
    console.log("User has inputted " + userText)

//here is where I figure out if its words or morse being input by user
    
    let val = userText
    console.log(val + " is this val")
    let isAlphabetic = /^[a-zA-Z ]+$/.test(val);
    console.log(isAlphabetic)

    if (isAlphabetic) {
        console.log("Receiving text input")
        const words = val.split(" ");
        console.log("attempting split " + words + " this is now an Array")
        console.log(words)
    // now I have the array called words, I need to iterate over it, can't split coz array not string
        const letters = words.map((x) => x.split(""))
        console.log(letters)
        let convertedArray = []
        
        for (let i = 0; i < letters.length; i++) {
           convertedArray[i] = [];
            for (let j = 0; j < letters[i].length; j++) {
                convertedArray[i][j] = getMorseFromAlpha(alphamorse, letters[i][j])
            }
            convertedArray[i] = convertedArray[i].join(" ")
        }
        console.log(convertedArray)
        let presentString = ""
        for (let i = 0; i < convertedArray.length; i++) {
            presentString = presentString + convertedArray[i] + "    "
        }
        console.log(presentString)
        createTextBox("div", " from English to morse is " + presentString, output, ["output"])
        // try {
        //     const m2a = getMorseFromAlpha(alphamorse, userText)
        //     console.log("Translation from English is " + m2a )
        //     // const m2al = getMorseFromAlpha(alphamorse, letters)
        //     // console.log("letters " + m2al)
        //     createTextBox("div", "Translation from English to morse is " + m2a, output,  )
        // } catch (e) {
        //     ("ERROR WAS THROWN " + e)
        // }

    }

    if (!isAlphabetic) {
        console.log("Receiving morse input")
        const morseWords = val.split("    ");
        console.log("attempting split " + morseWords + " this is now an Array")
        console.log(morseWords)
        const morseLetters = morseWords.map((x) => x.split(" "))
        console.log(morseLetters)
        let convertedMorseArray = []

        for (let i = 0; i < morseLetters.length; i++) {
            convertedMorseArray[i] = [];
             for (let j = 0; j < morseLetters[i].length; j++) {
                 convertedMorseArray[i][j] = getAlphFromMorse(alphamorse, morseLetters[i][j])
             }
             convertedMorseArray[i] = convertedMorseArray[i].join("")
         }
         console.log(convertedMorseArray)
         let presentMorseString = ""
         for (let i = 0; i < convertedMorseArray.length; i++) {
             presentMorseString = presentMorseString + convertedMorseArray[i] + " "
         }
         console.log(presentMorseString)
         createTextBox("div", " from morse to English is " + presentMorseString.toLowerCase(), output, ["output"])
    //      try {
    //         const a2m = getAlphFromMorse(alphamorse, userText)
    //         console.log("Translation from Morse is " + a2m )
    //         createTextBox("div", "Translation from morse to English is " + a2m, output,  )
    //     } catch (e) {
    //         ("ERROR WAS THROWN " + e)
    //     }
       

    }
})

