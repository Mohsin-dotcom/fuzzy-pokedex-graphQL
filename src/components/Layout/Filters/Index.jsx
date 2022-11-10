import { useLazyQuery, useQuery } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import { abilitiesFilterStyles, typesFilterStyles } from "styles/customStyles";
import { useEffect, useState } from "react";
import Select from "react-select";
import {
  GET_ABILITY_BY_ID,
  GET_POKEMON_ABILITIES,
  GET_POKEMON_TYPES,
  GET_TYPE_BY_ID,
} from "services/gqlQueries";

const Filters = ({ setPokemonList }) => {
  const [abilitiesList, setAbilitiesList] = useState();
  const [pokemonTypesList, setPokemonTypesList] = useState();

  const { data: allTypesData } = useQuery(GET_POKEMON_TYPES);
  const { data: allAbilitiesData } = useQuery(GET_POKEMON_ABILITIES);

  const [getAbilityById, { data: abilityByIdData }] =
    useLazyQuery(GET_ABILITY_BY_ID);

  const [getTypeById, { data: typeByIdData }] = useLazyQuery(GET_TYPE_BY_ID);

  useEffect(() => {
    if (allAbilitiesData?.allAbilities) {
      setAbilitiesList(allAbilitiesData?.allAbilities);
    }
  }, [allAbilitiesData]);

  useEffect(() => {
    if (allTypesData?.allTypes) {
      setPokemonTypesList(allTypesData?.allTypes);
    }
  }, [allTypesData?.allTypes]);

  useEffect(() => {
    if (abilityByIdData?.ability) {
      setPokemonList(abilityByIdData?.ability?.pokemon);
    }
  }, [abilityByIdData]);

  useEffect(() => {
    if (typeByIdData?.type) {
      setPokemonList(typeByIdData?.type?.pokemon);
    }
  }, [typeByIdData]);

  const handleFilter = (event, actionMeta) => {
    const { id } = event;
    const { name } = actionMeta;
    if (id) {
      let payload = { variables: { id: Number(id) || id !== null } };
      name == "type" ? getTypeById(payload) : getAbilityById(payload);
    }
  };

  const abilitiesOptions = abilitiesList?.map((ability) => ({
    id: ability.id,
    value: ability.name,
    label: ability.name,
  }));

  const typesOptions = pokemonTypesList?.map((type) => ({
    id: type.id,
    value: type.name,
    label: type.name,
  }));

  const styles = {
    Box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "column",
      mt: { xs: 1, sm: 0 },
    },
    Title: {
      color: "black",
      py: 0.5,
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "left",
    },
  };

  return (
    <>
      {/*Filter by abilities  */}
      <Box sx={styles.Box}>
        <Typography sx={styles.Title}>Filter by Abilities:</Typography>
        <Box
          sx={{
            width: { xs: "230px", sm: "170px" },
          }}
        >
          <Select
            name="ability"
            // isClearable
            onChange={handleFilter}
            options={abilitiesOptions}
            styles={abilitiesFilterStyles}
          />
        </Box>
      </Box>
      {/*Filter by types  */}
      <Box sx={styles.Box}>
        <Typography sx={styles.Title}>Filter by Types:</Typography>
        <Box
          sx={{
            width: { xs: "230px", sm: "170px" },
          }}
        >
          <Select
            name="type"
            onChange={handleFilter}
            options={typesOptions}
            styles={typesFilterStyles}
          />
        </Box>
      </Box>
    </>
  );
};

export default Filters;
