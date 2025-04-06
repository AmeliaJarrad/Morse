test("adds 1 + 2 to equal 3", () => {
    expect(true).toBe(true);
});

import { getAlphFromMorse } from "./utils";
import { getMorseFromAlpha } from "./utils";

const invalidCharType = new Error("Must be only Morse or English letter characters")
const nonEntry = new Error("only whitespace has been entered, no characters to translate")
const numberEntry = new Error("number translation not implemented yet, use letters or morse")

describe("Test cases for functions that translate letters to morse, and morse to letters")
test("given the correct character entries the function returns opposite translation", () => {
    expect(getAlphFromMorse("...")).toBe("S");
    expect(getMorseFromAlpha("S")).toBe("...")

});