import React from 'react';
import { Route,  BrowserRouter as Router, Switch } from 'react-router-dom';

//My Component
import './App.css';
import Home from './components/home';
import Play  from './components/play';
import HowToPlay from './components/howToPlay';
import Test from './components/test';
import CameraInput from './components/test/cameraInput';
import HandCricket from './components/test/handCricket';
import HandCricket1 from './components/test/handCricket1';
import RobotHand from './components/test/robotHand';
import Notfound from './components/notFound';

 export default function App(){ 
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/play" component={Play}/>
          <Route path="/howToPlay" component={HowToPlay}/>
          <Route path="/test" component={Test}/>
            
            <Route path="/cameraInput" component={CameraInput}/>
            <Route path="/handCricket" component={HandCricket}/>
             <Route path="/handCricket1" component={HandCricket1}/>
            <Route path="/robotHand" component={RobotHand }/>
            
          <Route component={Notfound} />
        </Switch>
      </Router>
   
    </> 
  );
  
}


