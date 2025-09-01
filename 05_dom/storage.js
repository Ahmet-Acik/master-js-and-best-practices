// storage.js
// Browser storage: localStorage, sessionStorage, cookies

// localStorage
localStorage.setItem('key', 'value');
console.log(localStorage.getItem('key'));
localStorage.removeItem('key');

// sessionStorage
sessionStorage.setItem('sessionKey', 'sessionValue');
console.log(sessionStorage.getItem('sessionKey'));
sessionStorage.clear();

// Cookies (simple example)
document.cookie = "username=Alice; path=/;";
console.log(document.cookie);

// Best practice: Use storage for small, non-sensitive data. Use secure cookies for authentication.
