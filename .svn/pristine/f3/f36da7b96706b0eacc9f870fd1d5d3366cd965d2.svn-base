import React from "react";
import "./loginStyle.css";
export const MyTextField = ({ title, onClickEnter, ...props }) => {
  return (
    <div className="textFieldContainer">
      <h4 className="textFieldTitle">{title}</h4>
      <input
        {...props}
        variant="outlined"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            onClickEnter();
          }
        }}
        style={{
          height: "36.41px",
          background: "#FFFFFF",
          border: "0.3px solid lightgrey",
          boxSizing: " border-box",
          borderRadius: "3px",
        }}
      />
    </div>
  );
};
