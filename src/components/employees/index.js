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
import TableEmp from "./TableEmp";
import "./employees.css";
import { useState } from "react";

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
    marginRight: 196,
    marginLeft: 35,
    marginTop: 22,
    direction: "rtl",
    border: "0.5px solid #b1b1b1",
    boxShadow: "none",
    borderRadius: "2px",
  },
  tableStyle: {
    paddingLeft: 32,
    paddingRight: 32,
  },
}));
var childContext = "";
export default function Employees() {
  const classes = useStyles();
  const [ar_name, set_ar_name] = useState(null);
  const [finger_print_id, set_finger_print_id] = useState(null);
  const [join_date, set_join_date] = useState(null);
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <CssBaseline />
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid container>
              <Grid
                item
                lg={1}
                sm={2}
                xs={6}
                style={{ fontSize: "16px", marginTop: "10px" }}
              >
                <label>اسم الموظف</label>
              </Grid>
              <Grid item xs={6} sm={10} lg={9}>
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
                  value={ar_name}
                  autoFocus
                  onChange={({ target: { value } }) => {
                    set_ar_name(value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid container style={{ marginTop: "13px" }}>
              <Grid
                item
                lg={1}
                xs={6}
                sm={2}
                style={{ fontSize: "16px", marginTop: "10px" }}
              >
                <label>كود البصمة</label>
              </Grid>
              <Grid item lg={4} xs={6} sm={10}>
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
                  value={finger_print_id}
                  onChange={({ target: { value } }) => {
                    set_finger_print_id(value);
                  }}
                />
              </Grid>

              <Grid
                item
                lg={2}
                sm={2}
                xs={6}
                style={{ fontSize: "16px", marginTop: "10px" }}
              >
                <label>تاريخ التعيين</label>
              </Grid>
              <Grid
                item
                lg={3}
                xs={5}
                sm={9}
                style={{ marginRight: "-36px" }}
                className="dateFilter"
              >
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
                  value={join_date}
                  onChange={({ target: { value } }) => {
                    set_join_date(value);
                  }}
                />
              </Grid>
              <div
                className="dateIcon"
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
              <Grid item lg={1} sm={12} xs={12}>
                <Button
                  id="searchBtn"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  onClick={() => {
                    childContext.getEmployees(0, {
                      ...(ar_name ? { ar_name } : {}),
                      ...(finger_print_id ? { finger_print_id } : {}),
                      ...(join_date ? { join_date } : {}),
                    });
                    set_ar_name("");
                    set_finger_print_id("");
                    set_join_date("");
                  }}
                >
                  بحث
                </Button>
              </Grid>         
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Grid container className={classes.tableStyle}>
        <Grid sm={12} item style={{ marginRight: "160px" }}>
          <Box
            display="flex"
            justifyContent="flex-end"
            m={1}
            p={1}
            bgcolor="background.paper"
          >
            <Box p={1}>
              <Typography
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "#2B2D35",
                }}
              >
                جميع الموظفين
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="flex-start" m={1} p={1}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#FEA900",
                color: "#FFF",
                fontWeight: "600",
                fontSize: "18px",
                width: "196px",
                borderRadius: "2px",
                boxShadow: "none",
                marginLeft: "-15px",
              }}
            >
              إضافة موظف جديد
            </Button>
          </Box>

          <TableEmp
            setChildContext={(context) => {
              childContext = context;
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
