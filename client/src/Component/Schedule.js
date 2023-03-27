import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export const Schedule = () => {
  return <>
    <div className="top_tabs">
    <Container>
    <div style={{ display: "flex", paddingTop: "80px" }}>
              <Box sx={{ paddingTop: "40px" }}>
                <Typography
                  variant="h1"
                  component="h3"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: "64px",
                    lineHeight: "120%",
                    /* or 56px */

                    letterSpacing: "0em",
                    textTransform: "uppercase",

                    color: "#FFFFFF",

                  }}
                  className="scheduletext"
                >
                  Want to have<br/>
<span style={{fontWeight:"400"}}>our platform</span> for you patients<br/>
or healthcare system? 
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
                >
                 Schedule a call to lear more how we can help you.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    padding: '16px 32px',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight:' 700',
                    fontSize: '17px',
                    lineHeight: '120%',
                    letterSpacing: '-0.02em',
                    color: '#091A2A',
                    color: "black",
                    backgroundColor: "#fff",
                    fontFamily: "Poppins",
                    borderRadius: "12px",
                    marginTop: "36px",
                    "&:hover": {
                      //you want this to be the same as the backgroundColor above
                      backgroundColor: "#fff",
                    },
                  }}
                >
                  Schedule a call
                </Button>
              </Box>
             
            </div></Container></div></>;
};
