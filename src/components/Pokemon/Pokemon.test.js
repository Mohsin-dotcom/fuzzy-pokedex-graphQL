import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_POKEMONS } from "services/gqlQueries";
import Pokemon from "./Index";

const mockPokemonsData = [
  {
    request: {
      query: GET_POKEMONS,
      variables: {
        limit: 15,
      },
    },
    result: {
      data: {
        allPokemon: [
          {
            id: 1,
            name: "bulbasaur",
            types: [
              {
                name: "Grass",
              },
              {
                name: "Poison",
              },
            ],
            sprites: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            },
          },
        ],
      },
    },
  },
];

it("renders Pokemon compoment without error", async () => {
  render(
    <MockedProvider mocks={mockPokemonsData} addTypename={false}>
      <Pokemon />
    </MockedProvider>
  );

  expect(await screen.findByText("Loading...")).toBeInTheDocument();
  const pokemonName = await screen.findByText("bulbasaur");
  expect(pokemonName).toBeInTheDocument();
});
