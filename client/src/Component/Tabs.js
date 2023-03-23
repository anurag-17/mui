import React from "react";
import images from "../Img/MangoMedicalSection.svg";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import NExt from "@mui/icons-material/NavigateNext";
import Prev from "@mui/icons-material/NavigateBefore";
import setting from "../Img/setting.svg";
import home from "../Img/home.svg";
import add from "../Img/add.svg";
import Tabs from "@mui/material/Tabs";
import { textAlign } from "@mui/system";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { TabList } from "@mui/lab";
export const Tabss = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  console.log(value);
  return (
    <>
      <div className="top_tabs">
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{justifyContent:"center"}}>
            <div
              style={{
                fonStyle: "normal",
                fontWeight: 300,
                fontSize: "48px",
                lineHeight: "100%",
                color: "white",
              }}
            >
              Benefits for
              <Tab
                sx={{
                  color: "white",
                  fonStyle: "normal",
                  fontWeight: 300,
                  fontSize: "28px",
                  lineHeight: "100%",
                  color: "white",
                }}
                label="Surgeons"
                value="2"
              />
              <Tab
                sx={{
                  color: "white",
                  fonStyle: "normal",
                  fontWeight: 300,
                  fontSize: "28px",
                  lineHeight: "100%",
                  color: "white",
                }}
                label="Patient"
                value="1"
              />
              <Tab
                sx={{
                  color: "white",
                  fonStyle: "normal",
                  fontWeight: 300,
                  fontSize: "28px",
                  lineHeight: "100%",
                  color: "white",
                }}
                label="Healthcare System"
                value="3"
              />
            </div>
          </TabList>

          <Carousel
            autoPlay={false}
            next={() => {
              if (value == 1) {
                setValue("2");
              } else if (value == 2) {
                setValue("3");
              } else if (value == 3) {
                setValue("1");
              }
            }}
            prev={() => {
              if (value == 1) {
                setValue("3");
              } else if (value == 2) {
                setValue("1");
              } else if (value == 3) {
                setValue("2");
              }
            }}
            NextIcon={<NExt />}
            PrevIcon={<Prev />}
          >
            <TabPanel value="1">
              <Card
                sx={{
                  minWidth: 100,
                  maxWidth: "50%",
                  borderRadius: "30px",
                  height: "350px",
                  WebkitBackdropFilter: "blur(5px)",
                  backdropFilter: "blur(5px)",
                  backgroundColor: "#ffffff52 ",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "200px",
                        justifyContent: "space-around",
                        textAlign: "center",
                        color: "white",
                        fontSize: "24px",
                        lineHeight: "24px",
                        width: "30%",
                      }}
                    >
                      {" "}
                      <img width="80px" src={setting} />
                      Lorem ipsum dolor sit, amet{" "}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "200px",
                        justifyContent: "space-around",
                        textAlign: "center",
                        color: "white",
                        fontSize: "24px",
                        lineHeight: "24px",
                        width: "30%",
                      }}
                    >
                      {" "}
                      <img width="80px" src={home} />
                      Lorem ipsum dolor sit, amet{" "}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "200px",
                        justifyContent: "space-around",
                        textAlign: "center",
                        color: "white",
                        fontSize: "24px",
                        lineHeight: "24px",
                        width: "30%",
                      }}
                    >
                      {" "}
                      <img width="140px" src={add} />
                      Lorem ipsum dolor sit, amet{" "}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabPanel>
            <TabPanel value="2">
              <Card
                sx={{
                  minWidth: 100,
                  maxWidth: "50%",
                  borderRadius: "30px",
                  height: "350px",
                  WebkitBackdropFilter: "blur(5px)",
                  backdropFilter: "blur(5px)",
                  backgroundColor: "#ffffff52 ",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "200px",
                        justifyContent: "space-around",
                        textAlign: "center",
                        color: "white",
                        fontSize: "24px",
                        lineHeight: "24px",
                        width: "30%",
                      }}
                    >
                      {" "}
                      <img width="80px" src={setting} />
                      Lorem ipsum dolor sit, amet{" "}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "200px",
                        justifyContent: "space-around",
                        textAlign: "center",
                        color: "white",
                        fontSize: "24px",
                        lineHeight: "24px",
                        width: "30%",
                      }}
                    >
                      {" "}
                      <img width="80px" src={home} />
                      Lorem ipsum dolor sit, amet{" "}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "200px",
                        justifyContent: "space-around",
                        textAlign: "center",
                        color: "white",
                        fontSize: "24px",
                        lineHeight: "24px",
                        width: "30%",
                      }}
                    >
                      {" "}
                      <img width="140px" src={add} />
                      Lorem ipsum dolor sit, amet{" "}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabPanel>
            <TabPanel value="3">
              <Card
                sx={{
                  minWidth: 100,
                  maxWidth: "50%",
                  borderRadius: "30px",
                  height: "350px",
                  WebkitBackdropFilter: "blur(5px)",
                  backdropFilter: "blur(5px)",
                  backgroundColor: "#ffffff52 ",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "200px",
                        justifyContent: "space-around",
                        textAlign: "center",
                        color: "white",
                        fontSize: "24px",
                        lineHeight: "24px",
                        width: "30%",
                      }}
                    >
                      {" "}
                      <img width="80px" src={setting} />
                      Lorem ipsum dolor sit, amet{" "}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "200px",
                        justifyContent: "space-around",
                        textAlign: "center",
                        color: "white",
                        fontSize: "24px",
                        lineHeight: "24px",
                        width: "30%",
                      }}
                    >
                      {" "}
                      <img width="80px" src={home} />
                      Lorem ipsum dolor sit, amet{" "}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "200px",
                        justifyContent: "space-around",
                        textAlign: "center",
                        color: "white",
                        fontSize: "24px",
                        lineHeight: "24px",
                        width: "30%",
                      }}
                    >
                      {" "}
                      <img width="140px" src={add} />
                      Lorem ipsum dolor sit, amet{" "}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabPanel>
          </Carousel>
        </TabContext>
      </div>
    </>
  );
};
