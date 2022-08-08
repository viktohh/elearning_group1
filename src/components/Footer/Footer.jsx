import React from 'react';
import { Container,Row,Col,ListGroup, ListGroupItem, } from 'reactstrap';
import './footer.css';

const footerQuickLinks = [
    {
        display: 'Home',
        url: '#'
    },
    {
        display: 'About Us',
        url: '#'
    },
    {
        display: 'Courses',
        url: '#'
    },
    {
        display: 'Pages',
        url: '#'
    },
    {
        display: 'Blog',
        url: '#'
    },
    
]

const footerInfoLinks = [
    {
        display: 'Privacy Policy',
        url: '#'
    },
    {
        display: 'Menbership',
        url: '#'
    },
    {
        display: 'Purchase Guide',
        url: '#'
    },
    {
        display: 'Teams of Service',
        url: '#'
    },
]

const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row>
                <Col lg='3'>
                    <h2 className='d-flex align-items-center gap-1'><i class='ri-pantone-line'></i> Learner.</h2>
                    <div className='follows'>
                        <p className='mb-0'>Follow us on social media</p>
                        <span>
                            {" "}
                            <a href=''>
                                <i class='ri-facebook-line'></i>
                            </a>
                        </span>

                        <span>
                            {" "}
                            <a href=''>
                                <i class='ri-instagram-line'></i>
                            </a>
                        </span>

                        <span>
                            {" "}
                            <a href=''>
                                <i class='ri-linkedin-line'></i>
                            </a>
                        </span>

                        <span>
                            {" "}
                            <a href=''>
                                <i class='ri-twitter-line'></i>
                            </a>
                        </span>

                    </div>
                </Col>

                <Col lg='3'>
                    <h6 className='fw-bold'>Explore</h6>
                    <ListGroup className='link_list'>
                        {
                            footerQuickLinks.map((item,index)=>(
                                <ListGroupItem key={index} className='border-0 ps-0 list1' >
                                    <a href={item.url} >{item.display}</a>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>

                <Col lg='3'>
                    <h6 className='fw-bold'>Information</h6>
                    <ListGroup className='link_list'>
                        {
                            footerInfoLinks.map((item,index)=>(
                                <ListGroupItem key={index} className='border-0 ps-0 list1' >
                                    <a href={item.url} >{item.display}</a>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>

                <Col lg='3'>
                    <h6 className='fw-bold'>Get in Tounch</h6>
                    <p>Address: Adebayo, Ado Ekiti </p>
                        <p> Phone:+23481 7874 234 </p>
                    <p>Email: kayben@info.com</p>
                </Col>

            </Row>
        </Container>
    </footer>
  )
}

export default Footer