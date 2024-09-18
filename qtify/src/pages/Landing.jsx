import Navbar from "../components/Nav";
import styles from "./Landing.module.css";
import theme from "../helpers/theme";
import { ThemeProvider } from "@emotion/react";
import Hero from "../components/Hero";

function Landing(){
    return (
        <ThemeProvider theme={theme}>
        <div className={styles.landing}>
            <Navbar/>
            <Hero/>
        </div>
        </ThemeProvider>
    )
}

export default Landing;