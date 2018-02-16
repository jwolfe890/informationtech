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
          <div id="imtxt2" className="imtxt"><img src='https://preview.ibb.co/hhcrAn/Webp_net_resizeimage.jpg" alt="Webp_net_resizeimage' /><div className="nm"><span class="spn"><h1>Awesome Skills</h1><p>I love to code, and I'm great at it.</p></span></div></div>
          <div className="imtxt"><img className="person" src='https://preview.ibb.co/dpZWrS/Programming.jpg' /><div className="nm"><span><h1>Works Hard</h1><p>I don't give up until I've figured it out.</p></span></div></div>
          <div className="imtxt"><img src='https://preview.ibb.co/fuL4BS/learn_fast.jpg' /><div className="nm"><span><h1>Fast Learner</h1><p>I'm a fast learner and excited to learn new things.</p></span></div></div> 
        </Slider>
      </div>
    );
  }
}

export default Gallery;













