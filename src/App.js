import React, { Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Gallery from './containers/gallery.js'
import Navbar from './components/navbar.js'
import ReactDOM from 'react-dom'
import Slider from 'react-slick'
import './App.css';

class App extends React.Component {
  
  render () {
    
    return (
      <Fragment>
        <Router>
          <Navbar />
        </ Router>
        <div className="banner"><h2>What makes John a great software developer?</h2></div>
        <Gallery />
      </Fragment>
    );
  }
}

export default App;






