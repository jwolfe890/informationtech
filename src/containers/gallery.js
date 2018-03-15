import React from 'react'
import ReactDOM from 'react-dom'
import Slider from 'react-slick'
import './gallery.css';

class Gallery extends React.Component {

  state = {
    stuff: "this",
    stuff2: "is",
    stuff3: "working"
  }

  render () {
    var settings = {
      slidesToShow: 1,
      dots: true,
      slidesToScroll: 3,
      swipe: true,
      autoplay: true,
      fade: true,
    };

    return (
      <div className="container">
        <Slider {...settings} arrows={true} >
          <div id="imtxt2" className="imtxt"><img src="https://res.cloudinary.com/dszmqm6le/image/upload/v1519510288/wack.jpg" /><div className="nm"><span class="spn"><h1>{this.state.stuff}</h1></span></div></div>
          <div id="imtxt2" className="imtxt"><img src="https://res.cloudinary.com/dszmqm6le/image/upload/v1519510288/wack.jpg" /><div className="nm"><span class="spn"><h1>{this.state.stuff2}</h1></span></div></div>
          <div id="imtxt2" className="imtxt"><img src="https://res.cloudinary.com/dszmqm6le/image/upload/v1519510288/wack.jpg" /><div className="nm"><span class="spn"><h1>{this.state.stuff3}</h1></span></div></div>
        </Slider>
      </div>
    );
  }
}


export default Gallery;








