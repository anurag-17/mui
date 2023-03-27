import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import RandomIcon from "@mui/icons-material/SkipNext";
import { Swiper, SwiperSlide } from "swiper/react";
import banner from "../Img/partner Logos.png";
import caredimg from "../Img/image 3.svg";
import StanfordBusiness from "../Img/Stanford Business.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { Container } from "@mui/material";
export const Carddeower = () => {
  return (
    <>
      <Container maxWidth="xl">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "48px",
              lineHeight: "100%",
              /* identical to box height, or 48px */

              letterSpacing: " -0.02em",
              textTransform: " uppercase",

              color: "#091A2A",
            }}
          >
            People who <span style={{ color: "#F68D1C" }}>trust us</span>
          </h1>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div>
                <Card
                  sx={{
                    minWidth: 300,
                    marginRight: "150px",
                    backgroundColor: "#91C58E",
                    borderRadius: "30px",
                  }}
                >
                  <CardContent>
                    <img src={caredimg} />
                    <Typography
                      variant="h1 "
                      component="div"
                      sx={{
                        fontSize: 20,
                        fontWeight: "700",
                        size: "0px",
                        lineheight: "20px",
                        marginBottom: "20px",
                      }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Surgeon
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: 24,
                        fontWeight: "700",
                        size: "24px",
                        lineheight: "24px",
                        marginBottom: "20px",
                      }}
                    >
                      Peter Linh, DMD
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Surgeon specialized
                      <br /> in 3D applications <br />
                      and surgical planning
                    </Typography>
                    <img src={StanfordBusiness} width={"35%"} />
                  </CardContent>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Card
                  sx={{
                    minWidth: 300,
                    marginRight: "150px",
                    backgroundColor: "#91C58E",
                    borderRadius: "30px",
                  }}
                >
                  <CardContent>
                    <img src={caredimg} />
                    <Typography
                      variant="h1 "
                      component="div"
                      sx={{
                        fontSize: 20,
                        fontWeight: "700",
                        size: "0px",
                        lineheight: "20px",
                        marginBottom: "20px",
                      }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Surgeon
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: 24,
                        fontWeight: "700",
                        size: "24px",
                        lineheight: "24px",
                        marginBottom: "20px",
                      }}
                    >
                      Peter Linh, DMD
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Surgeon specialized
                      <br /> in 3D applications <br />
                      and surgical planning
                    </Typography>
                    <img src={StanfordBusiness} width={"35%"} />
                  </CardContent>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Card
                  sx={{
                    minWidth: 300,
                    marginRight: "150px",
                    backgroundColor: "#91C58E",
                    borderRadius: "30px",
                  }}
                >
                  <CardContent>
                    <img src={caredimg} />
                    <Typography
                      variant="h1 "
                      component="div"
                      sx={{
                        fontSize: 20,
                        fontWeight: "700",
                        size: "0px",
                        lineheight: "20px",
                        marginBottom: "20px",
                      }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Surgeon
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: 24,
                        fontWeight: "700",
                        size: "24px",
                        lineheight: "24px",
                        marginBottom: "20px",
                      }}
                    >
                      Peter Linh, DMD
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Surgeon specialized
                      <br /> in 3D applications <br />
                      and surgical planning
                    </Typography>
                    <img src={StanfordBusiness} width={"35%"} />
                  </CardContent>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Card
                  sx={{
                    minWidth: 300,
                    marginRight: "150px",
                    backgroundColor: "#91C58E",
                    borderRadius: "30px",
                  }}
                >
                  <CardContent>
                    <img src={caredimg} />
                    <Typography
                      variant="h1 "
                      component="div"
                      sx={{
                        fontSize: 20,
                        fontWeight: "700",
                        size: "0px",
                        lineheight: "20px",
                        marginBottom: "20px",
                      }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Surgeon
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: 24,
                        fontWeight: "700",
                        size: "24px",
                        lineheight: "24px",
                        marginBottom: "20px",
                      }}
                    >
                      Peter Linh, DMD
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Surgeon specialized
                      <br /> in 3D applications <br />
                      and surgical planning
                    </Typography>
                    <img src={StanfordBusiness} width={"35%"} />
                  </CardContent>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Card
                  sx={{
                    minWidth: 300,
                    marginRight: "150px",
                    backgroundColor: "#91C58E",
                    borderRadius: "30px",
                  }}
                >
                  <CardContent>
                    <img src={caredimg} />
                    <Typography
                      variant="h1 "
                      component="div"
                      sx={{
                        fontSize: 20,
                        fontWeight: "700",
                        size: "0px",
                        lineheight: "20px",
                        marginBottom: "20px",
                      }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Surgeon
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: 24,
                        fontWeight: "700",
                        size: "24px",
                        lineheight: "24px",
                        marginBottom: "20px",
                      }}
                    >
                      Peter Linh, DMD
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Surgeon specialized
                      <br /> in 3D applications <br />
                      and surgical planning
                    </Typography>
                    <img src={StanfordBusiness} width={"35%"} />
                  </CardContent>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Card
                  sx={{
                    minWidth: 300,
                    marginRight: "150px",
                    backgroundColor: "#91C58E",
                    borderRadius: "30px",
                  }}
                >
                  <CardContent>
                    <img src={caredimg} />
                    <Typography
                      variant="h1 "
                      component="div"
                      sx={{
                        fontSize: 20,
                        fontWeight: "700",
                        size: "0px",
                        lineheight: "20px",
                        marginBottom: "20px",
                      }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Surgeon
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: 24,
                        fontWeight: "700",
                        size: "24px",
                        lineheight: "24px",
                        marginBottom: "20px",
                      }}
                    >
                      Peter Linh, DMD
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Surgeon specialized
                      <br /> in 3D applications <br />
                      and surgical planning
                    </Typography>
                    <img src={StanfordBusiness} width={"35%"} />
                  </CardContent>
                </Card>
              </div>
            </SwiperSlide>
          </Swiper>
          <div style={{ marginTop: "70px",marginBottom: "130px" }}>
            <h1 className="carddrowerlast">Keep the number of medical errors to a minimum.</h1>
            <img src={banner} width={"100%"} />
          </div>
        </div>
      </Container>
    </>
  );
};
