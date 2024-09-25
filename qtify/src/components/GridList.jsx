import { Box, Grid, padding } from "@mui/system";
import CardItem from "./CardItem";
import Styles from "./Section.module.css";

function GridList(data) {
  return (
    <Grid className={Styles.grid}>
      {data.data.length > 0 &&
        data.data.map((element) => {
          return (
            <Grid item md={2} key={element.id}>
              <CardItem card={element} />
            </Grid>
          );
        })}
    </Grid>
  );
}

export default GridList;
