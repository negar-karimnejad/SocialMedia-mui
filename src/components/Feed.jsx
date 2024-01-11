import Grid from "@mui/material/Grid";
import CartItem from "./CardItem";

export default function Feed() {
  return (
    <Grid container rowSpacing={5}>
      <Grid item>
        <CartItem src="/static/images/cards/1.jfif" />
      </Grid>
      <Grid item>
        <CartItem src="/static/images/cards/2.jfif" />
      </Grid>
      <Grid item>
        <CartItem src="/static/images/cards/3.jfif" />
      </Grid>
      <Grid item>
        <CartItem src="/static/images/cards/4.jfif" />
      </Grid>
      <Grid item>
        <CartItem src="/static/images/cards/5.jfif" />
      </Grid>
      <Grid item>
        <CartItem src="/static/images/cards/6.jfif" />
      </Grid>
    </Grid>
  );
}
