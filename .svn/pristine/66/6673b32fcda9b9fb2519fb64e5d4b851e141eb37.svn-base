import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import DateRangeIcon from "@material-ui/icons/DateRange";
import MenuItem from "@material-ui/core/MenuItem";
import { Select, Input } from "antd";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import "./Vacation.css";

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
    marginTop: "22px",
    float: "left",
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginRight: 196,
    marginLeft: 35,
    marginTop: 22,
    direction: "rtl",
    border: "0.5px solid #eaeaea",
    boxShadow: "none",
    borderRadius: "2px",
  },
  tableStyle: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: "30px",
  },
  pickerStyle: {
    width: "100%",
    "&:hover": {
      backgroundColor: "#f5f4e8",
    },
  },
}));

const Vacation = () => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const { TextArea } = Input;
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const { Option } = Select;
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <CssBaseline />
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid container style={{ marginBottom: "13px" }}>
              <Grid
                item
                xs={1}
                sm={1}
                lg={1}
                style={{
                  marginTop: "10px",
                  textAlign: "left",
                  paddingLeft: 10,
                }}
              >
                <label>نوع الأجازة</label>
              </Grid>
              <Grid item sm={11} lg={11} xs={11}>
                <Select
                  size="default"
                  placeholder="اختر نوع الأجازة"
                  style={{ width: "100%", marginLeft: "20px" }}
                >
                  <Option key="1">اجازة مرضى</Option>
                  <Option key="2">اجازة عارضة</Option>
                  <Option key="3">اجازة مرضى</Option>
                </Select>
              </Grid>
            </Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <Grid
                  item
                  xs={1}
                  sm={1}
                  lg={1}
                  style={{
                    marginTop: "23px",
                    textAlign: "left",
                    paddingLeft: 10,
                  }}
                >
                  <label>التاريخ من</label>
                </Grid>
                <Grid item xs={10} sm={10} lg={5}>
                  <KeyboardDatePicker
                    className={classes.pickerStyle}
                    margin="normal"
                    id="date-picker-dialog"
                    format="MM/dd/yyyy"
                    InputProps={{
                      disableUnderline: true,
                      style: {
                        border: "2px solid #CACACB",
                        padding: "2px 5px",
                      },
                    }}
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>

                <Grid
                  item
                  xs={1}
                  sm={1}
                  lg={1}
                  style={{
                    marginTop: "23px",
                    textAlign: "left",
                    paddingLeft: 10,
                  }}
                >
                  <label>التاريخ الى</label>
                </Grid>
                <Grid item xs={10} sm={10} lg={5}>
                  <KeyboardDatePicker
                    className={classes.pickerStyle}
                    margin="normal"
                    id="date-picker-dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: {
                        border: "2px solid #CACACB",
                        padding: "2px 5px",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </MuiPickersUtilsProvider>
            <Grid container>
              <Grid item sm={1} style={{ marginTop: "10px" }}>
                <label>عدد ايام الاجازة</label>
              </Grid>
              <Grid item xs={12} lg={5}>
                <TextField
                  placeholder="اختر عدد ايام الاجازة"
                  variant="outlined"
                  required
                  InputProps={{
                    style: { height: "40px" },
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
                <label>المدير المباشر</label>
              </Grid>
              <Grid item lg={5}>
                <TextField
                  variant="outlined"
                  placeholder="اكتب اسم المدير المباشر"
                  required
                  InputProps={{
                    style: { height: "40px" },
                  }}
                  fullWidth
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
                style={{
                  marginTop: "10px",
                  textAlign: "Left",
                  paddingLeft: "10px",
                }}
              >
                <label>السبب</label>
              </Grid>
              <Grid item lg={11}>
                <TextArea rows={4} placeholder="اكتب السبب" />
              </Grid>
              <Grid item lg={12}>
                <div
                  style={{
                    border: "0.3px solid rgb(234 234 234)",
                    marginTop: "104px",
                  }}
                ></div>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                >
                  إرسال
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};
export default Vacation;
