document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#login-form');
  const loginInput = document.querySelector('#login-form input');
  const greeting = document.querySelector('#greeting');
  const HIDDEN_CLASSNAME = 'hidden';
  const USERNAME_KEY = 'username';

  const onLoginSubmit = (evt) => {
    evt.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    evt.target.classList.add(HIDDEN_CLASSNAME);
    printGreetings(username);
  };

  const printGreetings = (username) => {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  };

  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
  } else {
    printGreetings(savedUsername);
  }
});
