import "./App.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Pokemon from "components/Pokemon/Index";
import Favorite from "components/Favorites/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Container
        sx={{
          width: "100%",
          maxWidth: "1560px",
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Pokemon />} />
            <Route path="/pokedex" element={<Pokemon />} />
            <Route path="/pokedex/favorites" element={<Favorite />} />
          </Routes>
        </Router>
        <ToastContainer />
      </Container>
    </Box>
  );
}

export default App;
