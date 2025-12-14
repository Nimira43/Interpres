const voiceSelect = document.querySelector('#voiceSelect')
const playButton = document.querySelector('#playButton')
const textInput = document.querySelector('textare')

playButton.addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(textInput.value)
  speechSynthesis.speak(utterance)
})