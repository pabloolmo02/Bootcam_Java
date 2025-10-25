// render.js
function renderPokemon(list) {
  const pokedex = document.getElementById('pokedex');
  pokedex.innerHTML = list.map(p => `
    <div class="pokemon-card">
      <div class="pokemon-image">
        <img src="${p.image}" alt="${p.name}">
        <div class="pokemon-id">ID/${String(p.id).padStart(3, '0')}</div>
      </div>
      <div class="pokemon-info">
        <h3 class="pokemon-name">${p.name}</h3>
        <div class="pokemon-types">
          ${p.types.map(t => `<span class="type ${t}">${t}</span>`).join('')}
        </div>
        ${p.evolves_from
          ? `<div class="evolution-info">
              <div class="evolution-separator"></div>
              <div class="evolution-textss">
                <span class="evolution-text">Evoluciona de:</span>
                <span class="evolution-name">${p.evolves_from}</span>
              </div>
            </div>`
          : ''}
      </div>
    </div>
  `).join('');
}
