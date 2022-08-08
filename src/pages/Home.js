import React, {Fragment} from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-Section/HeroSection';
import Company from '../components/Company-section/Company';
import AboutUs from '../components/About-us/AboutUs';
import Course from '../components/Course-section/Course';
import ChooseUs from '../components/Choose-us/ChooseUs';
import Features from '../components/Features-section/Features';
import FreeCourse from '../components/Free-Course-Section/Free-Course';
import Testimonial from '../components/Testimonial/Testimonials';
import Newletter from '../components/Newsletter/Newletter';
import Footer from '../components/Footer/Footer';
//import Register from '../components/Registration/register';
//import Login from '../components/Login-Form/Login';
const Home = () => {
  return (
    <Fragment>
      <Header />
       {/*<Login />
     <Register/> */}
       
      <HeroSection />
      <Company />
      <AboutUs />
      <Course />
      <ChooseUs/>
      <Features/>
      <FreeCourse/>
      <Testimonial/>
      <Newletter/>
      <Footer/> 
    </Fragment>
  )
}

export default Home