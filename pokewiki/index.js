// Solicitud GET (Request).
// Aqui solo consumimos la api sin hacer nada con el resultado
// fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
//     .then(response => response.json())// convertir a json
//     .then(allpokemon => console.log(allpokemon))
//     .catch(err => console.log('Solicitud fallida', err)); // Capturar errores


// Consumo la pokeapi con los primeros 151 pokemon y despues le hago un map al results y llamo a la funcion pokemon data
// para asi por cada pokemon que salga consulte por sus datos
function pokemonKantoList() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then((allpokemon) => {
            allpokemon.results.map((pokemon) => {
                pokemonData(pokemon);
                console.log(pokemon);
            })
        })
        .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
}

function pokemonData(pokemon) {
    // Creamos la variable url y aqui le asignamos la url del pokemon que recibimos del fetch anterior en la funcion pokemonKantoList
    let url = pokemon.url
    fetch(url)
        .then(response => response.json())
        .then((pokeData) => {
            console.log(pokeData)
        })
}

pokemonKantoList();