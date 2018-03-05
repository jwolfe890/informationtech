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
          <div id="imtxt2" className="imtxt"><img src="https://res.cloudinary.com/dszmqm6le/image/upload/v1519510288/wack.jpg" /><div className="nm"><span class="spn"><h1>Awesome Skills</h1></span></div></div>
          <div id="imtxt2" className="imtxt"><img src="https://res.cloudinary.com/dszmqm6le/image/upload/v1519510288/wack.jpg" /><div className="nm"><span class="spn"><h1>Awesome Skills</h1></span></div></div>
          <div id="imtxt2" className="imtxt"><img src="https://res.cloudinary.com/dszmqm6le/image/upload/v1519510288/wack.jpg" /><div className="nm"><span class="spn"><h1>Awesome Skills</h1></span></div></div>
        </Slider>
      </div>
    );
  }
}


export default Gallery;








