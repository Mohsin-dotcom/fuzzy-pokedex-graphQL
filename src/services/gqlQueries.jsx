import { gql } from "@apollo/client";
import { default_pokemon_request_param } from "./defaultParams";

//Get pokemon list
export const GET_POKEMONS = gql`
  query ($limit: Int!) {
    allPokemon(limit: $limit, filter: true) {
      id
      name
      types {
        name
      }
      sprites {
        front_default
      }
    }
  }
`;

//Get pokemons abilities
export const GET_POKEMON_ABILITIES = gql`
  query {
    allAbilities {
      id
      name
    }
  }
`;

//Get pokemon types
export const GET_POKEMON_TYPES = gql`
  query {
    allTypes {
      id
      name
    }
  }
`;

//Get ability by Id
export const GET_ABILITY_BY_ID = gql`
  query Ability($id: Int!) {
    ability(id: $id) {
      ${default_pokemon_request_param}
    }
  }
`;
//Get type by Id
export const GET_TYPE_BY_ID = gql`
query Type($id: Int!){
  type(id: $id){
    ${default_pokemon_request_param}
  }
}`;
