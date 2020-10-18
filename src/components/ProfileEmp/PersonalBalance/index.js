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

export default function PersonalBalance() {
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
        <Grid item xs={3}>
          <Typography variant="subtitle1" gutterBottom>
            رصيد الاجازات السنوى :
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle2" gutterBottom>
            21 يوم
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1" gutterBottom>
            رصيد الاجازات السنوى المتبقية :
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle2" gutterBottom>
            12 يوم
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1" gutterBottom>
            رصيد الاجازات العارضة المتبقية :
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle2" gutterBottom>
            3 يوم
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1" gutterBottom>
            عدد ساعات الاذن المتبقية :
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle2" gutterBottom>
            4 ساعات
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ margin: "30px 0px" }}>
          <Divider variant="middle" />
        </Grid>

        <Grid item xs={3}>
          <Typography variant="subtitle1" gutterBottom>
            عدد ساعات الوقت الإضافى :
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle2" gutterBottom>
            8 ساعات
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1" gutterBottom>
            عدد ساعات التأخير :
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle2" gutterBottom>
            4 ساعات
          </Typography>
        </Grid>
      </Grid>
      <div style={{ marginBottom: 20 }}>
        <Divider variant="middle" />
      </div>
    </div>
  );
}
