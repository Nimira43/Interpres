const voiceSelect = document.querySelector('#voiceSelect')
const playButton = document.querySelector('#playButton')
const textInput = document.querySelector('textarea')

let voices = []

function loadVoices() {
  voices = speechSynthesis.getVoices()
  voiceSelect.innerHTML = voices
    .map((voice, index) => ``)
}

playButton.addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(textInput.value)
  speechSynthesis.speak(utterance)
})