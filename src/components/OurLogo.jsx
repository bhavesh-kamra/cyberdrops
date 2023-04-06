import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import sec4_img1 from "../assets/images/png/sec4_img1.png"
import sec4_img2 from "../assets/images/png/sec4_img2.png"
import sec4_img3 from "../assets/images/png/sec4_img3.png"

const OurLogo = () => {
  return (
    <section className=" bg-black py-5">
      <Container>
        <Row className=" justify-content-between align-items-center text-center flex-column-reverse flex-lg-row text-center text-lg-start">
          <Col lg={6} className=' mt-4 mt-lg-0'>
            <p className=" text-white fs_3xl ff_lato_700  mb-4 line_height">
              Our<span className=" clr_cream"> Algo</span>
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
          <Col lg={6} className=' py-5 py-lg-0'>
            <div className="  d-flex align-items-center justify-content-center">
              <div className="">
                <div className=" mt-3">
                  <img
                    className="border_gradient2 p-2 w-100 "
                    src={sec4_img1}
                    alt="parachute"
                  />
                </div>

                <div className="ms-lg-0 mt-3 ">
                  <img
                    className="border_gradient2 p-2 w-100 "
                    src={sec4_img2}
                    alt="parachute"
                  />
                </div>
              </div>
              <div className="ms-3 mt-3">
                <img
                  className="border_gradient2 p-2 w-100"
                  src={sec4_img3}
                  alt="parachute"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurLogo