$(document).foundation()

console.log("testing...")

const BACKEND_URL = 'http://localhost:3000/menu_items';
fetch(`${BACKEND_URL}`)
    .then(response => response.json())
    .then(parsedResponse => console.log(parsedResponse));