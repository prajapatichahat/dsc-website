import React, { useState, useEffect } from "react";
import aniSvg from "../../../assets/images/svg/main.svg";
import aboutImage from "../../../assets/images/svg/about_main.svg";
export default function Banner() {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
      <section className="hero-2" id="home">
        <div className="bg-overlay-img"></div>
        <div className="container">
          <div className="row align-items-center justify-content-center hero-content">
            {/* <div className="col-lg-5">
              <h3 className="hero-title fw-bold mb-2 display-5">
                One Stop <br /> Solution For Your <br /> Driving School
              </h3>
              <p className="opacity-75 mb-2 pb-3 fs-17">
                Managing a driving school is easier then ever.
              </p>
            </div> */}
            <div className="col-lg-10">
              <div className="hero-2-img mt-5 mt-lg-0">
                <object
                  type="image/svg+xml"
                  data={publicUrl + "assets/images/svg/main_svg.svg"}
                ></object>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="about">
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-lg-4">
              <img src={aboutImage} />
            </div> */}
            <div className="col-lg-12">
              {/* <h3 className="fs-38 mb-4">What is Driving School Cloud?</h3> */}

              <p className="text-muted">
                Welcome to Quantalium pvt limited, where innovation meets
                efficiency in the realm of Software as a Service (SaaS). As a
                cutting-edge technology company, we pride ourselves on
                delivering seamless solutions that empower businesses to thrive
                in the digital era. At the core of our mission is a commitment
                to revolutionizing how organizations operate, offering of
                cloud-based solutions designed to streamline processes, enhance
                collaboration, and drive unparalleled productivity
              </p>
              <div>
                {/* <CustomButtons.ColorButton onClick={() => history.push("")}>
                  Show Me More
                </CustomButtons.ColorButton> */}
              </div>
            </div>
          </div>
        </div>
        <div className="icon-effects-w3-1">{/* <img src={Circle} /> */}</div>
      </section>
    </>
  );
}
