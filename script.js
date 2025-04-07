import { createTextBox, removeChild } from "./dom.js";

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


const myMorse = Object.values(alphamorse)

import { getAlphFromMorse } from "./utils.js";
import { getMorseFromAlpha } from "./utils.js";
import { inputValidate } from "./utils.js";

// import { IsANumError } from "./errors.js";


//possibly above can be redone with a .map and/or .filter

const form = document.querySelector("form");
const output = document.getElementById("output")



    
    form.addEventListener("submit", (e) => {
    
    e.preventDefault()
    const allOutputs = document.getElementsByClassName("output")
    while (allOutputs.length >0) allOutputs[0].remove();  
    console.log("form submitted")
    const userInput = document.querySelector("#input")
    const userText = userInput.value.toUpperCase()
   
    

//here is where I figure out if its words or morse being input by user
    
    let isAlphabetic = inputValidate(userText)
  

    if (isAlphabetic) {
        console.log("Receiving text input")
        if(!userText || !userText.trim()) {
            return createTextBox("div", "You've only entered spaces, please use Morse or English" + "", output, ["output"] 
            ) 
        }
        const words = userText.split(" ");
        console.log("attempting split " + words + " this is now an Array")
        console.log(words)
// now I have the array called words, I need to iterate over it, can't split coz array not string
        const letters = words.map((x) => x.split(""))
        console.log(letters)
        let convertedArray = []
        
        for (let i = 0; i < letters.length; i++) {
           convertedArray[i] = [];
            for (let j = 0; j < letters[i].length; j++) {
                convertedArray[i][j] = getMorseFromAlpha(letters[i][j])
            }
            convertedArray[i] = convertedArray[i].join(" ")
        }
        console.log(convertedArray)
        let presentString = ""
        for (let i = 0; i < convertedArray.length; i++) {
            presentString = presentString + convertedArray[i] + "    "
        }
        console.log(presentString)
        createTextBox("div", " From English to Morse is: " + presentString, output, ["output"]) 
    }

    if (!isAlphabetic) {
        console.log("Checking if receiving morse input")
        let val = userText
        console.log(val + " is this val")
        let isMorse = /[\s\-\.]+/g.test(val);
        console.log(isMorse)

        if (!isMorse) {
            return createTextBox("div", "Must use Morse or English letters" + "", output, ["output"] 
            ) 
        }
        
        console.log("User has inputted " + userText)
        const morseWords = val.split("    ");
        console.log("attempting split " + morseWords + " this is now an Array")
        console.log(morseWords)
        const morseLetters = morseWords.map((x) => x.split(" "))
        console.log(morseLetters)
        let convertedMorseArray = []

        for (let i = 0; i < morseLetters.length; i++) {
            convertedMorseArray[i] = [];
             for (let j = 0; j < morseLetters[i].length; j++) {
                 convertedMorseArray[i][j] = getAlphFromMorse(morseLetters[i][j])
             }
             convertedMorseArray[i] = convertedMorseArray[i].join("")
         }
         console.log(convertedMorseArray)
         let presentMorseString = ""
         for (let i = 0; i < convertedMorseArray.length; i++) {
             presentMorseString = presentMorseString + convertedMorseArray[i] + " "
         }
         console.log(presentMorseString)
         createTextBox("div", " From Morse to English is: " + presentMorseString.toLowerCase(), output, ["output"])
  
    }

    // if (!isAlphabetic && !isMorse) {
    //     createTextBox("div", "Must use Morse or English letters" + "", output, ["output"])
     form.reset();
    }
    

    )
    // try {
        
    //     if (!isNaN(userInput)) throw "I cannot translate numbers yet"
    //     if (!userInput.match(/[a-zA-Z\s\-\.]+/g )) throw "Please enter morse or English letters only"
    // } catch (e) {
    //     console.log("Error was thrown " + e);
    // }
    // //     try {
    //         const a2m = getAlphFromMorse(alphamorse, userText)
    //         console.log("Translation from Morse is " + a2m )
    //         createTextBox("div", "Translation from morse to English is " + a2m, output,  )
    //     } catch (e) {
    //         ("ERROR WAS THROWN " + e)
    //     }
       
     // try {
        //     const m2a = getMorseFromAlpha(alphamorse, userText)
        //     console.log("Translation from English is " + m2a )
        //     // const m2al = getMorseFromAlpha(alphamorse, letters)
        //     // console.log("letters " + m2al)
        //     createTextBox("div", "Translation from English to morse is " + m2a, output,  )
        // } catch (e) {
        //     ("ERROR WAS THROWN " + e)
        // }
