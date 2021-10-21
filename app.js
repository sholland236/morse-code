import translate from "./translator.js"
import translateFromMorse from "./translate-from-morse";

const input = document.querySelector("#englishText");
const output = document.querySelector("#output");
const translateButton = document.querySelector("#translate");
const morseInput = document.querySelector("#morseText");
const morseOutput = document.querySelector("#morseOutput");
const morseTranslate = document.querySelector("#morseTranslate");

const performTranslation = () => {
    output.innerHTML = translate(input.value);
}
translateButton.addEventListener("click", performTranslation);

const performMorseTranslation = () => {
    morseOutput.innerHTML = translateFromMorse(morseInput.value);
}
morseTranslate.addEventListener("click", performMorseTranslation);