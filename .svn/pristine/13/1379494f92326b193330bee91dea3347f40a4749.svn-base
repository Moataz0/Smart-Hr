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
import { Tabs, Radio, TabPane } from "antd";
import "./Resignation.css";
import { Select } from "antd";
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
    marginBottom: "-1px",
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

const TabAll = () => {
  const classes = useStyles();
  const { Option } = Select;
  return (
    <div>
      <Paper className={classes.paper}>
        <CssBaseline />
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item sm={1} style={{ marginTop: "10px" }}>
              <label>اسم الموظف</label>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                placeholder="اكتب اسم الموظف"
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
            <Grid item sm={1} style={{ marginTop: "10px" }}>
              <label>كود البصمة</label>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                placeholder="اكتب كود البصمة"
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

            <Grid item xs={12} sm={2}>
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
        </form>
      </Paper>
    </div>
  );
};
export default TabAll;
