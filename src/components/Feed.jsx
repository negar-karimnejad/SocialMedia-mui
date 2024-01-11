import { Skeleton, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import CartItem from "./CardItem";

export default function Feed() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Grid container rowSpacing={5}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" width={500} height={500} />
          <Skeleton variant="text" width={500} height={500} />
          <Skeleton variant="text" width={500} height={500} />
        </Stack>
      ) : (
        <>
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
        </>
      )}
    </Grid>
  );
}
