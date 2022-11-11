//Sort by name and type select box styles
export const sortingStyles = {
  container: ({ provided }) => ({
    ...provided,
    width: "100%",
    position: "relative",
  }),
};

//fitler by abilities select box styles
export const abilitiesFilterStyles = {
  container: ({ provided }) => ({
    ...provided,
    width: "100%",
    position: "relative",
  }),
};

//fitler by types select box styles
export const typesFilterStyles = {
  container: ({ provided }) => ({
    ...provided,
    width: "100%",
    position: "relative",
  }),
};

export const cardStyles = {
  Background: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: "4px",
    maxWidth: { xs: "280px", sm: "100%" },
    px: 1.5,
    py: 1.5,
    mx: 1,
    my: 1,
  },
  Image: {
    "& img": {
      height: "190px",
      maxWidth: "220px",
      background: "lightgrey",
      borderRadius: "4px",
    },
    layout: "fill",
    objectFit: "contain",
  },
  Textbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    // px: 2,
    my: 1,
    pt: 0.7,
    borderTop: "2px solid gray",
  },
  InternalTextbox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    mb: 1,
  },
  Types: {
    color: "black",
    borderRadius: "4px",
    px: 0.5,
    py: 0.5,
    fontSize: "12px",
    textAlign: "left",
    width: "100%",
    textTransform: "capitalize",
  },
  TypesWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "left",
    py: 0.3,
    px: 0.4,
    width: "100%",
  },
  TypesText: {
    py: 0.1,
    px: 0.9,
    backgroundColor: "#B97FC9",
    color: "white",
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: "16px",
    ml: 1,
  },
  Name: {
    backgroundColor: "#da471b",
    color: "white",
    borderRadius: "4px",
    px: 1,
    py: 0.5,
    fontSize: "18px",
    textAlign: "center",
    width: "100%",
    textTransform: "capitalize",
  },
  cursor: {
    cursor: "pointer",
  },
};

export const pokemonStyles = {
  Background: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    overflowX: "hidden",
    mt: 5,
    px: 1,
    pb: 2,
  },
  ViewFavorites: {
    textAlign: "right",
    width: "100%",
    marginTop: 20,
    marginRight: 15,
  },
  BackgroundContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: "xl",
  },
  BoxCard: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "1fr 1fr 1fr",
    },
    justifyItems: { xs: "center", sm: "stretch" },
    width: "100%",
    // mt: 7,
  },
};

export const favoritePokemonStyles = {
  Background: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    mt: 4,
  },
  Container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: "xl",
    width: "100%",
    pl: { xs: 0 },
    pr: { xs: 0 },
  },
  Heading: {
    fontSize: { xs: "40px", sm: "68px" },
    fontWeight: "700",
    color: "#da471b",
  },
  PokemonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    mt: 7,
  },
  FavoriteHeading: {
    fontSize: { xs: "24px", sm: "30px" },
    fontWeight: "700",
    color: "black",
    width: "100%",
    textAlign: "left",
  },
  BoxCard: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "1fr 1fr 1fr",
    },
    justifyItems: { xs: "center", sm: "stretch" },
    width: "100%",
    mt: 2,
  },
  NoMoreFavoriesTitle: {
    fontSize: { xs: "24px", sm: "30px" },
    fontWeight: "700",
    color: "black",
    width: "100%",
    textAlign: "center",
    fontStyle: "italic",
  },
};

export const layoutStyles = {
  MainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    mt: 2,
  },
  Container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: "xl",
    pl: { xs: 0 },
    pr: { xs: 0 },
  },
  Title: {
    fontSize: { xs: "40px", sm: "65px" },
    fontWeight: "700",
    color: "#da471b",
    marginBottom: 2,
  },
  FunctionalityBarBar: {
    display: "flex",
    justifyContent: { xs: "center", sm: "space-between" },
    alignItems: "center",
    flexDirection: { xs: "column", sm: "row" },
    flexWrap: "wrap",
    maWidth: "lg",
    width: "100%",
  },
  SearchBar: {
    display: "flex",
    justifyContent: { xs: "center ", sm: "space-between" },
    alignItems: { xs: "center", sm: "flex-end" },
    flexDirection: { xs: "column", sm: "row" },
    "& input": {
      px: 0.6,
      py: 1.2,
      border: "2px solid #616161",
      outline: "none",
      width: "230px",
      mr: { xs: 0, sm: 0.5 },
      borderRadius: "4px",
      fontSize: "16px",
      color: "#616161",
      "::placeholder": {
        color: "#616161",
      },
    },
    "& input:focus": {
      outline: "none",
    },
  },
  SearchTextBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  SearchText: {
    color: "black",
    py: 0.5,
    fontSize: "20px",
    fontWeight: "600",
    textAlign: "left",
  },
  ResetButton: {
    backgroundColor: "#da471b",
    color: "white",
    textTransform: "capitalize",
    fontSize: "16px",
    width: { xs: "100%", sm: "auto" },
    mt: { xs: 1, sm: 0 },
    mb: { xs: 1, sm: 0 },
    px: 2,
    "&:hover": {
      backgroundColor: "#da471b",
    },
  },
  SearchImg: {
    position: "absolute",
    top: "0px",
    left: "190px",
    padding: "10px",
  },
};
