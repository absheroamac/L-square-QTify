import { Card, CardContent, CardMedia, Chip, Typography , Box} from '@mui/material';
import styles from './CardItem.module.css';

function CardItem({ card }) {
  return (
    <Box>
    <Card sx={{borderRadius:'10px', width:'100%'}}>
      <CardMedia 
      component='img'
      image={card.img}
      height="170"
      width={'100%'}/>
  
      <Chip sx={{ margin: '8px 8px', backgroundColor:'black', color:'white'}} label={card.follows}/>
  
    </Card>

    <Typography sx={{color:
      'white', mt:'6px', fontSize:'14px'
    }}>
      {card.title}
    </Typography>
    </Box>


  );
}

export default CardItem;