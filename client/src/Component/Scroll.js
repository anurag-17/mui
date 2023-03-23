import React from "react";
import images from "../Img/image 4.svg";
import Container from "@mui/material/Container";

export const Scroll = () => {
  return (
    <>
    <Container>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingTop:"50px",
          paddingBottom:"150px"
        }}
        >
        <img width={"50%"} src={images} />
      </div>
          </Container>
    </>
  );
};
