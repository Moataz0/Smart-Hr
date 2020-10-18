import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Table from "./Table";
import Upload from "./Upload";
import { Tabs } from "antd";
import "./Resignation.css";
import csx from "classnames";
import TabAll from "./TabAll";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    backgroundColor: "#93C020",
    color: "#FFF",
    width: "156px",
    boxShadow: "none",
    marginRight: "2.7rem",
    borderRadius: "2px",
    fontWeight: "600",
    fontSize: "18px",
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: theme.palette.text.secondary,
    // marginRight: 196,
    marginLeft: 35,
    marginTop: 22,
    direction: "rtl",
    border: "0.5px solid #b1b1b1",
    boxShadow: "none",
    borderRadius: "2px",
  },
  tableStyle: {
    paddingLeft: 32,
    // paddingRight: 32,
  },
  tabsStyle: {
    marginRight: 196,
  },
}));

export default function Attendance() {
  const classes = useStyles();
  const { TabPane } = Tabs;
  return (
    <Grid item xs={12} id="resignation" >
      <Tabs type="card" className={csx(classes.tabsStyle)}>
        <TabPane tab="الكل" key="1">
        <TabAll />
        <Grid container className={classes.tableStyle}>
            <Grid sm={12} item>
              <Table />
            </Grid>
          </Grid>
        </TabPane>
        <TabPane tab="تحميل استقالة" key="2">
          <Upload />
        </TabPane>
      </Tabs>
    </Grid>
  );
}
