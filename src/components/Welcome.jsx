import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import sec1_img1 from "../assets/images/png/sec_img1.png"

const Welcome = () => {
  return (
    <section className=" bg-black py-5 position-relative">
      <div className="grey_shadow position-absolute"></div>
      <Container>
        <Row className=" align-items-center justify-content-between flex-lg-row flex-column-reverse text-center">
          <Col lg={6} className=" text-lg-start">
            <p className=" text-white fs_4xl ff_lato_800  mb-4 line_height mx_410_text">
              Welcome to <span className=" clr_cream">Cyber Drops</span>
            </p>

            <p className=" ff_lato_400  fs_sm text-white mb-5">
              Viverra felis, dui adipiscing ipsum pharetra donec. Pretium,
              tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit nec
              curabitur purus. Ullamcorper mattis risus suspendisse pretium
              tristique.
            </p>
            <button className=" bg_cream  border-0 rounded-3 py-2 px-4 text-white fs_md btn_connect_wallet">
              Explore Now
            </button>
          </Col>
          <Col lg={6} className=" text-center text-lg-end">
            <img className=" w-100 mx_410" src={sec1_img1} alt="parachute" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Welcome