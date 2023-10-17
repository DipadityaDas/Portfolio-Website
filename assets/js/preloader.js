const words = [
	"hello", // English
	"নমস্কার", // Bengali
	"नमस्ते", // Hindi
	"Hola", // Spanish
	"안녕하세요", // Korean
	"こんにちは", // Japanese
	"Bonjour", // French
	"Hallo", // German
	"Ciao", // Italian
	"Olá", // Portuguese
	"Hallå", // Swedish
];

const loader = document.querySelector(".loader");
const mainContent = document.querySelector("main");
const bodyContent = document.querySelector("body")
const preloaderContent = document.querySelector(".preloader")
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
		setTimeout(changeWord, 200); // Wait for 250 ms before displaying the next word
	} else {
		// All words have been displayed, fade in the main content
		mainContent.style.opacity = 1;
		bodyContent.style.background = "#ffffff";
		preloaderContent.style.display = "none";
		loader.style.display = "none"; // Hide the loader
	}
}

setTimeout(changeWord, 1200);