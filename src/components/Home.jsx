import Grid from "@mui/material/Grid";
import Feed from "./Feed";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";

// eslint-disable-next-line react/prop-types
export default function Home({ dark, setDark }) {
  return (
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
  );
}
