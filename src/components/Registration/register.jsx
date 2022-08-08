import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./register.css";

const Register = () => {
  return (
    <section>
      <Container className="con">
        <Row>
            <Col lg="8" md="8" className="w-100">
              <h2 className="">Create an Account</h2>
              <span>
                <i class="ri-file-user-fill w-10"></i>
                <input type="text" placeholder="Matric No*" />
              </span>
              <span>
                <i class="ri-mail-fill"></i>
                <input type="email" placeholder="Email" />
              </span>
              {" "}
              <br />
              <span>
                <i class="ri-user-fill"></i>
                <input type="text" placeholder="First Name" />
              </span>
              <span>
                <i class="ri-user-fill"></i>
                <input type="text" placeholder="Last Name" />
              </span>{" "}
              <br />
              <span>
                <i class="ri-restart-fill"></i>
                <input type="text" placeholder="Level" />
              </span>
              <span>
                <i class="ri-baidu-line"></i>
                <input className="w-48" type="text" placeholder="Gender" />
              </span>
              <br />
              <span>
                <i class="ri-lock-line"></i>
                <input type="password" placeholder="Password" />
              </span>
              <span>
                <i class="ri-lock-line"></i>
                <input
                  type="password"
                  placeholder="Comfirm Password"
                  required
                />
              </span>
              <br />
              <button className="btn btn-info">
                Sign Up<i class="ri-registered-line"></i>
              </button>
            </Col>
          
            
          <Col lg="4" md="4">
            <Container className="con2">
              <img src="./images/hero-img1.png" />
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
