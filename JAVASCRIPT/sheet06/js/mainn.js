// main.js
let allPokemon = [];
const searchBox = document.querySelector('.search-box');
const searchButton = document.getElementById('Buscar');

searchBox.addEventListener('input', filterPokemon);
searchButton.addEventListener('click', filterPokemon);
searchBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') filterPokemon();
});


loadPokemon(); // ← función de api.js
