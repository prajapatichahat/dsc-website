import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Dots from "../../../assets/images/bg4.png";
import { CardContent } from "@mui/material";

export default function Features() {
  const featur = [
    {
      id: 1,
      image: "assets/images/svg/Features/school_management.svg",
      title: "School Workflows Management",
      name: "Automate your manual school workflows for better management of your resources thereby saving you both time and money.",
    },
    {
      id: 2,
      image: "assets/images/svg/Features/timesheets.svg",
      title: "Timesheets",
      name: "No more manual timesheets with our Intelligent timesheet recommendation and management system that...",
    },
    {
      id: 3,
      image: "assets/images/svg/Features/student_onboarding.svg",
      title: "Student Onboarding",
      name: "Simplified online student registration with digital document management thereby saving you on office supplies...",
    },
    {
      id: 4,
      image: "assets/images/svg/Features/dashboards.svg",
      title: "Dashboards",
      name: "Monitor the health of your business via the platform dashboards that provide real-time visibility into your business...",
    },
    {
      id: 5,
      image: "assets/images/svg/Features/instructor_management.svg",
      title: "Instructor Management",
      name: "Track instructor time with our intelligent late className detection algorithm with notifications to the school...",
    },
    {
      id: 6,
      image: "assets/images/svg/Features/vehicle_management.svg",
      title: "Vehicle Management",
      name: "No more worries of forgetting your training vehicles insurance expiry dates, next service date, Plate expiry...",
    },
    {
      id: 7,
      image: "assets/images/svg/Features/auditing_reporting.svg",
      title: "Auditing and Reporting",
      name: "The platform audits important workflow actions which can be used in case of discrepancies.",
    },
    {
      id: 8,
      image: "assets/images/svg/Features/online_payments.svg",
      title: "Online Payments",
      name: "Securely accept payments of your courses using our platform with the real-time transfer of fees...",
    },
    {
      id: 9,
      image: "assets/images/svg/Features/mobile_app.svg",
      title: "Mobile Apps",
      name: "IOS and Android Mobile applications for School owner, students and instructor  to view real-time health of the business.",
    },
  ];

  return (
    <>
      <section className="section" id="features">
        <div className="icon-effects-w3-2">
          <img src={Dots} />
        </div>
        <div className="container">
          <div className="row justify-content-center mb-3">
            <div className="col-md-8 col-lg-6 text-center">
              <h5 className="subtitle">
                <span className="fw-bold">Our Features</span>
              </h5>
              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br />
                Lorem Ipsum has been the industry's standard dummy text.
              </p>
            </div>
          </div>
          <Row>
            {featur.map((data) => (
              <Col lg="4" sm="12" className="mt-2">
                <Card className="featur-card">
                  <div className="align-center featur-img-center">
                    <img src={data.image} />
                  </div>
                  <CardContent>
                    <p className="featur-card-title">{data.title}</p>
                    <p>{data.name}</p>
                  </CardContent>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
}
