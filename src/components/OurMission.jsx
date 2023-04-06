import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import sec2_img1 from "../assets/images/png/sec2_img1.png"

const OurMission = () => {
  return (
    <section className=" bg-black py-5 position-relative">
      <div className="grey_shadow position-absolute"></div>
      <div className="grey_shadow position-absolute right_shad_pos"></div>
      <Container>
        <Row className=" align-items-center text-center">
          <Col lg={6}>
            <img className=" w-100 mx_410" src={sec2_img1} alt="" />
          </Col>
          <Col lg={6} className=" text-lg-start">
            <p className=" text-white fs_3xl ff_lato_700  mb-4 line_height">
              Our<span className=" clr_cream"> Mission</span>
            </p>

            <p className=" ff_lato_400  fs_sm text-white mb-5">
              We understand that one of the biggest concerns for early-stage
              investors is that it can quickly become stressful, overwhelming,
              and especially extremely time consuming. It isn’t easy to balance
              a full time job, family, and an active investment portfolio,
              especially when just starting out.
            </p>
            <button className=" bg_cream  border-0 rounded-3 py-2 px-4 text-white fs_md btn_connect_wallet">
              Read More
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurMission