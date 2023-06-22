// Import stylesheets
import './style.css';
function addCps(a, b, callback) {
  callback(a + b);
}

function additionAsync(a, b, callback) {
  setTimeout(() => callback(a + b), 100);
}

console.log(' addCps before');
addCps(1, 2, (result) => console.log(`Result: ${result}`));
console.log('addCps after');

console.log('additionAsync before');
additionAsync(1, 2, (result) => console.log(`Result: ${result}`));
console.log('additionAsync after');

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
