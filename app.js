var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


// server url
var serverUrl= "https://api.funtranslations.com/translate/ferb-latin.json";

// formatting url
function getTranslationUrl(text){
    return serverUrl +"?"+"text="+text;
}

// error handling
function errorHandler(error){
    console.log(" error occured",error);
    outputDiv.innerText("OOps! Something wrong with server. Try again later.");
}

// click event
btnTranslate.addEventListener("click", clickEventHandler())

// handiling event displaying output
function clickEventHandler() {
    return function clickEventHandler() {
        var inputText = txtInput.value;

        fetch(getTranslationUrl(inputText))
        .then(response=>response.json())
        .then(json => outputDiv.innerText=json.contents.translated)
        .catch(errorHandler)
        ;

    };
}

