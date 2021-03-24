var quotes =  [
	"The purpose of our lives is to be happy. — Dalai Lama",
	"You only live once, but if you do it right, once is enough. — Mae West",
	"The way to get started is to quit talking and begin doing. – Walt Disney",
	"In order to write about life first you must live it. – Ernest Hemingway",
	"Life is not a problem to be solved, but a reality to be experienced. – Soren Kierkegaard",
	"The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
	"The greatest glory in living lies not in never falling, but in rising every time we fall. — Nelson Mandela",
	"Success is not final; failure is not fatal: It is the courage to continue that counts. — Winston S. Churchill",
	"Before anything else, preparation is the key to success. — Alexander Graham Bell",
	"You become what you believe. — Oprah Winfrey",
	"Dreaming, after all, is a form of planning. — Gloria Steinem"
]

function timeOfDay() {
	let hour = new Date().getHours();
	if (hour >= 4 && hour <= 11) return 'Morning';
	if (hour >= 12 && hour <= 16) return 'AfterNoon';
	if (hour >= 17 && hour <= 20) return 'Evening';
	if (hour >= 21 || hour <= 3) return 'Night';

}
document.getElementById('dayTime').innerText = timeOfDay();

function newQuote(){
	var randomQuote = Math.floor(Math.random()*(quotes.length));
	document.getElementById('quote').innerText = quotes[randomQuote];
	changeColor();
}
newQuote();

function changeColor(){
	let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
	document.getElementById('quote').style.background = randomColor;
	document.getElementById('newQuote').style.background = randomColor;

}
changeColor();
