import React from "react";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import TrackChangesOutlinedIcon from "@material-ui/icons/TrackChangesOutlined";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import {SidebarComponent} from "./SidebarComponent";

const SideBar = () => {
  return (
    <div>
      <div className="sidebar">
        <div
          style={{
            backgroundColor: "#FFF",
            padding: "11px",
            marginBottom: "10px",
            marginTop: "-16px",
          }}
        >
          <img
            src="/images/logo.png"
            width="120.69px"
            height="37px"
            alt="logo"
          />
        </div>
        {/* 
        <SidebarComponent
          title="الصفحة الرئيسية"
          route="/home"
          Icon={<HomeIcon size={20} style={{ color: "#747474" }} />}
        />
*/}
        <SidebarComponent
          title="الموظفين"
          route="/employees"
          Icon={<PeopleIcon size={20} style={{ color: "#747474" }} />}
        />

        <SidebarComponent
          title="الطلبات"
          route="/requests"
          Icon={<ContactMailIcon size={20} style={{ color: "#747474" }} />}
        />

        <SidebarComponent
          title="الحضور والأنصراف"
          route="/attendance"
          Icon={<PersonOutlinedIcon size={20} style={{ color: "#747474" }} />}
        />

        <SidebarComponent
          title="الأجازات"
          route="/vacation"
          Icon={
            <LocalMallOutlinedIcon size={20} style={{ color: "#747474" }} />
          }
        />
        {/* 
        <SidebarComponent
          title="المأموريات"
          route=""
          Icon={
            <TrackChangesOutlinedIcon size={20} style={{ color: "#747474" }} />
          }
        />

        <SidebarComponent
          title="الجزائات"
          route=""
          Icon={
            <DescriptionOutlinedIcon size={20} style={{ color: "#747474" }} />
          }
        />

        <SidebarComponent
          title="إنشاء تقرير"
          route=""
          Icon={
            <DescriptionOutlinedIcon size={20} style={{ color: "#747474" }} />
          }
        />
*/}
        <SidebarComponent
          title="الأستقالات"
          route="/resignation"
          Icon={
            <DescriptionOutlinedIcon size={20} style={{ color: "#747474" }} />
          }
        />
      </div>
    </div>
  );
};

export default SideBar;
