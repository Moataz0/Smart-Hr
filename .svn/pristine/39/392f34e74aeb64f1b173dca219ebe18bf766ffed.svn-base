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
import MeasuresTable from "./MeasuresTable";
import "./attendance.css";
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

const MeasuresTab = () => {
  const classes = useStyles();
  const { Option } = Select;
  return (
    <div>
      <Paper className={classes.paper}>
        <CssBaseline />
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid container>
              <Grid
                item
                sm={1}
                style={{
                  fontSize: "16px",
                  marginTop: "10px",
                  textAlign: "left",
                  paddingLeft: "10px",
                }}
              >
                <label>الفرع</label>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Select
                  size="default"
                  //   defaultValue="0"
                  placeholder="أختر الفرع"
                  style={{ width: "100%" }}
                >
                  <Option key="1">الكل</Option>
                  <Option key="1">الموافق عليها</Option>
                  <Option key="2">قيد الأنتظار</Option>
                  <Option key="3">المرفوضة</Option>
                </Select>
              </Grid>
            </Grid>
            <Grid container style={{ marginTop: "13px" }}>
              <Grid item sm={1} style={{ fontSize: "16px", marginTop: "10px" }}>
                <label>اسم الموظف</label>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  placeholder="اكتب اسم الموظف"
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

              <Grid item sm={1} style={{ fontSize: "16px", marginTop: "10px" }}>
                <label>كود البصمة</label>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  placeholder="اكتب كودالبصمة"
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
            </Grid>

            <Grid container style={{ marginTop: "13px" }}>
              <Grid item sm={1} style={{ fontSize: "16px", marginTop: "10px" }}>
                <label> الحالة</label>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Select
                  size="default"
                  //   defaultValue="0"
                  placeholder="أختر الحالة"
                  style={{ width: "100%" }}
                >
                  <Option key="1">الكل</Option>
                  <Option key="2">الموافق عليها</Option>
                  <Option key="3">قيد الأنتظار</Option>
                  <Option key="4">المرفوضة</Option>
                </Select>
              </Grid>

              <Grid item sm={1} style={{ fontSize: "16px", marginTop: "10px" }}>
                <label>التاريخ</label>
              </Grid>
              <Grid item xs={12} style={{ maxWidth: "377px" }}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  placeholder="اختر التاريخ"
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
          <MeasuresTable />
        </Grid>
      </Grid>
    </div>
  );
};
export default MeasuresTab;
