// ********** Dom***************

var inputData = document.querySelector("#input");
var button = document.querySelector("button");
var outputData = document.querySelector("#output");

// **********variable declaration****************
var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

// ***********function calls*****************
// function to generate the url
function generateUrl(input) {
  return serverURL + "?" + "text=" + input;
}

// function to handle any error occurence

function errorHandler(e) {
  console.log(e, "error occured");
  alert("something is wrong!! reload the app");
}

function resolveApiData() {
  var enteredText = inputData.value; //input text
  //   fetch api to fetch and resolve url
  fetch(generateUrl(enteredText))
    .then((response) => response.json())
    .then((data) => {
      var shakespeareLanguage = data.contents.translated;
      outputData.innerText = shakespeareLanguage;
    })
    .catch(errorHandler);
}

// events****************
button.addEventListener("click", resolveApiData);
