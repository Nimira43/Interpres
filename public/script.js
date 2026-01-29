import { languages } from './js/languages.js'

const voiceSelect = document.querySelector('#voiceSelect')
const languageSelect = document.querySelector('#languageSelect')
const playButton = document.querySelector('#playButton')
const textInput = document.querySelector('textarea')

languages.forEach(({ code, name }) => {
  const option = document.createElement('option')
  option.value = code
  option.textContent = name
  languageSelect.appendChild(option)
})

let voices = []

function loadVoices() {
  voices = speechSynthesis.getVoices()
  voiceSelect.innerHTML = voices
    .map((voice, index) =>
      `<option value="${index}">${voice.name} (${voice.lang})</option>`
  )
  .join('')
}

speechSynthesis.onvoiceschanged = loadVoices
loadVoices()

async function translateText(text, targetLang) {
  try {
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        target: targetLang
      })
    })

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${await response.text()}`)
    }
    const data = await response.json()
    return data.data.translations[0].translatedText
  } catch (error) {
    console.error('Translation Error: ', error)
    alert('Failed to translate text.')
    return text
  }
}

playButton.addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(textInput.value)
  const selectedVoice = voices[voiceSelect.value]

  if (selectedVoice) utterance.voice = selectedVoice
  
  speechSynthesis.speak(utterance)
})