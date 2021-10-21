import morse from "./data.js";

const translate = (toTranslate) => {
    const toStringAndLowercase = toTranslate.toString().toLowerCase();
    let translated = [];
    // use map
    for (let i=0; i < toTranslate.length; i++) {
        let letterToTranslate =  toStringAndLowercase.charAt(i);
        if (Object.keys(morse).indexOf(letterToTranslate) < 0) {
            return "Sorry, I can't translate that";
        } else {
            let keyIndex = Object.keys(morse).indexOf(letterToTranslate);
            let morseArr = Object.values(morse);
            let morseResult = morseArr[keyIndex];
            translated.push(morseResult);
        }
    }
    return translated.join(" ");
}

export default translate;