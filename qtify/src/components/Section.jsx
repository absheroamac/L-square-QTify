import { Button, Typography } from "@mui/material";
import { Box, Grid, padding } from "@mui/system";
import CardItem from "./CardItem";
import Styles from "./Section.module.css";

function Section({ data }) {
  return (
    <Box
      sx={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ color: "white", fontSize: "20px" }}>Title</Typography>
        <Button sx={{ color: "#34C94B", textTransform: "none" }}>
          Collapse
        </Button>
      </Box>
      <Grid className={Styles.grid}>
        {data.map((element) => {
          return (
            <Grid item md={2} key={element.id}>
              <CardItem card={element} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Section;
