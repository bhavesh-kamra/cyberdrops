import React from "react";
import { Container } from "react-bootstrap";
import road from "../assets/images/png/road.png";
import roadmap_para1 from "../assets/images/png/roadmap_para1.png";
import roadmap_para2 from "../assets/images/png/roadmap_para2.png";
import roadmap_para3 from "../assets/images/png/roadmap_para3.png";

const RoadMap = () => {
  return (
    <section className=" py-lg-5 text-center w-100 position-relative">
      <p className=" text-white fs_3xl ff_lato_700 text-center py-3">
        Road<span className=" clr_cream">Map</span>
      </p>
      <div className=" position-absolute d-xxl-block d-none roadmap_para1_pos">
        <img src={roadmap_para1} alt="" />
      </div>
      <div className=" position-absolute d-xxl-block d-none roadmap_para2_pos">
        <img src={roadmap_para2} alt="" />
      </div>
      <div className=" position-absolute d-xxl-block d-none roadmap_para3_pos">
        <img src={roadmap_para3} alt="" />
      </div>
      <div className="roadmap_bg py-5">
        <Container>
          <div className="container_max">
            <div class="timeline">
              <div class="container1 right ">
                <div class="content">
                  <h2 className=" clr_white">March 2022</h2>
                  <p className="clr_white">1000 Drops Launch on Ethereum</p>
                </div>
              </div>
              <div class="container2 left">
                <div class="content">
                  <h2 className=" clr_white">March 2022</h2>
                  <p className=" clr_white">1000 Drops Launch on Ethereum</p>
                </div>
              </div>
              <div class="container3  right ">
                <div class="content">
                  <h2 className=" clr_white">March 2022</h2>
                  <p className=" clr_white">Creation of Treasury</p>
                </div>
              </div>
              <div class="container4 left ">
                <div class="content">
                  <h2 className=" clr_white">March 2022</h2>
                  <p className=" clr_white">Our First Airdrop</p>
                </div>
              </div>
              <div class="container5  right ">
                <div class="content">
                  <h2 className=" clr_white">March 2022</h2>
                  <p className=" clr_white">Major Collabs</p>
                </div>
              </div>
              <div class="container6 left">
                <div class="content">
                  <h2 className=" clr_white">March 2022</h2>
                  <p className=" clr_white">Cyber Celebs come on Ethereum</p>
                </div>
              </div>
              <div class="container7  right ">
                <div class="content">
                  <h2 className=" clr_white">March 2022</h2>
                  <p className=" clr_white">Streetwear + Merch</p>
                </div>
              </div>
              <div class="container8 left ">
                <div class="content">
                  <h2 className=" clr_white">March 2022</h2>
                  <p className=" clr_white">Enhanced Partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default RoadMap;
