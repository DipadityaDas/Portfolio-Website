const words = [
	"Hello",      // English
	"নমস্কার",      // Bengali (Nomoskar)
	"নমস্কাৰ",      // Assamese (Nomoskar)
	"ନମସ୍କାର",      // Odia (Namaskāra)
	"안녕하세요",   // Korean
	"こんにちは",   // Japanese
	"ਸਤ ਸ੍ਰੀ ਅਕਾਲ",  // Punjabi (Sat Srī Akāl)
	"નમસ્તે",       // Gujarati (Namaste)
	"नमस्कार",      // Marathi (Namaskār)
	"నమస్కారం",   // Telugu (Namaskaram)
	"வணக்கம்",   // Tamil (Vaṇakkam)
	"ನಮಸ್ಕಾರ",    // Kannada (Namaskāra)
	"നമസ്കാരം",  // Malayalam (Namaskāram)
	"Bonjour",   // French
	"Hallo",     // German
	"Hola",       // Spanish
	"नमस्ते",       // Sanskrit (Namaste)
];

const bodyContent = document.querySelector("body");
const mainContent = document.querySelector("main");
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
		setTimeout(changeWord, 200); // Wait for 300 ms before displaying the next word
	} else {
		// All words have been displayed, fade in the main content
		gsap.to(".preloader", {
			duration: .8,
			swagger: .02,
			top: "-100%",
			height: "0vh",
			ease: "Power3.easeIn"
		}).to(
			"body",
			{
				overflow: "auto"
			},
			"-=2"
		).to(".preloader", {
			display: "none"
		});
	}
}

setTimeout(changeWord, 500);
