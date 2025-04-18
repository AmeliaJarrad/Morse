test("adds 1 + 2 to equal 3", () => {
    expect(true).toBe(true);
});

import { getAlphFromMorse } from "./utils";
import { getMorseFromAlpha } from "./utils";
import { inputValidate } from "./utils";


describe("Test cases for functions that translate letters to morse, and morse to letters", () => {
    test("given the correct character entries the function returns opposite translation", () => {
       expect(getAlphFromMorse("...")).toBe("S"); 
    
});
});


describe("Test cases for functions that translate letters to morse, and morse to letters", () => {
    test("given the correct character entries the function returns opposite translation", () => {
        expect(getMorseFromAlpha("S")).toBe("...");  
    });
});

describe("Tests case for inputs to determine if should be checked for getMorseFromAlpha or getAlphFromMorse", () => {
    test("returns true for alpha characters for passing into get getMorse, or false for morse or non letter characters", () => {
        expect(inputValidate("Abcdef")).toBe(true);
        expect(inputValidate("..-.")).toBe(false);
    })
})



