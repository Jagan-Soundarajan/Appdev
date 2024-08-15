import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'; 

function SlideShow() {
  return (
    <Carousel style={{marginTop:'20px',width:'100%'}}>
      <Carousel.Item interval={750} className='sli' style={{borderRadius:'100px'}}>
        <img
        
          className="d-block w-100"
          src="https://www.justrunlah.com/wp-content/uploads/2016/05/Screen-Shot-2016-05-08-at-9.04.17-PM-copy.jpg"
          alt="First slide"
        />
        <Carousel.Caption style={{backgroundColor:'transparent'}}>
          {/* <h3>Track Your daily goals and fitness</h3> */}
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={750}>
        <img
          className="d-block w-100"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2f4ee9102941847.5f42516cda6ed.jpg"
          alt="Second slide"
        />
        <Carousel.Caption  style={{backgroundColor:'transparent'}}>
          {/* <h3>Calculate nutrition and diet</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={750}>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/z/buyer-sporting-goods-store-sports-department-showcase-sporting-goods-store-buyer-selects-equipment-snowboarding-136825579.jpg"
          alt="Third slide"
        />
        <Carousel.Caption  style={{backgroundColor:'transparent'}}>
          {/* <h3>Set trackers to maintain health</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;