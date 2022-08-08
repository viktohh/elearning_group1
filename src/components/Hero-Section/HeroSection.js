import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import './hero-section.css';


const HeroSection = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className='hero_content'>
                    <h2 className='mb-4'>Anytime Anywhere <br/> Learn on your Suitable <br/> Schedule</h2>
                <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                     of type and scrambled it to make a type specimen book.
                     </p>
                     <div className='search'>
                         <input type='text' placeholder='search' />
                         <button className='btn btn-success'>Search</button>
                     </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <img src='./images/hero-img1.png' alt='' className='w-100' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HeroSection