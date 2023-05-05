import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { NAVBAR_MENU } from "../../constant/constant";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "#C4A484",
        padding: "20px 20px 20px 10px",
        justifyContent: "end",
        position: "sticky",
        boxShadow: "gray  12px 0px 10px 6px",
      }}
    >
      {NAVBAR_MENU.map((navItem, index, arr) => {
        return (
          <Typography
            variant="h6"
            component="div"
            marginLeft="20px"
            key={index}
          >
            <Link
              to={navItem?.link}
              style={{ textDecoration: "none", color: "white" }}
            >
              {navItem.label}
            </Link>
          </Typography>
        );
      })}
    </div>
  );
};
export default NavBar;
