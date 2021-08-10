import React, { Component } from 'react';
import {Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

class test extends Component {
  render() {
    return (
      <>
      
      <div className="mainContent card">
        <h1>Test of Game</h1>
        <br/><br/>
        <Link to ="/cameraInput"><Button variant="contained" color="primary"> Camera Input </Button> </Link> <br/><br/>
        <Link to ="/handCricket"><Button variant="contained" color="primary"> Hand-Cricket </Button> </Link> <br/><br/>
        <Link to ="/robotHand"><Button variant="contained" color="primary"> Robot-Hand </Button> </Link> <br/><br/> 
       </div>
   
      </>
    );
  }
}

export default test;