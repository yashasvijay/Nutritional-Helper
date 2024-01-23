import React from 'react';
import Tesseract from 'tesseract.js';


import '../index.css';
import '../components/logic.js';

import BasicNavBar from '../components/NavBar';

 var spacer = "  ==>  ";

const App = () => {
 const [isLoading, setIsLoading] = React.useState(false);
 const [image, setImage] = React.useState('');
 const [text, setText] = React.useState('');
 const [progress, setProgress] = React.useState(0);


 const handleSubmit = () => {
   setIsLoading(true);
   Tesseract.recognize(image, 'eng', {
     logger: (m) => {
       console.log(m);
       if (m.status == 'recognizing text') {
         setProgress(parseInt(m.progress * 100));
       }
     },
   })
     .catch((err) => {
       console.error(err);
     })
     .then((result) => {
       setText("MACROS - AMT - %DAILY\n\n" + "Calories: " + calorieParse(result.data.text).toString()
       + "\n" + "Total Fats: " + totalFatParse(result.data.text).toString() + "g" + spacer + fatPercent(result.data.text) + "%\n" 
       + "Cholesterol: " + cholesterolParse(result.data.text).toString() + "mg" + spacer + cholesterolPercent(result.data.text) + "%\n" + "Sodium: " + sodiumParse(result.data.text).toString() + "mg" + spacer + sodiumPercent(result.data.text) + "%\n"
       + "Carbs: " + carbohydrateParse(result.data.text).toString() + "g" + spacer + carbohydratePercent(result.data.text) + "%\n" + "Fiber: " + fiberParse(result.data.text).toString() + "g" + spacer + fiberPercent(result.data.text) + "%\n" + "Total Sugars: " + totalSugarParse(result.data.text).toString() + "g" + spacer + sugarPercent(result.data.text) + "%\n"
       + "Protein: " + proteinParse(result.data.text).toString() + "g\n" + "Vitamin D: " + vitaminDParse(result.data.text).toString() + "mcg" + spacer + vitaminDPercent(result.data.text) + "%\n" + "Calcium: " + calciumParse(result.data.text).toString() + "mg" + spacer + calciumPercent(result.data.text) + "%\n" + "Iron: " + ironParse(result.data.text).toString() + "mg" + spacer + ironPercent(result.data.text) + "%\n"
       + "Potassium: " + potassiumParse(result.data.text).toString() + "mg" + spacer + potassiumPercent(result.data.text) + "%\n"
       );
       setIsLoading(false);


     });
 };


function getDigits(str) {
    if (str.length === 0) {
        return "";
    }
    if (Number.isInteger(str.charAt(0))) {
        return str.charAt(0) + getDigits(str.substring(1));
    }
    return getDigits(str.substring(1));

}

function isAlphabetic(str) {
    const result = [...str]
        .every(char => (char >= 'a' && char <= 'z') 
                    || (char >= 'A' && char <= 'Z'));
    return result;
}

function calorieParse(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    for (let i = 0; i < macroList.length; i++) {
        if (macroList[i].indexOf("calories") !== -1 && i < 7) {
            let seperatedList = macroList[i].split(" ");
            for (let j = 0; j < seperatedList.length; j++) {
                if (seperatedList[j].match("[0-9]+")) {
                    output = seperatedList[j];
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
                if (!isAlphabetic(seperatedList[j]) && seperatedList[j].indexOf("%") === -1){
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
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
                if (!seperatedList[j].match("[a-zA-z]+") && seperatedList[j].indexOf("%") !== -1) {
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
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
                if (!isAlphabetic(seperatedList[j]) && seperatedList[j].indexOf("%") === -1){
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
                }
            }
        }
    }
    return output;
}

function cholesterolPercent(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("cholesterol") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-z]+") && seperatedList[j].indexOf("%") !== -1) {
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
                }
            }
        }
    }
    return output;
}

function sodiumParse(text) {
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    let output = 0;
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("sodium") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!isAlphabetic(seperatedList[j]) && seperatedList[j].indexOf("%") === -1){
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
                }
            }
        }
    }
    return output;
}

function sodiumPercent(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("sodium") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-z]+") && seperatedList[j].indexOf("%") !== -1) {
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
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
                if (!isAlphabetic(seperatedList[j]) && seperatedList[j].indexOf("%") === -1){
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
                }
            }
        }
    }
    return output;
}

function carbohydratePercent(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("carbohydrate") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-z]+") && seperatedList[j].indexOf("%") !== -1) {
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
                }
            }
        }
    }
    return output;
}

function fiberParse(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("fiber") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!isAlphabetic(seperatedList[j]) && seperatedList[j].indexOf("%") === -1){
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
                }
            }
        }
    }
    return output;
}

function fiberPercent(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("fiber") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-z]+") && seperatedList[j].indexOf("%") !== -1) {
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
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
                if (!isAlphabetic(seperatedList[j]) && seperatedList[j].indexOf("%") === -1){
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
                }
            }
        }
    }
    return output;
}

function sugarPercent(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("added sugar") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-z]+") && seperatedList[j].indexOf("%") !== -1) {
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
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
                if (!isAlphabetic(seperatedList[j]) && seperatedList[j].indexOf("%") === -1){
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
                }
            }
        }
    }
    return output;
}

function vitaminDParse(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("vitamin d") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!isAlphabetic(seperatedList[j]) && seperatedList[j].indexOf("%") === -1){
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
                }
            }
        }
    }
    return output;
}

function vitaminDPercent(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("vitamin d") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-z]+") && seperatedList[j].indexOf("%") !== -1) {
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
                }
            }
        }
    }
    return output;
}

function calciumParse(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("calcium") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!isAlphabetic(seperatedList[j]) && seperatedList[j].indexOf("%") === -1){
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
                }
            }
        }
    }
    return output;
}

function calciumPercent(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("calcium") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-z]+") && seperatedList[j].indexOf("%") !== -1) {
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
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
                if (!isAlphabetic(seperatedList[j]) && seperatedList[j].indexOf("%") === -1){
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
                }
            }
        }
    }
    return output;
}

function ironPercent(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("iron") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-z]+") && seperatedList[j].indexOf("%") !== -1) {
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
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
                if (!isAlphabetic(seperatedList[j]) && seperatedList[j].indexOf("%") === -1){
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
                }
            }
        }
    }
    return output;
}

function potassiumPercent(text) {
    let output = 0;
    let macroList = text.toLowerCase().split("\n");
    let digitizedString = "";
    for(let i = 0; i < macroList.length; i++){
        if(macroList[i].indexOf("potassium") !== -1) {
            let seperatedList = macroList[i].split(" ");
            for(let j = 0; j < seperatedList.length; j++) {
                if (!seperatedList[j].match("[a-zA-z]+") && seperatedList[j].indexOf("%") !== -1) {
                    let matches = seperatedList[j].match(/(\d+)/);
                    if (matches) {
                        output = matches[0];
                    }
                }
            }
        }
    }
    return output;
}


 return (
   <div className="container" style={{ height: '100vh' }}>
    <BasicNavBar />
     <div className="row h-100">
       <div className="col-md-5 mx-auto h-100 d-flex flex-column justify-content-center">
         {!isLoading && (
           <h1 className="text-center py-5 mc-5">Macro Tracker</h1>
         )}
         {isLoading && (
           <>
             <progress className="form-control" value={progress} max="100">
               {progress}%{' '}
             </progress>{' '}
             <p className="text-center py-0 my-0">Tracking:- {progress} %</p>
           </>
         )}
         {!isLoading && !text && (
           <>
             <input
               type="file"
               onChange={(e) =>
                 setImage(URL.createObjectURL(e.target.files[0]))
               }
               className="form-control mt-5 mb-2"
             />
             <input
               type="button"
               onClick={handleSubmit}
               className="btn btn-primary mt-5"
               value="Convert"
             />
           </>
         )}
         {!isLoading && text && (
           <>
             <textarea
               className="form-control w-100 mt-5"
               rows="30"
               value={text}
               onChange={(e) => setText(calorieParse((e.target.value)))}
             ></textarea>
           </>
         )}
       </div>
     </div>
   </div>
 );
};
       
export default App;