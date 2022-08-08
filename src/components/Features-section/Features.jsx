import React from 'react';
import './features.css';
import { Container,Row,Col } from 'reactstrap';

const FeatureData = [
    {
        title:'Quick Learning',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem dignissimos mollitia doloribus! Itaque, quo error! Dolore repellendus explicabo error sapiente dolorum esse nihil culpa inventore, soluta sit eum. Ducimus.',
        icon: 'ri-calendar-check-line'
    },
    {
        title:'All Time Support',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem dignissimos mollitia doloribus! Itaque, quo error! Dolore repellendus explicabo error sapiente dolorum esse nihil culpa inventore, soluta sit eum. Ducimus.',
        icon: 'ri-discuss-line'
    },
    {
        title:'Certification',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem dignissimos mollitia doloribus! Itaque, quo error! Dolore repellendus explicabo error sapiente dolorum esse nihil culpa inventore, soluta sit eum. Ducimus.',
        icon: 'ri-contacts-book-fill'
    },
       
]

const Features = () => {
  return (
    <section>
        <Container>
            <Row>
                { FeatureData.map((item, index)=>(
                        <Col lg='4' md='6' key={index}>
                    <div className='single_feature text-center px-4'>
                        <h2 className='mb-3'><i class={item.icon}></i></h2>
                        <h6>{item.title}</h6>
                        <p>
                            {item.desc}
                        </p>

                    </div>
                </Col>

                    ))
                }
                
            </Row>
        </Container>
    </section>
  )
}

export default Features