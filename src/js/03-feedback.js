

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[type="email"]');
const textareaMessage = document.querySelector('textarea[name="message"]');
const localStorageKey = "feedback-form-state";
const lastUserData = JSON.parse(localStorage.getItem(localStorageKey));



console.log('lastUserData', lastUserData);

form.addEventListener('input', () => {
	const  userEmail = event.currentTarget.elements.email.value;
	const userMessage = event.currentTarget.elements.message.value;
	const userData = {
		email: userEmail,
		message: userMessage
	};
	const userDataJSON = JSON.stringify(userData);
	console.log('userDataJSON', userDataJSON);
	localStorage.setItem(localStorageKey, userDataJSON);
})

