
 // All DOM elements
let speech = new SpeechSynthesisUtterance();
let buttonEl = document.getElementById("btn");
let inputEl = document.querySelector("#text");
let selectEl = document.getElementById("selected");

//all global variable and arrays.
let voices = [];
let i = 0;

//it will work on load once .
let updateVoices=()=> {
    //to get all voices which are there in system.
    voices = window.speechSynthesis.getVoices();
    //set default voice
    speech.voice = voices[0];

    selectEl.innerHTML = "";
    voices.forEach((voice,index) => {
        let option = document.createElement("option");
        option.textContent = `${voice.name} ${voice.lang}`;
        option.value = index;
        selectEl.appendChild(option);

    })
}

// Attempt to populate voices immediately on page load
updateVoices();

// Load the voices when they are ready (if not already loaded)
window.speechSynthesis.onvoiceschanged = () => {
    updateVoices();
};


//on changing option in select it will work.
selectEl.addEventListener('change', () => {
    // console.log(selectEl.value)
    let index=selectEl.value
    speech.voice = voices[index];
})


// console.log(voices);

//on click of convert button function will convert text to speech.
buttonEl.addEventListener('click', () => {
    speech.text = inputEl.value;
    window.speechSynthesis.speak(speech);
})