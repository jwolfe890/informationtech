import React, { Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Gallery from './containers/gallery.js'
import Navbar from './components/navbar.js'
import About from './components/About.js'
import ReactDOM from 'react-dom'
import Slider from 'react-slick'
import './App.css';
import Portfolio from './components/portfolio.js'
import Footer from './components/footer.js'

class App extends React.Component {
  
  render () {
    return (
      <Fragment>
        <Router>
          <Navbar />
        </ Router>
        {/* <Gallery /> */}
        <About />
        <Portfolio />
        <Footer /> 
      </Fragment>
    );
  }
}

export default App;




