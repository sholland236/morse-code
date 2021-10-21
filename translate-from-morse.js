import morseToEnglish from "./morse-english-data.js";

const translateFromMorse = (toTranslate) => {
    const translatedArr = toTranslate.split(" ");
    let translated = [];
    for (let i = 0; i < translatedArr.length; i++) {
        const elementToTranslate = translatedArr[i];
        if (Object.keys(morseToEnglish).indexOf(elementToTranslate) < 0) {
            return "Sorry, I can't translate that";
        } else {
            let keyIndex = Object.keys(morseToEnglish).indexOf(elementToTranslate);
            let englishArr = Object.values(morseToEnglish);
            let englishResult = englishArr[keyIndex];
            translated.push(englishResult);
        }
    }
    return translated.join("");
}

export default translateFromMorse;