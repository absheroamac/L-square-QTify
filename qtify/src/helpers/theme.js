import { createTheme, fontFamily } from "@mui/system";

const theme = createTheme({

    palette:{
        primary:{
            main:'#34C94B'
        },
        secondary:{
            main:'#121212'
        },
        white:{
            main:'#FFFFFF'
        }

    },

    typography:{
        fontFamily:[
            'Poppins'
        ]
    }
    
})

export default theme;