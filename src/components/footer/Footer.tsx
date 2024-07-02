import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/dsc_logo.svg";
import { ROUTES } from "../../constants/routes";
// import Pdf from '../../assets/pdf/privacy_notice.pdf';

export default function Footer() {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
      <footer className="footer pb-5">
        <Container className="footer-1">
          <Row>
            {/* <Col lg="4" sm="12" className="p-20 flogo">
              <img src={logo} />
              <p>
                Driving School Cloud is industry-leading Mandatory Entry Level
                Training (MELT) compatible driving school management platform
                that helps in simplifying the driving school-related processes
                and workflows for greater transparency and gives insights into
                your driving school business.
              </p>
            </Col> */}
            <Col lg="5" sm="12" className="flogo offset-1">
              <div className="header">
                <h5 className="title">Legal</h5>
              </div>
              <ul>
                <li>
                  <a
                    className="terms"
                    href={publicUrl + "assets/pdf/privacy_notice.pdf"}
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="terms"
                    href={publicUrl + "assets/pdf/site_terms.pdf"}
                    target="_blank"
                  >
                    Site Terms and Condition
                  </a>
                </li>
                <li>
                  <a
                    className="terms"
                    href={
                      publicUrl +
                      "assets/pdf/user_access_and_license_agreement.pdf"
                    }
                    target="_blank"
                  >
                    User access and License Agreement
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg="5" sm="12" className="flogo offset-1">
              <div className="header">
                <h5 className="title">Contact Us</h5>
              </div>
              <ul>
                {/* <li>
                  <p>+1 9876543210</p>
                </li> */}
                <li>
                  <p>office@quantalium.com</p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        {/* <Container>
          <Row>
            <Col lg="12" sm="12">
              <p className="driving">
                © 2021 Driving School Cloud. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container> */}
      </footer>
    </>
  );
}
