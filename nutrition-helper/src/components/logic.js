
function getDigits(str) {
    if (str.length === 0) {
        return "";
    }
    if (Number.isInteger(str.charAt(0))) {
        console.log(str);
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

function fatPercent(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("total fat") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-Z]+") && seperatedList[j].indexOf("%") !== -1){
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


    // calories = calorieParse(result.data);
    // fat = parseInt(totalFatParse(result.data.text));
    // cholesterol = parseInt(cholesterolParse(result.data.text));
    // sodium = parseInt(sodiumParse(result.data.text));
    // carbohydrate = parseInt(carbohydrateParse(result.data.text));
    // sugar = parseInt(totalSugarParse(result.data.text));
    // protein = parseInt(proteinParse(result.data.text));
    // iron = parseInt(ironParse(result.data.text));
    // potassium = potassiumParse(result.data.text);
      
var calories = 240, fat = 4, cholesterol = 5, sodium = 430, carbohydrate = 32, sugar = 5, protein = 11, iron = 8, potassium = 92;

    // module.exports = {
    //   calories,
    //   fat,
    //   cholesterol,
    //   sodium,
    //   carbohydrate,
    //   sugar,
    //   protein,
    //   iron,
    //   potassium
    //    };