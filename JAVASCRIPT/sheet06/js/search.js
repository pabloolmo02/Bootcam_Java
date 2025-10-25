function filterPokemon() {
    const searchTerm = searchBox.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        renderPokemon(allPokemon);
    } else {
        const filtered = allPokemon.filter(p => 
            p.name.toLowerCase().includes(searchTerm)
        );
        renderPokemon(filtered);
    }
    
    console.log(`🔍 Buscando: "${searchTerm}" - Encontrados: ${filtered ? filtered.length : allPokemon.length}`);
}