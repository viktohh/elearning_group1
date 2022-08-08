import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import "./testimonial.css";
const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplayspeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" className="m-auto">
            <div className="testimonial_wrapper d-flex justify-content-between align-items-center">
              <div className="testimonial_img w-50">
                <img
                  src="./images/testimonial01.png"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="testimonial_content w-50">
                <h2 className="mb-4">Our Students Voice</h2>
                <Slider {...settings}>
                  <div>
                    <div className="single_testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Inventore ratione odit laboriosam molestias amet
                        magni nihil dolorem nesciunt asperiores eius officia,
                        facilis, et repellendus sit? Enim voluptas reprehenderit
                        unde assumenda?
                      </p>
                      <div className="student_info mt-4">
                        <h6 className="fw-bold">Kay Benedict</h6>
                        <p>Nigeria, Ado Ekiti</p>
                      </div>
                    </div>
                  </div>

                  
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
