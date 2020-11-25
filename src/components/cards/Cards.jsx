import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@material-ui/core";
import {
  LocalHospital,
  InsertEmoticon,
  Hotel,
  EventBusy,
  TrendingUp,
} from "@material-ui/icons";

import classes from "./Cards.module.css";

const Cards = ({
  details: {
    confirmed,
    recovered,
    deaths,
    treated,
    new_confirmed,
    new_recovered,
    new_deaths,
    new_treated,
  },
}) => {
  const cardsDetail = [
    {
      case: "Infected",
      number: confirmed,
      dailyNum: new_confirmed,
      style: classes.infected,
      iconColor: "red",
      icon: <LocalHospital style={{ color: "red", fontSize: 40 }} />,
    },
    {
      case: "Deaths",
      number: deaths,
      dailyNum: new_deaths,
      style: classes.deaths,
      iconColor: "red",
      icon: <EventBusy style={{ color: "red", fontSize: 40 }} />,
    },
    {
      case: "Active",
      number: treated,
      dailyNum: new_treated,
      style: classes.active,
      iconColor: "#ffa800",
      icon: <Hotel style={{ color: "#ffa800", fontSize: 40 }} />,
    },
    {
      case: "Recovered",
      number: recovered,
      dailyNum: new_recovered,
      style: classes.recovered,
      iconColor: "green",
      icon: <InsertEmoticon style={{ color: "green", fontSize: 40 }} />,
    },
  ];
  return (
    <div>
      <Grid container className={classes.container}>
        {cardsDetail.map((item, num) => (
          <Grid item key={num} component={Card} className={classes.paper}>
            <CardContent
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className={item.style}
            >
              <Box>
                <Typography
                  variant="h6"
                  style={{
                    color: "#8a98ac",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  {item.case}
                </Typography>
                <Typography
                  variant="h4"
                  style={{ color: "#000a12", fontWeight: "600" }}
                >
                  {item.number}
                </Typography>
              </Box>
              {item.icon}
            </CardContent>
            <Divider />
            {/*
            /the little box that show the daily number 
            */}
            <Box style={{ padding: 16 }} className={item.style}>
              <div
                style={{
                  backgroundColor: item.iconColor,
                  color: "white",
                }}
                className={classes.dailyNumContainer}
              >
                <TrendingUp style={{ fontSize: 16, fontWeight: "bold" }} />
                <span style={{ fontSize: 14, fontWeight: "bold" }}>
                  {item.dailyNum}
                </span>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Cards;
