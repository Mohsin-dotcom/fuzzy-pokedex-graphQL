import { Box, Button, Container, Typography } from "@mui/material";
import Select from "react-select";
import { layoutStyles, sortingStyles } from "../../styles/customStyles";
import { nameAscending, nameDescending } from "utils/utils";
import Filters from "./Filters/Index";
import { Icon } from "@iconify/react";
import searchOutlined from "@iconify/icons-ant-design/search-outlined";

const Layout = ({
  search,
  setSearch,
  pokemonList,
  handleSearch,
  setPokemonList,
  handleResetSearch,
  actionOnPressingEnterKey,
}) => {
  const handleSorting = (event) => {
    const { value } = event;
    let sortedList;
    if (value === "asc-name") {
      sortedList = nameAscending(pokemonList);
    } else if (value === "desc-name") {
      sortedList = nameDescending(pokemonList);
      // } else if (value === "asc-type") {
      // sortedList = filterDataByType(pokemonList);
      // console.log(sortedList);
    } // else if (value === 'desc-type') {
    //   sortedList = nameDescending(pokemonList);
    // }
    setPokemonList(sortedList);
  };

  const options = [
    { value: "asc-name", label: "Sort by Name (A-Z)" },
    { value: "desc-name", label: "Sort by Name (Z-A)" },
    // { value: "asc-type", label: "Sort by Type (A-Z)" },
    // { value: "desc-type", label: "Sort by Type (Z-A)" },
  ];

  return (
    <Box sx={layoutStyles.MainBox}>
      <Container sx={layoutStyles.Container}>
        <Typography sx={layoutStyles.Title}>Pokedex</Typography>
        {/* Top functionality bar */}
        <Box sx={layoutStyles.FunctionalityBarBar}>
          {/* Search bar + reset button  */}
          <Box sx={layoutStyles.SearchBar}>
            <Box sx={layoutStyles.SearchTextBox}>
              <Typography sx={layoutStyles.SearchText}>
                Search Pokemons:
              </Typography>
              <div style={{ position: "relative" }}>
                <input
                  name="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  onKeyPress={actionOnPressingEnterKey}
                  placeholder={"Search pokemon"}
                />
                <Box onClick={handleSearch}>
                  <Icon
                    height="40"
                    width="40"
                    icon={searchOutlined}
                    style={layoutStyles.SearchImg}
                  />
                </Box>
              </div>
            </Box>
            {search != "" && (
              <Button sx={layoutStyles.ResetButton} onClick={handleResetSearch}>
                Reset
              </Button>
            )}
          </Box>
          {/* Sorting by name + type  */}
          <Box sx={layoutStyles.SearchTextBox}>
            <Typography sx={layoutStyles.SearchText}>Sort by Name:</Typography>
            <Box
              sx={{
                width: "230px",
              }}
            >
              <Select
                options={options}
                styles={sortingStyles}
                onChange={handleSorting}
                isSearchable={false}
              />
            </Box>
          </Box>
          <Filters setPokemonList={setPokemonList} />
        </Box>
      </Container>
    </Box>
  );
};

export default Layout;
