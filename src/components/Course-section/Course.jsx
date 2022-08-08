import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import './course.css';
import CourseCard from './CourseCard';

const coursesData = [
  {
    id:'01',
    title: 'Web Development Bootcamp 2022 for Beginners',
    lesson: 12,
    students:12.5,
    rating:5.9,
    imgUrl:'./images/web-development.png',
  },
  {
    id:'02',
    title: 'Professional Graphics Design, Photo Shope, Adobe Reader',
    lesson: 12,
    students:12.5,
    rating:5.9,
    imgUrl:'./images/graphics-design.png',
  },
  {
    id:'03',
    title: 'UI/UX Designs For Beginner ',
    lesson: 11,
    students:12.5,
    rating:5.9,
    imgUrl:'./images/ui-ux.png',
  }
]

const Course = () => {
  return (
    <section>
        <Container>
            <Row>
              <Col lg='12'className='mb-5'>
                <div className='course-top d-flex justify-content-between align-items-center'>
                  <div className='course-top-left w-50'>
                    <h2>Our Popular Courses</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto magni 
                      dolores eos esse, laboriosam sed aliquam voluptatum repudiandae nisi non?
                    </p>
                  </div>
                  <div className='w-50 text-end'>
                  <button className='btn'>See All</button>
                  </div>
                </div>
              </Col>
                  {
                    coursesData.map(item=>(
                      <Col lg='4' md='6'>
                        <CourseCard key={item.id} item={item} />
                      </Col>
                    ))

                  }
                   
               
            </Row>
        </Container>
    </section>
  )
}

export default Course