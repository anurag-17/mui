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
import skull from "../Img/Rectangle 2.svg";
import Container from "@mui/material/Container";
import { fontSize, lineHeight } from "@mui/system";

export const Nav = () => {
  const navItems = ["Home", "About", "Contact"];
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
      <Box
        sx={{
          background:
            "linear-gradient(109.95deg, #117A6E 12.19%, #14A144 55.55%, #092330 98.9%)",
          mixBlendMode: "darken",
          height: "100vh",
        }}
      >
        <CssBaseline />
        <Container fixed>
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
                  <Button key={item} sx={{ color: "#fff", ml: 5, mr: 5 }}>
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
          <div style={{ display: "flex" ,paddingTop:"80px" }}>
            <Box sx={{ width: "55%" ,paddingTop:"40px"}}>
              <Typography
                variant="h1"
                component="h3"
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 900,
                  fontSize: "46px",
                  lineHeight: "100%",
                  /* or 56px */

                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",

                  color: "#FFFFFF",
                }}
              >
                The next Generation <br />
                of Fracture Surgery
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "120%",
                  /* or 19px */

                  letterSpacing: " -0.02em",

                  color: "#FFFFFF",
                  width: "60%",
                }}
              >
                As a patient, you want the best treatment possible. When you
                fracture a bone, you want the perfect fitting implant operated
                with the highest precision.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "#EDA147",
                  padding: "12px 28px",
                  textTransform: "capitalize",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "900",
                  fontSize: " 20px",
                  borderRadius: "12px",
                  "&:hover": {
                    //you want this to be the same as the backgroundColor above
                    backgroundColor: "#EDA147",
                  },
                }}
              >
                Schedule Appointment
              </Button>
            </Box>
            <Box sx={{ width: "50%" }}>
              <img src={skull} style={{ width: "100%" }} />
            </Box>
          </div>
        </Container>
      </Box>
    </>
  );
};
