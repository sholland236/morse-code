// DOM interactions go in this file

// import translate
import translate from "./translator.js"

const input = document.querySelector("#englishText");
const output = document.querySelector("#output");
const translateButton = document.querySelector("#translate");

const performTranslation = () => {
    output.innerHTML = translate(input.value);
}
translateButton.addEventListener("click", performTranslation);