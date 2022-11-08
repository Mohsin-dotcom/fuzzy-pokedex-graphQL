//default query param to get pokemons data
export const default_pokemon_request_param = `
pokemon {
  id
  name
   types {
    name
  }
  sprites {
    front_default
  }
  abilities {
    id
    name
  }
}`;
