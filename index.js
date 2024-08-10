//onload function
function onload() {
    update();
}
 // All DOM elements
let speech = new SpeechSynthesisUtterance();
let buttonEl = document.getElementById("btn");
let inputEl = document.querySelector("#text");
let selectEl = document.getElementById("selected");

//all global variable and arrays.
let voices = [];
let i = 0;

//it will work on load once .
function update() {
    //to get all voices which are there in system.
    voices = window.speechSynthesis.getVoices();
    //set default voice
    speech.voice = voices[0];

    voices.forEach((voice) => {
        let option = document.createElement("option");
        option.textContent = `${voice.name} ${voice.lang} ${i}`;
        i++;
        selectEl.appendChild(option);

    })
}
//calling on load function.
onload();

//on changing option in select it will work.
selectEl.addEventListener('change', () => {

    //to find index .So we can give it voice array
    let len = selectEl.value.length;
    let index = selectEl.value.slice(len - 1);
    console.log(index);

    speech.voice = voices[index];


})


// console.log(voices);

//on click of convert button function will convert text to speech.
buttonEl.addEventListener('click', () => {
    speech.text = inputEl.value;
    window.speechSynthesis.speak(speech);
})