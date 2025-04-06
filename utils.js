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

// const a2m = getAlphFromMorse(alphamorse, "--..");
// console.log(a2m);

//couldn't get the mirror of getAlphFromMorse to work, the .find only would return first 
//character in the morse result, so have used for loop

export function getMorseFromAlpha(object, key) {
    
    for (let i = 0; i < Object.values(object).length; i++)
    {
        if(Object.keys(object)[i] === key)
        {
            return Object.values(object)[i];
        }
    }
}



// const m2a = getMorseFromAlpha(alphamorse, "Q");
// console.log(m2a);


export function lettersOrMorseOnly(input) {
    var regex = /[^a-z\s-.]/gi;
    input.value = input.value.replace(regex, "")
}