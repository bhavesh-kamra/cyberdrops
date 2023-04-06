import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import how_itpara from "../assets/images/png/how_itpara.png";

const Howitworks = () => {
  return (
    <section className=" bg-black position-relative">
      <div className=" position-absolute d-none d-xxl-block how_itpara_pos">
        <img src={how_itpara} alt="" />
      </div>
      <Container>
        <p className=" text-white fs_3xl ff_lato_700 text-center pb-4">
          How it<span className=" clr_cream"> works</span>
        </p>
        <Row>
          <Col lg={3} sm={6} md={4} className=" mt-4 c_pointer transition_how">
            <div className="border_gradient3 bg_lightblack text-center justify-content-center hover_card h-100 p-3">
              <div className=" d-flex justify-content-center my-4">
                <div className="circular_counting bg_cream d-flex justify-content-center align-items-center text-white circula_bg_cream">
                  <p className=" ff_lato_700 mb-0 fs_xl ">01</p>
                </div>
              </div>
              <p className=" ff_lato_700 text-white fs_md">Mint NFT</p>
              <p className=" ff_lato_400 text-white fs_xsm">
                You must own our NFT to connect to direct management or
                participate in governance
              </p>
            </div>
          </Col>
          <Col lg={3} sm={6} md={4} className=" mt-4 c_pointer transition_how">
            <div className="border_gradient3 bg_lightblack text-center justify-content-center hover_card h-100 p-3">
              <div className=" d-flex justify-content-center my-4">
                <div className="circular_counting bg_cream d-flex justify-content-center align-items-center text-white circula_bg_cream">
                  <p className=" ff_lato_700 mb-0 fs_xl">02</p>
                </div>
              </div>
              <p className=" ff_lato_700 text-white fs_md">
                Verify NFT Ownership
              </p>
              <p className=" ff_lato_400 text-white fs_xsm">
                Only Cyber Drops that are have verified are eligible to be
                connected under direct management
              </p>
            </div>
          </Col>
          <Col lg={3} sm={6} md={4} className=" mt-4 c_pointer transition_how">
            <div className="border_gradient3 bg_lightblack text-center justify-content-center hover_card h-100 p-3">
              <div className=" d-flex justify-content-center my-4">
                <div className="circular_counting bg_cream d-flex justify-content-center align-items-center text-white circula_bg_cream">
                  <p className=" ff_lato_700 mb-0 fs_xl">03</p>
                </div>
              </div>
              <p className=" ff_lato_700 text-white fs_md">
                Link API to your account
              </p>
              <p className=" ff_lato_400 text-white fs_xsm">
                Only HODLers that submit their API key and secret will be under
                direct management
              </p>
            </div>
          </Col>
          <Col lg={3} sm={6} md={4} className=" mt-4 c_pointer transition_how">
            <div className="border_gradient3 bg_lightblack text-center justify-content-center hover_card h-100 p-3">
              <div className=" d-flex justify-content-center my-4">
                <div className="circular_counting bg_cream d-flex justify-content-center align-items-center text-white circula_bg_cream">
                  <p className=" ff_lato_700 mb-0 fs_xl">04</p>
                </div>
              </div>
              <p className=" ff_lato_700 text-white fs_md">
                Passive Income for life
              </p>
              <p className=" ff_lato_400 text-white fs_xsm">
                As long as your HODL your Cyber Drop, you will be connected
                under direct management
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Howitworks;
