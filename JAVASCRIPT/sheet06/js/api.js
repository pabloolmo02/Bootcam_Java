// api.js
async function loadPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const data = await response.json();

    const promises = data.results.map(async p => {
      const res = await fetch(p.url);
	  console.log(res);
      const details = await res.json();
      const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${details.id}/`);
      const speciesData = await speciesRes.json();

      return {
        id: details.id,
        name: details.name,
        image: details.sprites.front_default,
        types: details.types.map(t => t.type.name),
        evolves_from: speciesData.evolves_from_species
          ? speciesData.evolves_from_species.name
          : null
      };
    });

    allPokemon = await Promise.all(promises);
    renderPokemon(allPokemon);
  } catch (error) {
	const pokedex = document.getElementById('pokedex'); 
    pokedex.innerHTML = `<p>Error al cargar Pokémon 😢</p>`;
    console.error(error);
  }
}
