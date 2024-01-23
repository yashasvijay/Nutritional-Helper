import React from 'react';
import Tesseract from 'tesseract.js';


import './index.css';
import './logic.js';
import { calorieParse, totalFatParse, cholesterolParse, sodiumParse, carbohydrateParse, totalSugarParse, proteinParse, ironParse, potassiumParse } from "./logic.js";
 < reference path = "../nutrition-helper/src/logic.js" />


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
       setText("Calories: " + calorieParse(result.data.text).toString()
       + "\n" + "Total Fats: " + totalFatParse(result.data.text).toString() +  "g\n"
       + "Cholesterol: " + cholesterolParse(result.data.text).toString() + "mg\n" + "Sodium: " + sodiumParse(result.data.text).toString() + "mg\n"
       + "Carbohydrate: " + carbohydrateParse(result.data.text).toString() + "g\n" + "Total Sugars: " + totalSugarParse(result.data.text).toString() + "g\n"
       + "Protein: " + proteinParse(result.data.text).toString() + "g\n" + "Iron: " + ironParse(result.data.text).toString() + "mg\n"
       + "Potassium: " + potassiumParse(result.data.text).toString() + "mg"
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
 return (
   <div className="container" style={{ height: '100vh' }}>
     <div className="row h-100">
       <div className="col-md-5 mx-auto h-100 d-flex flex-column justify-content-center">
         {!isLoading && (
           <h1 className="text-center py-5 mc-5">Image To Text</h1>
         )}
         {isLoading && (
           <>
             <progress className="form-control" value={progress} max="100">
               {progress}%{' '}
             </progress>{' '}
             <p className="text-center py-0 my-0">Converting:- {progress} %</p>
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
