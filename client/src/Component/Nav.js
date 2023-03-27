import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import navimg from "../Img/svg-logo.svg";
import iconsvg from "../Img/Icon.svg";
import RectangleSKULL from "../Img/Rectangle 2.svg";

import Container from "@mui/material/Container";
import { fontSize, lineHeight } from "@mui/system";
import "./Nav.css";
export const Nav = () => {
  const navItems = ["About Us", "Solutions", "Contact"];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container =
    window !== undefined ? () => window.document.body : undefined;
  const drawerWidth = 240;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={navimg} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div className="top_navBox">
        <Box>
          <CssBaseline />
          <Container maxWidth="xl">
            <AppBar
              component="nav"
              color="transparent"
              sx={{ boxShadow: 0, pt: 2, position: "static" }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  <img src={navimg} />
                </Typography>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  {navItems.map((item) => (
                    <Button key={item} sx={{ color: "#fff",}}>
                      {item}
                    </Button>
                  ))}
                  <Button sx={{ color: "#fff", ml: 5 }}>
                    <img src={iconsvg} />
                  </Button>
                </Box>
              </Toolbar>
            </AppBar>
            <Box component="nav">
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </Box>
            <div
              className="navcon"
              style={{ display: "flex", paddingTop: "80px" }}
            >
              <Box sx={{ width: "55%", paddingTop: "40px" }} className="navtopcontanct">
                <Typography
                  variant="h1"
                  component="h3"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 900,
                    fontSize: "46px",
                    lineHeight: "100%",
                    /* or 56px */

                    letterSpacing: "0em",
                    textTransform: "uppercase",

                    color: "#FFFFFF",
                  }}
                  className="navh3"
                >
                  The next Generation <br />
                  of Fracture Surgery
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "120%",
                    /* or 19px */
                    marginTop: "15px",
                    letterSpacing: " -0.02em",

                    color: "#FFFFFF",
                    width: "66%",
                  }}
                  className="navpara"
                >
                  As a patient, you want the best treatment possible. When you
                  fracture a bone, you want the perfect fitting implant operated
                  with the highest precision.
                </Typography>
                <Button
                className="navbutton"
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "#EDA147",
                    padding: "12px 28px",
                    textTransform: "capitalize",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "900",
                    fontSize: " 20px",
                    borderRadius: "12px",
                    marginTop: "36px",
                    "&:hover": {
                      //you want this to be the same as the backgroundColor above
                      backgroundColor: "#EDA147",
                    },
                  }}
                >
                  Schedule Appointment
                </Button>
              </Box>
              <Box sx={{ width: "60%" }}>
                <img
                  className="skullimg"
                  width={"100%"}
                  sizes="(max-width: 600px) 100vw,
            (max-width: 960p  x) 50vw,
            800px"
                  style={{ marginTop: "30px" }}
                  height={"100%"}
                  src={RectangleSKULL}
                />
              </Box>
            </div>
          </Container>
        </Box>
      </div>
      {/* <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <img src={centerimg} alt="" srcset="" width={"50%"} />
        </div>
        <img src={wavesdown} alt="" srcset="" width={"100%"}     style={{ position: "absolute", bottom: "-170px", zIndex: "-1" }} />
      </Box> */}
    </>
  );
};
