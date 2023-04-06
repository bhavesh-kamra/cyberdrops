import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import sec3_img1 from "../assets/images/png/sec3_img1.png"
import sec3_img2 from "../assets/images/png/sec3_img2.png"
import sec3_img3 from "../assets/images/png/sec3_img3.png"
import sec3_img4 from "../assets/images/png/sec3_img4.png"

const Partners = () => {
  return (
    <section className=" bg-black py-lg-5 ">
      <p className=" text-white fs_3xl ff_lato_700 text-center">
        Part<span className=" clr_cream">ners</span>
      </p>
      <div className="bg_partner py-lg-5">
        <Container className=" py-lg-5">
          <div className="">
            <Row className=" py-lg-5 justify-content-center">
              <Col lg={4} className=" mt-5 mt-lg-0 pt-3 pt-lg-0 c_pointer">
                <div className="border_gradient d-flex align-items-center justify-content-center h-100  px-3">
                  <img className=" py-3" src={sec3_img1} alt="playbit" />
                </div>
                <p className=" clr_white text_black_lg fs_sm ff_lato_700 text-center pt-3">
                  Playbit
                </p>
              </Col>

              <Col lg={8} className="">
                <Row className=' justify-content-center'>
                  <Col
                    lg={4}
                    sm={6}
                    md={6}
                    className=" mt-5 mt-lg-0 pt-3 pt-lg-0 c_pointer"
                  >
                    <div className="border_gradient text-center bg-transparent h-100 justify-content-center d-flex align-items-center">
                      <img className="" src={sec3_img2} alt="playbit" />
                    </div>
                    <p className=" clr_white text_black_lg fs_sm ff_lato_700 text-center pt-3">
                      24 Capital
                    </p>
                  </Col>
                  <Col
                    lg={4}
                    sm={6}
                    md={6}
                    className=" mt-5 mt-lg-0 pt-3 pt-lg-0 c_pointer"
                  >
                    <div className="border_gradient text-center h-100 justify-content-center d-flex align-items-center">
                      <img className="" src={sec3_img3} alt="playbit" />
                    </div>
                    <p className="clr_white text_black_lg fs_sm ff_lato_700 text-center mt-3">
                      TradingHive
                    </p>
                  </Col>
                  <Col
                    lg={4}
                    sm={6}
                    md={6}
                    className=" mt-5 mt-lg-0 pt-3 pt-lg-0 c_pointer"
                  >
                    <div className=" border_gradient text-center h-100 justify-content-center d-flex align-items-center">
                      <img className="" src={sec3_img4} alt="playbit" />
                    </div>
                    <p className=" clr_white text_black_lg fs_sm ff_lato_700 text-center pt-3">
                      Focus Group Equities
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Partners