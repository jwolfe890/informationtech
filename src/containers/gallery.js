import React from 'react'
import ReactDOM from 'react-dom'
import Slider from 'react-slick'
import './gallery.css';

class Gallery extends React.Component {
  render () {
    var settings = {
      slidesToShow: 1,
      dots: true,
      slidesToScroll: 1,
      swipe: true,
      autoplay: true,
      fade: true,
    };

    return (
      <div className="container">
        <Slider {...settings} arrows={true} >
          <div className="imtxt"><img src='https://preview.ibb.co/fhj35n/Webp_net_resizeimage.jpg' /><div className="nm"><span><h1>Mobile Commerce</h1></span></div></div>
          <div className="imtxt"><img src='https://preview.ibb.co/fmKxWS/colorful.jpg' /><div className="nm"><span><h1>Hello World</h1></span></div></div>
          <div className="imtxt"><img src='https://preview.ibb.co/fuL4BS/learn_fast.jpg' /><div className="nm"><span><h1>Hello World</h1></span></div></div> 
        </Slider>
      </div>
    );
  }
}

export default Gallery;



