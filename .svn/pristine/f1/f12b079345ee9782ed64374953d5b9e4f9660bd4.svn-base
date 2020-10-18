import React from "react";
// eslint-disable-next-line no-unused-vars
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  breadStyle: {
    marginRight: "196px",
    direction: "rtl",
    marginTop: "21px",
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "Cairo",
  },
});

const BreadCrumbs = () => {
  const currentRoute = useSelector((p) => p.currentRoute);
  const classes = useStyles();
  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.breadStyle}>
      <div>{currentRoute}</div>
      {/* <Typography color="textPrimary">{currentRoute}</Typography> */}
    </Breadcrumbs>
  );
};
export default BreadCrumbs;
