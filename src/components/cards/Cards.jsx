import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@material-ui/core";
import {
  LocalHospital,
  InsertEmoticon,
  Hotel,
  EventBusy,
} from "@material-ui/icons";

import classes from "./Cards.module.css";

const Cards = ({ details: { confirmed, recovered, deaths, treated } }) => {
  const cardsDetail = [
    {
      case: "Infected",
      number: confirmed,
      style: classes.infected,
      icon: <LocalHospital style={{ color: "red", fontSize: 40 }} />,
    },
    {
      case: "Deaths",
      number: deaths,
      style: classes.deaths,
      icon: <EventBusy style={{ color: "red", fontSize: 40 }} />,
    },
    {
      case: "Active",
      number: treated,
      style: classes.active,
      icon: <Hotel style={{ color: "#ffa800", fontSize: 40 }} />,
    },
    {
      case: "Recovered",
      number: recovered,
      style: classes.recovered,
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
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Cards;
