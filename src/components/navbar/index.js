import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import "./navbar.css";
import Link from "@material-ui/core/Link";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { MenuItemComponent } from "../sidebar/SidebarComponent";
import Axios from "../../API/api";
import History from "../../utilities/History";
import { useDispatch } from "react-redux";
import { hideComponent } from "../actions/showComponent-action";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
export default function Navbar() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const isNotifiOpen = Boolean(anchorEl2);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleNotificationOpen = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleNotifiClose = () => {
    setAnchorEl2(null);
  };
  const logout = () => {
    setAnchorEl(null);
    delete Axios.defaults.headers.token;
    dispatch(hideComponent());
    History.push("/");
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      style={{ direction: "rtl", fontSize: "15px" }}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div onClick={handleMenuClose}>
        <MenuItemComponent title=" الملف الشخصى" route="/profile" />
      </div>

      <div onClick={handleMenuClose}>
        <MenuItemComponent title="تغيير كلمة السر" route="/resetPassword" />
      </div>

      <MenuItem onClick={handleMenuClose} style={{ fontSize: "15px" }}>
        تبديل الحساب الى موظف
      </MenuItem>
      <MenuItem onClick={logout} style={{ fontSize: "15px" }}>
        الخروج
      </MenuItem>
    </Menu>
  );
  const renderNotification = (
    <Menu
      className="notificationMenu"
      anchorEl={anchorEl2}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isNotifiOpen}
      onClose={handleNotifiClose}
    >
      <div onClick={handleNotifiClose}>
        <MenuItemComponent
          title="تمت الموافقه على طلب الاجازه الخاص بك فى"
          route="/"
        />
      </div>

      <div onClick={handleNotifiClose}>
        <MenuItemComponent
          title="تمت الموافقه على طلب الاجازه الخاص بك فى 7/5"
          route="/"
        />
      </div>

      <div onClick={handleNotifiClose}>
        <MenuItemComponent
          title=" تم رفض الاذن الخاص بك فى تاريخ 9/5"
          route="/"
        />
      </div>
      <div onClick={handleNotifiClose}>
        <MenuItemComponent
          title=" تم رفض الاذن الخاص بك فى تاريخ 9/5"
          route="/"
        />
      </div>
      <Link style={{ float: "left" }} onClick={handleNotifiClose}>
        <MenuItemComponent title="<< عرض المزيد" route="/notifications" />
      </Link>
    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#2B2D35",
          direction: "rtl",
          maxHeight: "59px",
        }}
      >
        <Toolbar>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleNotificationOpen}
            >
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle
                edge="end"
                onClick={handleProfileMenuOpen}
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              />
            </IconButton>
            <p style={{ marginTop: "20px" }}>معتز محمد السعيد</p>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <ExpandMoreIcon
                edge="end"
                onClick={handleProfileMenuOpen}
                aria-label="expand"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              onClick={handleProfileMenuOpen}
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderNotification}
    </div>
  );
}
