import React, { Component } from 'react';
import {Link }from 'react-router-dom';

//Material-UI
import Button from '@material-ui/core/Button';


class home extends Component {
  render() {
    return (
      <>
         <div className="mainContent card "> 
            <h1> Hand Cricket</h1> 
            Hand Cricket game with computer .. <br/><br/>
            <Link to ="/play"><Button variant="contained" color="primary"> PLAY </Button> </Link> <br/><br/>
            <Link to ="/howToPlay"><Button variant="contained"> How to PLAY? </Button> </Link> <br/><br/>
            <Link to ="/test"><Button variant="contained"> Test</Button> </Link> <br/><br/>
        </div>
      </>
    );
  }
}

export default home;