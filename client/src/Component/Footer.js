import React from "react";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from "@mui/material/Typography";


export const Footer = () => {
  return (
    <>
    <div  className="footertop">
      <div>
        <Typography
          id="basic-list-demo"
          level="body3"
          textTransform="uppercase"
          pl='10px'
          fontWeight="lg"
          className="footerheading"
        >
         Site Links
         <span className="footertopborder"></span>
        </Typography>
        <List aria-labelledby="basic-list-demo"
        className="footeritem">
          <ListItem sx={{color:"#484848"}}>Home</ListItem>
          <ListItem sx={{color:"#484848"}}>Contact</ListItem>
          <ListItem sx={{color:"#484848"}}>Legal Notice</ListItem>
          <ListItem sx={{color:"#484848"}}>Data Protection</ListItem>
        </List>
      </div>
      <div>
        <Typography
          id="basic-list-demo"
          level="body3"
          textTransform="uppercase"
          fontWeight="lg"
          pl='10px'
          className="footerheading"
        >
         Coming Soon
        <span className="footertopborder"></span>
        </Typography>
        <List aria-labelledby="basic-list-demo" 
        className="footeritem">
          <ListItem sx={{color:"#484848"}}>Team</ListItem>
          <ListItem sx={{color:"#484848"}}>Careers</ListItem>
          <ListItem sx={{color:"#484848"}}>News</ListItem>
          <ListItem sx={{color:"#484848"}}>BLOG</ListItem>
        </List>
      </div>
      <div>
        <Typography
          id="basic-list-demo"
          level="body3"
          textTransform="uppercase"
          pl='10px'
          fontWeight="lg"
          className="footerheading"
          >
        Contact
        <span className="footertopborder"></span>
        </Typography>
        <List aria-labelledby="basic-list-demo"
          className="footeritem"
        >
          <ListItem sx={{color:"#484848"}}>Email</ListItem>
          <ListItem sx={{color:"#484848"}}>LinkedIn</ListItem>
          
        </List>
      </div>
    </div>
      <h6 className="footerlast"style={{textAlign:"center"}}>COPYright 2023 Mango Medical </h6>
      </>
  );
};
