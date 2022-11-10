import { useQuery } from "@apollo/client";
import { Box, Button, Container } from "@mui/material";
import Card from "components/Layout/Card";
import { pokemonStyles } from "styles/customStyles";
import Layout from "components/Layout/Layout";
import { useEffect, useState } from "react";
import { GET_POKEMONS } from "services/gqlQueries";

const Pokemon = () => {
  const [search, setSearch] = useState("");
  const [pokemonList, setPokemonList] = useState();
  const [favorite, setFavorite] = useState(false);
  const [paginationLimit, setPaginationLimit] = useState(15);

  const { data, error, loading } = useQuery(GET_POKEMONS, {
    variables: {
      limit: paginationLimit || paginationLimit !== null,
      // filter: true,
    },
  });

  useEffect(() => {
    if (data?.allPokemon) {
      setPokemonList(data?.allPokemon);
    }
  }, [data]);

  const handleResetSearch = () => {
    setSearch("");
    setPokemonList(data?.allPokemon);
  };

  const handleSearch = () => {
    let filteredItem = data?.allPokemon?.filter((item) =>
      item.name.toLowerCase().includes(search.trim().toLowerCase())
    );
    setPokemonList(filteredItem);
  };

  const actionOnPressingEnterKey = (event) => {
    //enter key pressed
    if (event.charCode === 13) {
      event.preventDefault();
      handleSearch();
    } else if (event.charCode === 8 && search === "") {
      //user pressed the backspace key and all characters of search term are deleted
      handleResetSearch();
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Box sx={pokemonStyles.Background} data-testid="result">
      <Container sx={pokemonStyles.BackgroundContainer}>
        {/* Header */}
        <Layout
          search={search}
          setSearch={setSearch}
          pokemonList={pokemonList}
          handleSearch={handleSearch}
          setPokemonList={setPokemonList}
          handleResetSearch={handleResetSearch}
          actionOnPressingEnterKey={actionOnPressingEnterKey}
        />
        <div>
          <a href="/pokedex/favorites">Favorites</a>
        </div>
        {/* Pokemon cards container */}
        <Box sx={pokemonStyles.BoxCard}>
          {/* Card */}
          {pokemonList?.length > 0 ? (
            pokemonList?.map((item, index) => (
              <Card
                pokemon={item}
                favorite={favorite}
                setFavorite={setFavorite}
                key={`pokemon-listing-card-${index}`}
              />
            ))
          ) : (
            <></>
          )}
        </Box>
        {pokemonList?.length > 14 && search == "" && (
          <Button
            variant="contained"
            onClick={() => setPaginationLimit(paginationLimit + 15)}
          >
            Load more
          </Button>
        )}
      </Container>
    </Box>
  );
};

export default Pokemon;
