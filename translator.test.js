// write tests in here

import translate from "./translator.js";

describe( "translate() tests", () => {
    const hello = translate("hello");
    test("Function should have a return", () => {
        expect(translate(hello)).toBeDefined();
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