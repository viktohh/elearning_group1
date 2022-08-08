import React from "react";
import "./free-course.css";
import { Container, Row, Col } from "reactstrap";
import FreeCourseCard from "./FreeCourseCard";
const FreeCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: "./images/web-development.png ",
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Coding With Basic Computer Language ",
    imgUrl: "./images/kids-learning.png ",
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "03",
    title: "Basic Mathematical Programming Course",
    imgUrl: "./images/seo.png ",
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "04",
    title: "Basic UI/UX Design Using Figma",
    imgUrl: "./images/ui-ux.png ",
    students: 5.3,
    rating: 1.7,
  },
];
const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Free Courses</h2>
          </Col>

          {FreeCourseData.map((item) => (
            <Col lg='3' key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
