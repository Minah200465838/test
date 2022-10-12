
const speech = document.querySelector('P');
storySpeech.addEventListener('click', Speech);
function Speech() { 
	var msg = new SpeechSynthesisUtterance();
	msg.text = speech.innerText;
	msg.lang = 'en-US';
	window.speechSynthesis.speak(msg);
};