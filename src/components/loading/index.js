import React from "react";
import { CircularProgress } from "@material-ui/core";

export const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CircularProgress disableShrink style={{ marginBottom: "10px" }} />
      <h3>.....جاري التحميل</h3>
    </div>
  );
};
export default Loading;
