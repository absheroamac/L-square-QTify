import { Button, Typography } from "@mui/material";
import { Box, Grid, padding } from "@mui/system";
import CardItem from "./CardItem";
import Styles from "./Section.module.css";
import GridList from "./GridList";
import { useState } from "react";
import Carousel from "./Carousel";

function Section({ data, title }) {
  const [expand, setExpand] = useState(false);
  console.log(data, title);

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
        <Typography sx={{ color: "white", fontSize: "20px" }}>
          {title}
        </Typography>

        {expand ? (
          <Button
            sx={{ color: "#34C94B", textTransform: "none" }}
            onClick={() => setExpand(false)}
          >
            Collapse
          </Button>
        ) : (
          <Button
            sx={{ color: "#34C94B", textTransform: "none" }}
            onClick={() => setExpand(true)}
          >
            Show all
          </Button>
        )}
      </Box>

      {expand ? <GridList data={data} /> : <Carousel data={data} />}
    </Box>
  );
}

export default Section;
