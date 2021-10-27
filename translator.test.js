// write tests in here

import translate from "./translator.js";
import translateFromMorse from "./translate-from-morse.js";

describe( "translate() tests", () => {
    const hello = translate("hello");
    test("Function should have a return", () => {
        expect(hello).toBeDefined();
    })
    test("Function should return a string", () => {
        expect(typeof hello).toBe("string");
    })
    test("Function should be able to handle strings", () => {
        const outcome = ".... . .-.. .-.. ---";
        expect(hello).toBe(outcome);
    })
    test("Function should be able to handle numbers", () => {
        const outcome = ".---- ..... ----."
        expect(translate("159")).toBe(outcome);
    })
    test("Function should be able to handle sentences", () => {
        const sentence = "How are you";
        const outcome = ".... --- .-- / .- .-. . / -.-- --- ..-"
        expect(translate(sentence)).toBe(outcome);
    })
    test("Function should be able to handle incorrect inputs", () => {
        const sentence = "Welcome!";
        const outcome = "Sorry, I can't translate that";
        expect(translate(sentence)).toBe(outcome);
    })
});

describe("translateFromMorse() tests", () => {
    const hello = translateFromMorse(".... . .-.. .-.. ---");
    const number = translateFromMorse(".---- ..... ----.");
    it("Should have a return", () => {
        expect(hello).toBeDefined();
    })
    it("Should return a string", () => {
        expect(typeof hello).toBe("string");
    })
    it("Should be able to handle strings", () => {
        expect(hello).toBe("hello");
    })
    it("Should be able to handle number", () => {
        expect(number).toBe("159");
    })
    it("Should be able to handle sentences", () => {
        const sentence = ".... --- .-- / .- .-. . / -.-- --- ..-";
        const outcome = "how are you";
        expect(translateFromMorse(sentence)).toBe(outcome);
    })
    it("Should be able to handle incorrect inputs", () => {
        const outcome = "Sorry, I can't translate that";
        expect(translateFromMorse("!")).toBe(outcome);
    })
});