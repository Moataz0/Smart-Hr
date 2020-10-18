import React from "react";
import History from "../../utilities/History";
import { useDispatch } from "react-redux";
import { openAlert } from "../actions/alert-action";
import { setPath } from "../actions/path-action";
import MenuItem from "@material-ui/core/MenuItem";
export  function SidebarComponent({ title, Icon, route }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        if (route.length === 0)
          dispatch(openAlert("warning", "هذة الخاصية غير متاحة الان"));
        else {
          History.push(`${route}`);
          dispatch(setPath(title));
        }
      }}
      style={{
        fontSize: "13px",
        cursor: "pointer",
        padding: "10px 0px 10px 0px",
      }}
    >
      {Icon}
      <br />
      {title}
    </div>
  );
}

export  function MenuItemComponent({ title, route }) {
  const dispatch = useDispatch();
  return (
    <>
      <MenuItem
        onClick={() => {
          if (route.length === 0)
            dispatch(openAlert("warning", "هذة الخاصية غير متاحة الان"));
          else {
            History.push(`${route}`);
            dispatch(setPath(title));
          }
        }}
        style={{
          fontSize: "15px",
          cursor: "pointer",
        }}
      >
        {title}
      </MenuItem>
    </>
  );
}
