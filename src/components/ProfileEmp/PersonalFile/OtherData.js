import React from "react";
import { Collapse } from "antd";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { UserOutlined } from "@ant-design/icons";
import SubdirectoryArrowRightRoundedIcon from "@material-ui/icons/SubdirectoryArrowRightRounded";
import Paper from "@material-ui/core/Paper";
import { Avatar } from "antd";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    textAlign: "center",
  },
  gridData: {
    marginBottom: 20,
  },
}));

export default function OtherData() {
  const classes = useStyles();
  const { Panel } = Collapse;
  return (
    <div>
      <Grid
        className={classes.gridData}
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            فى حالة الطوارئ يرجى الاتصال ب
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle1" gutterBottom>
            الأسم
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle2" gutterBottom>
            محمد عبد اللة توفيق
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle1" gutterBottom>
            رقم التليفون
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle2" gutterBottom>
            025548455
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle1" gutterBottom>
            العنوان
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle2" gutterBottom>
            مصر الجديدة - القاهرة
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle1" gutterBottom>
            رقم الموبايل
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle2" gutterBottom>
            01025984456
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle1" gutterBottom>
            صلة القرابة (اختيارى)
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle2" gutterBottom>
            15 يونيو 22015
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ margin: "30px 0px" }}>
          <Divider variant="middle" />
        </Grid>

        <Grid item xs={2}>
          <Typography variant="subtitle1" gutterBottom>
            الأسم
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle2" gutterBottom>
            محمد عبد اللة توفيق
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle1" gutterBottom>
            رقم التليفون
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle2" gutterBottom>
            025548455
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle1" gutterBottom>
            العنوان
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle2" gutterBottom>
            مصر الجديدة - القاهرة
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle1" gutterBottom>
            رقم الموبايل
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle2" gutterBottom>
            01025984456
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle1" gutterBottom>
            صلة القرابة (اختيارى)
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle2" gutterBottom>
            15 يونيو 22015
          </Typography>
        </Grid>
      </Grid>
      <div style={{ marginTop: "100px", marginBottom: 20 }}>
        <Divider variant="middle" />
      </div>
      <Button
        type="submit"
        variant="contained"
        style={{
          float: "left",
          backgroundColor: "#93C020",
          color: "#FFF",
          width: "154px",
        }}
      >
        تعديل
      </Button>
    </div>
  );
}
