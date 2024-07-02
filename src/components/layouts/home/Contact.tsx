import React from "react";
import { Row } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <section className="section" id="contact">
        <div className="container">
          <div className="row justify-content-center mb-3">
            <div className="col-md-8 col-lg-6 text-center">
              <h5 className="subtitle">
                <span className="fw-bold">Contact Us</span>
              </h5>
              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br />
                Lorem Ipsum has been the industry's standard dummy text.
              </p>
            </div>
          </div>
        </div>
        {/* <Row> */}
          <div>
            <div className="contact-form-wrapper d-flex justify-content-center">
              <form action="#" className="contact-form">
                <div>
                  <input
                    type="text"
                    className="form-control rounded border-white mb-3 form-input"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="form-control rounded border-white mb-3 form-input"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    className="form-control rounded border-white mb-3 form-text-area"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="submit-button-wrapper">
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        {/* </Row> */}
      </section>
    </>
  );
}
