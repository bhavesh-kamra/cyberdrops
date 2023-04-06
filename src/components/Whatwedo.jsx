import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sec5_img1 from "../assets/images/png/sec5_img1.png";
import sec5_img2 from "../assets/images/png/sec5_img2.png";
import sec5_img3 from "../assets/images/png/sec5_img3.png";
import sec5_img4 from "../assets/images/png/sec5_img4.png";

const Whatwedo = () => {
  return (
    <section className=" bg-black py-5 position-relative">
      <div className="grey_shadow position-absolute right_shad_pos"></div>
      <div className="grey_shadow position-absolute"></div>
      <Container>
        <Row className=" text-center text-lg-start">
          <Col lg={7} xs={12}>
            <div className=" d-md-flex  flex-xl-wrap">
              <div>
                <img src={sec5_img1} alt="parachute" />

                <img src={sec5_img2} alt="parachute" />
              </div>

              <div className="trasnform_whatwedo">
                <img src={sec5_img3} alt="parachute" />

                <img src={sec5_img4} alt="parachute" />
              </div>
            </div>
          </Col>
          <Col lg={5} className=" mt-4 mt-lg-0">
            <p className=" text-white fs_3xl ff_lato_700  mb-4 line_height">
              What<span className=" clr_cream"> we do</span>
            </p>

            <p className=" ff_lato_400  fs_sm text-white mb-5">
              We have perfected our algorithm, which prioritizes a low risk and
              consistent profit stream without the need for daily
              micromanagement. While most trading algorithms can’t stand up
              against a volatile or risky market, our algorithm thrives in those
              conditions. Early-stage testers have seen a consistent flow of
              income with minimal ups and downs. Our algorithm has been in the
              works for YEARS. This has given us the time to rigorously backtest
              and release any needed hotfixes. As of early March 2022, we have
              close to a quarter of a million under direct management!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Whatwedo;
