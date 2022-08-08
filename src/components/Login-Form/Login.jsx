import React from "react";
import { Container, Row, Col } from "reactstrap";
import './login.css'

const Login = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" md="8" sm="8">
          <h2 className='welcome'>Welcome back</h2>
            <div className="login">
              <br />
              <br />
              <h2 className="mt-1">Enter your credentials</h2>
              <span>
                <i class="ri-map-pin-user-fill"></i>
                <input type="text" placeholder="Enter Username" />
              </span>
              <br />
              <span>
                <i class="ri-key-fill"></i>
                <input type="password" placeholder="Enter Password" />
              </span>
              <br/>
              <button type="submit" className="btn btn-success">
                <i class="ri-login-circle-line"></i>
                Submit
              </button>
            </div>
          </Col>
          <Col lg='4' md='4' sm='4'>
              <div>
              <img src="./images/hero-img1.png" />
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
