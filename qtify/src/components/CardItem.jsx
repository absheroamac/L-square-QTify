import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  Box,
} from "@mui/material";
import styles from "./CardItem.module.css";

function CardItem({ card, type }) {
  return (
    <div sx={{ width: "100%" }}>
      <Card sx={{ borderRadius: "10px", width: "100%" }}>
        <CardMedia
          component="img"
          image={card.image}
          height="170"
          width={"100%"}
        />

        {type === "songs" ? (
          <Chip
            sx={{ margin: "8px 8px", backgroundColor: "black", color: "white" }}
            label={card.follows + " Follows"}
          />
        ) : (
          <Chip
            sx={{ margin: "8px 8px", backgroundColor: "black", color: "white" }}
            label={card.likes + " Likes"}
          />
        )}
      </Card>

      <Typography sx={{ color: "white", mt: "6px", fontSize: "14px" }}>
        {card.title}
      </Typography>
    </div>
  );
}

export default CardItem;
