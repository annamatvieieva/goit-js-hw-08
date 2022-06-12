import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const button = document.querySelector('button[type="submit"]');
const inputEmail = document.querySelector('input[type="email"]');
const textareaMessage = document.querySelector('textarea[name="message"]');
const localStorageKey = 'feedback-form-state';
const lastUserData = JSON.parse(localStorage.getItem(localStorageKey));

getlastUserData(lastUserData);
saveUserDataLS();
clearUserDataLS();

function saveUserDataLS() {
  form.addEventListener('input', throttle(() => {
    const userEmail = event.currentTarget.elements.email.value;
    const userMessage = event.currentTarget.elements.message.value;
    const userData = {
      email: userEmail,
      message: userMessage,
    };
    const userDataJSON = JSON.stringify(userData);
    localStorage.setItem(localStorageKey, userDataJSON);
  }, 500));
}
function clearUserDataLS() {
  form.addEventListener('submit', () => {
    event.preventDefault();
    const subUserEmail = event.target.elements.email.value;
    const subUserMessage = event.target.elements.message.value;
    const subUserData = {
      email: subUserEmail,
      message: subUserMessage,
    };
    console.log(subUserData);
    localStorage.removeItem(localStorageKey);
    inputEmail.value = '';
    textareaMessage.value = '';
  });
}
function getlastUserData(data) {
  if (data) {
    inputEmail.value = lastUserData.email;
    textareaMessage.value = lastUserData.message;
  }
}


// try {
//   const data = JSON.parse('{username: "Mango"}');
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // "Unexpected token u in JSON at position 1"
// }