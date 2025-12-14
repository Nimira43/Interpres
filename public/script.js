const voiceSelect = document.querySelector('#voiceSelect')
const playButton = document.querySelector('#playButton')
const textInput = document.querySelector('textarea')

let voices = []

function loadVoices() {
  
}

playButton.addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(textInput.value)
  speechSynthesis.speak(utterance)
})