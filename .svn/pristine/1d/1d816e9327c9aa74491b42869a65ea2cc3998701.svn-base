import React from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "./resetPassword.css";

export const MyTextField = ({
  title,
  onChange,
  showPassword,
  handleClickShowPassword,
}) => {
  return (
    <div className="rPTextField">
      <TextField
        type={showPassword ? "text" : "password"}
        variant="outlined"
        InputProps={{
          style: { height: "40px", fontSize: "15px" },
          startAdornment: (
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={onChange}
        style={{ flexBasis: "91%" }}
      />
      <label className="rpLabel" style={{ flexBasis: "9%" }}>
        {title}
      </label>
    </div>
  );
};
