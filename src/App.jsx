import Navbar from "./components/Navbar";
import Grid from "@mui/material/Grid";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

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
      <Grid
        container
        spacing={2}
        marginTop={0}
        sx={{ px: { xs: 3, sm: 0 }, pr: { sm: 3 } }}
        justifyContent={"space-between"}
      >
        <Grid item sm={2} sx={{ display: { xs: "none", sm: "block" } }}>
          <Sidebar dark={dark} setDark={setDark} />
        </Grid>

        <Grid item sm={8} md={6}>
          <Feed />
        </Grid>

        <Grid item md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <Rightbar />
        </Grid>
      </Grid>
      
    </ThemeProvider>
  );
}

export default App;
