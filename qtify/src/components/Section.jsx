import { Button, Typography, Tab, Tabs } from "@mui/material";
import { Box, Grid, padding } from "@mui/system";
import CardItem from "./CardItem";
import Styles from "./Section.module.css";
import GridList from "./GridList";
import { useState } from "react";
import Carousel from "./Carousel";

function Section({ data, title, type = null, tabs = [] }) {
  console.log(data);
  console.log(tabs);
  const [expand, setExpand] = useState(false);
  const [tabValue, setTabValue] = useState("all");
  console.log(data, title);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const filterData = (data) => {
    if (tabValue === "all") {
      return data;
    }
    return data.filter((data) => data.genre.key === tabValue);
  };

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

        {type != "songs" &&
          (expand ? (
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
          ))}
      </Box>
      {type === "songs" ? (
        <Box sx={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          <Box>
            <Tabs
              sx={{
                "& .MuiTab-root": {
                  fontSize: "1rem", // Adjust the font size for - Tab
                  color: "#FFFFFF", // Tab text color
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#34C94B", // Indicator color
                  color: "#FFFFFF",
                },
                "& .MuiTab-root.Mui-selected": {
                  color: "#FFFFFF", // Active Tab text color
                },
              }}
              value={tabValue}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="All"
                key="all"
                value="all"
                sx={{ textTransform: "none" }}
              />
              {tabs.length > 0 &&
                tabs.map((tab) => {
                  return (
                    <Tab
                      label={tab.label}
                      key={tab.key}
                      value={tab.key}
                      sx={{ textTransform: "none" }}
                    />
                  );
                })}
            </Tabs>
          </Box>
          <Box>
            <Carousel data={filterData(data)} type={type} />
          </Box>
        </Box>
      ) : expand ? (
        <GridList data={data} />
      ) : (
        <Carousel data={data} />
      )}
    </Box>
  );
}

export default Section;
