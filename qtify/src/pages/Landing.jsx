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
import Carousel from "../components/Carousel";

function Landing() {
  const [newSongs, setNewSongs] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [songs, setSongs] = useState([]);
  const [generes, setGeneres] = useState({});

  const getData = async (link, setSong) => {
    try {
      const res = await axios.get(link);
      if (res.status === 200) {
        setSong(res.data);
        console.log(res.data, link);
      } else {
        console.log("https error");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData("https://qtify-backend-labs.crio.do/albums/top", setTopSongs);
    getData("https://qtify-backend-labs.crio.do/albums/new", setNewSongs);
    getData("https://qtify-backend-labs.crio.do/songs", setSongs);
    getData("https://qtify-backend-labs.crio.do/genres", setGeneres);
  }, []);

  return (
    <div className={styles.landing}>
      <Navbar />
      <Hero />
      <Section data={songs} title="Songs" type="songs" tabs={generes.data} />
      <Section data={topSongs} title="Top Albums" type="albums" />
      <Section data={newSongs} title="New Albums" type="albums" />
    </div>
  );
}

export default Landing;
