import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import Home from "./components/Home";
import Add from "./components/Add";

function App() {
  const [dark, setDark] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Home dark={dark} setDark={setDark} />
      <Add />
    </ThemeProvider>
  );
}

export default App;
