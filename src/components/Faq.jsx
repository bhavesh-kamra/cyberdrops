import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import faq_para from "../assets/images/png/faq_para.png"

function AlwaysOpenExample() {
  return (
    <section className=" bg-black position-relative">
      <div className="grey_shadow position-absolute right_shad_pos"></div>
      <div className=" position-absolute d-none d-lg-block">
        <img src={faq_para} alt="" />
      </div>
      <Container>
        <p className=" clr_cream fs_3xl ff_lato_700 text-center py-5">
          FAQ<span className=" text-white">'s</span>
        </p>
        <Row className=" justify-content-center">
          <Col lg={9}>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="">
                  Egestas scelerisque duis quis aliquet. Consectetur?
                </Accordion.Header>
                <Accordion.Body className=" pt-0 max_width_660 fs_xsm ff_lato_400">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className=" mt-3" eventKey="1">
                <Accordion.Header className="">
                  Egestas scelerisque duis quis aliquet. Consectetur?
                </Accordion.Header>
                <Accordion.Body className=" pt-0 max_width_660 fs_xsm ff_lato_400">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className=" mt-3" eventKey="2">
                <Accordion.Header className="">
                  Egestas scelerisque duis quis aliquet. Consectetur?
                </Accordion.Header>
                <Accordion.Body className=" pt-0 max_width_660 fs_xsm ff_lato_400">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className=" mt-3" eventKey="3">
                <Accordion.Header className=" ">
                  Egestas scelerisque duis quis aliquet. Consectetur?
                </Accordion.Header>
                <Accordion.Body className=" pt-0 max_width_660 fs_xsm ff_lato_400">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className=" mt-3" eventKey="4">
                <Accordion.Header className=" ">
                  Egestas scelerisque duis quis aliquet. Consectetur?
                </Accordion.Header>
                <Accordion.Body className=" pt-0 max_width_660 fs_xsm ff_lato_400">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AlwaysOpenExample;
