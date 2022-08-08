import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import './company.css';

const Company = () => {
  return (
    <section>
     
        <Row>
            <Col lg='2' md='3'>
                <h3 className='d-flex align-items-center gap-1'>
                    <i class="ri-vimeo-line"></i>Vimeo</h3>
            </Col>
            <Col lg='2' md='3'>
                <h3 className='d-flex align-items-center gap-1'><i class="ri-pinterest-fill">
                    </i>Pinterest</h3>
            </Col>
            <Col lg='2' md='3'>
                <h3 className='d-flex align-items-center gap-1'><i class="ri-dribbble-line">
                    </i>Dribbble</h3>
            </Col>
            <Col lg='2' md='3'>
            <h3 className='d-flex align-items-center gap-1'>
                {" "}
                <i class="ri-apple-fill">Apple</i>
            </h3>
                
            </Col>
            <Col lg='2' md='3'>
            <h3 className='d-flex align-items-center gap-1'>
                {" "}
                <i class="ri-finder-line">Finder</i>   
            </h3>
            </Col>
            <Col lg='2' md='3'>
            <h3 className='d-flex align-items-center gap-1'>
                {" "}
                <i class="ri-google-fill">Google</i>
            </h3>
         </Col>
        </Row>
    </section>
  )
}

export default Company