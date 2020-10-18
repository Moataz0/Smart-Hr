import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Input } from "antd";
import DateRangeIcon from "@material-ui/icons/DateRange";
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

const Upload = () => {
  const classes = useStyles();
  const { TextArea } = Input;
  const { Option } = Select;
  return (
    <Paper className={classes.paper}>
      <Grid sm={12} item>
        <Grid container spacing={2}>
          <Grid container>
            <Grid item sm={1} style={{ fontSize: "16px", marginTop: "10px" }}>
              <label>اسم الموظف</label>
            </Grid>
            <Grid item xs={12} sm={5}>
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
            <Grid item sm={1} style={{ fontSize: "16px", marginTop: "10px" }}>
              <label>كود البصمة</label>
            </Grid>
            <Grid item xs={12} sm={5}>
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
          </Grid>
          <Grid container style={{ marginTop: "13px" }}>
            <Grid item sm={1} style={{ marginTop: "10px" }}>
              <label>تحميل الاستقالة</label>
            </Grid>
            <Grid item style={{ width: "88%" }}>
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
          </Grid>
          <Grid container style={{ marginTop: "20px" }}>
            <Grid item sm={1}>
              <Box p={1}>
                <Typography
                  style={{
                    color: "#2B2D35",
                  }}
                >
                  السبب
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={11}>
              <TextArea rows={8} />
            </Grid>
            <Grid lg={12} style={{ border: "0.3px solid rgb(220 220 220)",marginTop: "10rem",  }}></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              style={{ textAlign: "left",paddingTop: "1rem",  }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                إضافة
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Upload;
