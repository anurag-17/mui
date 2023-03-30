import React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  return (
    <>
      <div className="footertop">
        <div>
          <Typography
            id="basic-list-demo"
            level="body3"
            textTransform="uppercase"
            pl="10px"
            fontWeight="lg"
            className="footerheading"
          >
            Site Links
            <span className="footertopborder"></span>
          </Typography>
          <List aria-labelledby="basic-list-demo" className="footeritem">
            <ListItem sx={{ fontWeight: "300", color: "#7e7d7d" }}>
              Home
            </ListItem>
            <ListItem sx={{ fontWeight: "300", color: "#7e7d7d" }}>
              Contact
            </ListItem>
            <ListItem sx={{ fontWeight: "300", color: "#7e7d7d" }}>
              Legal Notice
            </ListItem>
            <ListItem sx={{ fontWeight: "300", color: "#7e7d7d" }}>
              Data Protection
            </ListItem>
          </List>
        </div>
        <div>
          <Typography
            id="basic-list-demo"
            level="body3"
            textTransform="uppercase"
            fontWeight="lg"
            pl="10px"
            className="footerheading"
          >
            Coming Soon
            <span className="footertopborder"></span>
          </Typography>
          <List aria-labelledby="basic-list-demo" className="footeritem">
            <ListItem sx={{ fontWeight: "300", color: "#7e7d7d" }}>
              Team
            </ListItem>
            <ListItem sx={{ fontWeight: "300", color: "#7e7d7d" }}>
              Careers
            </ListItem>
            <ListItem sx={{ fontWeight: "300", color: "#7e7d7d" }}>
              News
            </ListItem>
            <ListItem sx={{ fontWeight: "300", color: "#7e7d7d" }}>
              BLOG
            </ListItem>
          </List>
        </div>
        <div>
          <Typography
            id="basic-list-demo"
            level="body3"
            textTransform="uppercase"
            pl="10px"
            fontWeight="lg"
            className="footerheading"
          >
            Contact
            <span className="footertopborder"></span>
          </Typography>
          <List aria-labelledby="basic-list-demo" className="footeritem">
            <ListItem sx={{ fontWeight: "300", color: "#7e7d7d" }}>
              Email
            </ListItem>
            <ListItem sx={{ fontWeight: "300", color: "#7e7d7d" }}>
              LinkedIn
            </ListItem>
          </List>
        </div>
      </div>
      <h6 className="footerlast" style={{ textAlign: "center" }}>
        COPYright 2023 Mango Medical{" "}
      </h6>
    </>
  );
};
