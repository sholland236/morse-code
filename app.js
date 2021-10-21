import translate from "./translator.js"
import translateFromMorse from "./translate-from-morse";

const input = document.querySelector("#englishText");
const output = document.querySelector("#output");
const translateButton = document.querySelector("#translate");

const performTranslation = () => {
    output.innerHTML = translate(input.value);
}
translateButton.addEventListener("click", performTranslation);

