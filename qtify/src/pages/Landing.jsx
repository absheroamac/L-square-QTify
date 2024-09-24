import Navbar from "../components/Nav";
import styles from "./Landing.module.css";
import theme from "../helpers/theme";
import { ThemeProvider } from "@emotion/react";
import Hero from "../components/Hero";
import { Box, Grid } from "@mui/system";
import CardItem from "../components/CardItem";
import { useEffect, useState } from "react";
import axios from "axios";
import Section from "../components/Section";

function Landing() {
  const [newSongs, setNewSongs] = useState([]);

  const getSongs = async (link) => {
    try {
      const res = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/" + link
      );
      if (res.status === 200) {
        setNewSongs(res.data);
        console.log(res.data);
      } else {
        console.log("https error");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSongs("top");
  }, []);

  return (
    <div className={styles.landing}>
      <Navbar />
      <Hero />
      <Section data={newSongs} title="Top Albums" />
    </div>
  );
}

export default Landing;
