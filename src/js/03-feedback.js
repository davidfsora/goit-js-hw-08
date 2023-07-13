import _ from 'lodash';

const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textArea = document.querySelector("textarea");
const LOCALSTORAGE_KEY = "feedback-form-state";
let data = {};

window.addEventListener("load", loadData);
form.addEventListener("keyup", _.throttle(storeData, 500, { trailing: true }));
form.addEventListener("submit", saveMessage);

function loadData() {
	const savedData = retrieveData();
	if (savedData) {
		input.value = savedData.email;
		textArea.value = savedData.message;
	}	
}

function saveMessage(evt) {
	evt.preventDefault();
	storeData();
	console.log(retrieveData());
	localStorage.removeItem(LOCALSTORAGE_KEY);
	form.reset();
}

function storeData() {
	data = {
		email: form.elements.email.value,
		message: form.elements.message.value
	};
	try {
		localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
	} catch (error) {
		console.error("Set state error: ", error.message);
	}
}

function retrieveData() {
	try {
		const loadedKey = localStorage.getItem(LOCALSTORAGE_KEY);
		return loadedKey === null ? undefined : JSON.parse(loadedKey);
	} catch (error) {
		console.error("Get error: ", error.message);
	}
}
