const words = [
	"hello",      // English
	"নমস্কার",      // Bengali (Nomoskar)
	"नमस्ते",       // Sanskrit (Namaste)
	"Hola",       // Spanish
	"안녕하세요",   // Korean
	"こんにちは",   // Japanese
	"నమస్కారం",   // Telugu (Namaskaram)
	"नमस्कार",      // Marathi (Namaskār)
	"வணக்கம்",   // Tamil (Vaṇakkam)
	"નમસ્તે",       // Gujarati (Namaste)
	"ನಮಸ್ಕಾರ",    // Kannada (Namaskāra)
	"ନମସ୍କାର",      // Odia (Namaskāra)
	"ਸਤ ਸ੍ਰੀ ਅਕਾਲ",  // Punjabi (Sat Srī Akāl)
	"നമസ്കാരം",  // Malayalam (Namaskāram)
	"নমস্কাৰ",      // Assamese (Nomoskar)
	"Bonjour",   // French
	"Hallo",     // German
	"Ciao",      // Italian
	"Olá",       // Portuguese
	"Hallå",     // Swedish
];

const bodyContent = document.querySelector("body");
const mainContent = document.querySelector("main");
const preloaderContent = document.querySelector(".preloader");
const loader = document.querySelector(".loader");
let currentWordIndex = 0;

function displayWord(word) {
	loader.textContent = word;
}

function changeWord() {
	if (currentWordIndex < words.length) {
		const currentWord = words[currentWordIndex];
		currentWordIndex++;
		loader.textContent = ""; // Clear loader text
		displayWord(currentWord);
		setTimeout(changeWord, 300); // Wait for 300 ms before displaying the next word
	} else {
		// All words have been displayed, fade in the main content
		mainContent.style.opacity = 1; // Make the main content visible
		bodyContent.style.background = "#ffffff";
		preloaderContent.style.display = "none"; // Hide the preloader
		loader.style.display = "none"; // Hide the loader
	}
}

setTimeout(changeWord, 1200);
