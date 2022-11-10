import { Box, Container, Typography } from "@mui/material";
import Card from "components/Layout/Card";
import { favoritePokemonStyles } from "styles/customStyles";
import { useEffect, useState } from "react";

const Favorite = () => {
  const [favorite, setFavorite] = useState(false);
  const [favoritePokemonList, setFavoritePokemonList] = useState([]);

  const getFavoritePokemons = () => {
    let favoritesList = JSON.parse(localStorage.getItem("favoritePokemons"));
    setFavoritePokemonList(favoritesList);
  };

  useEffect(() => {
    getFavoritePokemons();
  }, [favorite]);

  return (
    <Box sx={favoritePokemonStyles.Background}>
      <Container sx={favoritePokemonStyles.Container}>
        <Typography sx={favoritePokemonStyles.Heading}>Pokedex</Typography>
        {/* Favorite pokemons container */}
        <Box sx={favoritePokemonStyles.PokemonContainer}>
          {favoritePokemonList?.length > 0 && (
            <Typography sx={favoritePokemonStyles.FavoriteHeading}>
              Your Favourites:
            </Typography>
          )}
        </Box>
        <Box sx={favoritePokemonStyles.BoxCard}>
          {/* Card */}
          {favoritePokemonList?.length > 0 &&
            favoritePokemonList?.map((item, index) => (
              <Card
                pokemon={item}
                favorite={favorite}
                setFavorite={setFavorite}
                key={`favorite-pokemon-listing-card-${index}`}
              />
            ))}
        </Box>
        {(favoritePokemonList?.length === 0 ||
          favoritePokemonList === null) && (
          <Typography sx={favoritePokemonStyles.NoMoreFavoriesTitle}>
            No favourites found.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Favorite;
