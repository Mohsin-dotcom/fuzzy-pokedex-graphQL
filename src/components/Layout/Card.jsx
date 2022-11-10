import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import heartIcon from "@iconify/icons-akar-icons/heart";
import heartFilled from "@iconify/icons-ant-design/heart-filled";
import { cardStyles } from "../../styles/customStyles";

const Card = ({ pokemon, favorite, setFavorite }) => {
  const [favoritePokemonList, setFavoritePokemonList] = useState([]);

  useEffect(() => {
    // get favorite pokemon list from local storage on initial render
    let lsItems = JSON.parse(localStorage.getItem("favoritePokemons"));
    setFavoritePokemonList(lsItems);
  }, [favorite]);

  const handleSavePokemonAsFavorite = (pokemon) => {
    // get favorite pokemon list from localstorage
    let lsItems = JSON.parse(localStorage.getItem("favoritePokemons"));
    //if localstorage is empty -> means no pokemon is saved as favorite yet.
    if (lsItems === null) {
      let pokemonArray = [pokemon];
      localStorage.setItem("favoritePokemons", JSON.stringify(pokemonArray));
      setFavoritePokemonList(pokemonArray);
    } else {
      //localstorage is not empty

      //if current pokemon ID is already in the favorite pokemon list
      //then that means user wants to remove it from favorites

      //check if ID already exists in localstorage
      let filteredList = lsItems.filter((item) => item.id === pokemon.id);

      //if pokemon ID already exists then remove it from the favorite list
      if (filteredList.length > 0) {
        let filteredItem = lsItems.filter((item) => item.id !== pokemon.id);
        localStorage.setItem("favoritePokemons", JSON.stringify(filteredItem));
        setFavoritePokemonList(filteredItem);
      } else {
        //localstorage is not empty and pokemon is not saved as favorite already
        let arr = [...lsItems, pokemon];
        localStorage.setItem("favoritePokemons", JSON.stringify(arr));
        setFavoritePokemonList(arr);
      }
      setFavorite(!favorite);
    }
  };

  return (
    <Box sx={cardStyles.Background}>
      <Box sx={cardStyles.Image}>
        <img src={pokemon.sprites?.front_default} alt={`${pokemon.name}-img`} />
      </Box>
      <Box sx={cardStyles.Textbox}>
        <Box sx={cardStyles.InternalTextbox}>
          <Typography sx={cardStyles.Types}>
            <Box sx={cardStyles.TypesWrapper}>
              {pokemon.types.map((type, index) => (
                <Typography key={index} sx={cardStyles.TypesText}>
                  {type.name}
                </Typography>
              ))}
            </Box>
          </Typography>
          <Box
            sx={cardStyles.cursor}
            onClick={() => handleSavePokemonAsFavorite(pokemon)}
          >
            {/* if favorite pokemon list has the id of the pokemon then show the filled heart */}
            {favoritePokemonList?.find((item) => item.id == pokemon.id) ? (
              <Icon icon={heartFilled} color="#da471b" width="30" height="30" />
            ) : (
              <Icon icon={heartIcon} color="#da471b" width="30" height="30" />
            )}
          </Box>
        </Box>
        <Typography sx={cardStyles.Name}>{pokemon.name}</Typography>
      </Box>
    </Box>
  );
};

export default Card;
