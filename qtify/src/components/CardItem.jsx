import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  Box,
} from "@mui/material";
import styles from "./CardItem.module.css";

function CardItem({ card }) {
  console.log(card.img);

  return (
    <div sx={{ width: "100%" }}>
      <Card sx={{ borderRadius: "10px", width: "100%" }}>
        <CardMedia
          component="img"
          image={card.image}
          height="170"
          width={"100%"}
        />

        <Chip
          sx={{ margin: "8px 8px", backgroundColor: "black", color: "white" }}
          label={card.follows + " Follows"}
        />
      </Card>

      <Typography sx={{ color: "white", mt: "6px", fontSize: "14px" }}>
        {card.title}
      </Typography>
    </div>
  );
}

export default CardItem;
