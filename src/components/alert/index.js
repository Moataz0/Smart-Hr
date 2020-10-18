import React from "react";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";
import { useSelector } from "react-redux";

export default function MyAlert() {
  const {
    alertOptions: { open, alertType, alertMessage },
  } = useSelector((stores) => stores);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={1000}
    >
      <Alert severity={alertType}>{alertMessage}</Alert>
    </Snackbar>
  );
}
