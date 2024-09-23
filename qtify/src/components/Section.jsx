import { Button, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";
import CardItem from "./CardItem";

function Section({data}){

    return(
        <Box>
            <Box>
                <Typography>
                    Title
                </Typography>

                <Button>
                    Title
                </Button>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    {
                    data.map((element)=>{
                        return(<Grid item md={2} key={element.id}>
                            <CardItem card={element}/>
                        </Grid>)
                    })
                }
                    
                </Grid>
            </Box>
        </Box>
    )




}

export default Section;