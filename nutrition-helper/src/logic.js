
function getDigits(str) {
    if (str.length === 0) {
        return "";
    }
    if (Number.isInteger(str.charAt(0))) {
        return str.charAt(0) + getDigits(str.substring(1));
    }
    return getDigits(str.substring(1));
}

function calorieParse(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    for (let i = 0; i < macroList.length; i++) {
        if (macroList[i].indexOf("calories") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for (let j = 0; j < seperatedList.length; j++) {
                if (seperatedList[j].match("[0-9]+")) {
                    output = parseInt(seperatedList[j]);
                }
            }
        }
    }
    return output;
}

function totalFatParse(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("total fat") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-Z]+") && seperatedList[j].indexOf("%") === -1){
                    digitizedString = getDigits(seperatedList[j]);
                    output = parseInt(digitizedString);
                }
            }
        }
    }
    return output;
}

function cholesterolParse(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("cholesterol") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-Z]+") && seperatedList[j].indexOf("%") === -1){
                    digitizedString = getDigits(seperatedList[j]);
                    output = parseInt(digitizedString);
                }
            }
        }
    }
    return output;
}

function sodiumParse(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("sodium") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-Z]+") && seperatedList[j].indexOf("%") === -1){
                    digitizedString = getDigits(seperatedList[j]);
                    output = parseInt(digitizedString);
                }
            }
        }
    }
    return output;
}

function carbohydrateParse(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("carbohydrate") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-Z]+") && seperatedList[j].indexOf("%") === -1){
                    digitizedString = getDigits(seperatedList[j]);
                    output = parseInt(digitizedString);
                }
            }
        }
    }
    return output;
}

function totalSugarParse(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("total sugars") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-Z]+") && seperatedList[j].indexOf("%") === -1){
                    digitizedString = getDigits(seperatedList[j]);
                    output = parseInt(digitizedString);
                }
            }
        }
    }
    return output;
}

function proteinParse(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("protein") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-Z]+") && seperatedList[j].indexOf("%") === -1){
                    digitizedString = getDigits(seperatedList[j]);
                    output = parseInt(digitizedString);
                }
            }
        }
    }
    return output;
}

function ironParse(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("iron") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-Z]+") && seperatedList[j].indexOf("%") === -1){
                    digitizedString = getDigits(seperatedList[j]);
                    output = parseInt(digitizedString);
                }
            }
        }
    }
    return output;
}

function potassiumParse(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("potassium") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-Z]+") && seperatedList[j].indexOf("%") === -1){
                    digitizedString = getDigits(seperatedList[j]);
                    output = parseInt(digitizedString);
                }
            }
        }
    }
    return output;
}
