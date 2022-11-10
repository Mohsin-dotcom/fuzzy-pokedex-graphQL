import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Pokemon from "components/Pokemon/Index";
import Favorite from "components/Favorites/Index";
import PageNotFound from "components/PageNotFound/Index";

function App() {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflowX: "hidden",
  };
  return (
    <Box sx={styles}>
      <Container
        sx={{
          width: "100%",
          maxWidth: "1560px",
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Navigate replace to="/pokedex" />} />
            <Route path="/pokedex" element={<Pokemon />} />
            <Route path="/pokedex/favorites" element={<Favorite />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </Container>
    </Box>
  );
}

export default App;
