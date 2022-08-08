import React from 'react'; 
import {Container, Row, Col} from 'reactstrap';
import './newletter.css';





const Newletter = () => {
  return (
    <section>
        <Container className='newsletter'>
            <Row>
                <Col lg='12' className='text-center'>
                    <h2 className='mb-4'>Subscribe Our Newsletter</h2>
                    <div className='subscribe'>
                        <input type='email' placeholder='Enter Email' />
                        <button className='btn btn-success'>Subscribe</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newletter