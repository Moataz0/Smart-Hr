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
import TableAttendance from "./TableAttendance";
import { Tabs } from "antd";
import "./attendance.css";
import csx from "classnames";
import MeasuresTab from "./MeasuresTab";

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
    <Grid item xs={12} id="attendance">
      <Tabs type="card"  className={csx(classes.tabsStyle)}>
        <TabPane tab="الحضور والانصراف" key="1">
          <Paper className={classes.paper}>
            <CssBaseline />
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid container>
                  <Grid
                    item
                    sm={1}
                    style={{ fontSize: "16px", marginTop: "10px" }}
                  >
                    <label>اسم الموظف</label>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <TextField
                      variant="outlined"
                      required
                      InputProps={{
                        style: { height: "40px", fontSize: "15px" },
                      }}
                      fullWidth
                      InputLabelProps={{
                        style: {
                          direction: "rtl",
                        },
                      }}
                      id="email"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                </Grid>
                <Grid container style={{ marginTop: "13px" }}>
                  <Grid
                    item
                    sm={1}
                    style={{ fontSize: "16px", marginTop: "10px" }}
                  >
                    <label>كود البصمة</label>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      InputLabelProps={{
                        style: {
                          direction: "rtl",
                          width: "90%",
                        },
                      }}
                      InputProps={{
                        style: { height: "40px", fontSize: "15px" },
                      }}
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      autoFocus
                    />
                  </Grid>

                  <Grid
                    item
                    sm={2}
                    style={{ fontSize: "16px", marginTop: "10px" }}
                  >
                    <label>تاريخ التعيين</label>
                  </Grid>
                  <Grid item xs={12} sm={3} style={{ marginRight: "-36px" }}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                        style: {
                          fontSize: "17px",
                          direction: "rtl",
                        },
                      }}
                      InputProps={{
                        style: { height: "40px", fontSize: "15px" },
                      }}
                      id="lastName"
                      name="lastName"
                      autoComplete="lname"
                    />
                  </Grid>
                  <div
                    style={{
                      backgroundColor: "#EFEFEF",
                      height: "40px",
                      marginRight: "6px",
                      borderRadius: "3px",
                    }}
                  >
                    <DateRangeIcon
                      style={{
                        fontSize: "26px",
                        marginTop: "6px",
                        marginLeft: "2px",
                        marginRight: "2px ",
                      }}
                      edge="end"
                      aria-label="account of current user"
                      aria-haspopup="true"
                      color="inherit"
                    />
                  </div>

                  <Grid item xs={12} sm={1}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className={classes.submit}
                    >
                      بحث
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Paper>
          <Grid container className={classes.tableStyle}>
            <Grid sm={12} item>
              <Box
                display="flex"
                justifyContent="flex-start"
                bgcolor="background.paper"
              >
                <Box p={1}>
                  <Typography
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#2B2D35",
                      margin: "14px 0px",
                    }}
                  >
                    حضور وانصراف جميع الموظفين
                  </Typography>
                </Box>
              </Box>
              <TableAttendance />
            </Grid>
          </Grid>
        </TabPane>
        <TabPane tab="الاجراءات" key="2">
          <MeasuresTab />
        </TabPane>
      </Tabs>
    </Grid>
  );
}
