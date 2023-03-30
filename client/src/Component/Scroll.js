import React from "react";
import images from "../Img/image 4.svg";
import sCROL from "../Img/image 5.svg";
import Container from "@mui/material/Container";
import zIndex from "@mui/material/styles/zIndex";

export const Scroll = () => {
  const scrolldown = () => {
    console.log("sadasd");
    window.scrollBy(0, 4000);
  };
  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "51px",
            paddingBottom: "150px",
            position: "relative",
            // zIndex: '-5'
          }}
        >
          <img width={"50%"} src={images} />
          <img
            className="scrollimg2"
            width={"20%"}
            onClick={scrolldown}
            src={sCROL}
          />
        </div>
      </Container>
    </>
  );
};
