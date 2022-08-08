import React,{useState} from 'react';
import { Container,Row,Col } from 'reactstrap';
import ReactPlayer from 'react-player';
import './chooseus.css';
const ChooseUs = () => {
    const [showVideo,setShowVideo] = useState(false);
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='choose_content'>
                        <h2>Why Choose Us</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Nobis nam nihil omnis nulla incidunt
                         unde totam saepe ut id cum. Lorem ipsum, dolor sit
                          amet consectetur adipisicing elit. Quis excepturi mollitia explicabo. Tenetur, quis alias incidunt, ut libero dicta corrupti, laudantium impedit repudiandae
                          aliquam consectetur! In dicta delectus consequuntur provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, reiciendis.
                        </p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className='choose_img'>
                        {
                            showVideo ? (<ReactPlayer url='https://www.youtube.com/watch?V=qFp27TR4Yew' 
                            controls
                             width='100%'
                             height='300px'
                             />
                           ): (<img src='./images/why-choose-us.png' alt='' className = 'w-100' />
                           )
                        }
                        
                        {
                            !showVideo && <span className='play_icon'>
                            <i class='ri-play-circle-line' onClick={()=>setShowVideo(!showVideo)}></i>
                        </span>
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ChooseUs