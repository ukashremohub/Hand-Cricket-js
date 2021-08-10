import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class handCricket extends Component {
 
  constructor(props){
    super(props);
    this.state = {name: '',players: 1 ,toss:''};
    this.handlePlayersChange=this.handlePlayersChange.bind(this);
    this.handleNameChange=this.handleNameChange.bind(this);
    this.handleTossChange=this.handleTossChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleNameChange(event) {
    this.setState(  {name : event.target.value});
  } 
 handlePlayersChange(event) {
    this.setState({players: event.target.value});
  }
handleTossChange(event) {
    this.setState({toss: event.target.value});
  }

  
  handleSubmit(event) {
    if(this.state.name === '' ||  this.state.toss === '' ){
      alert("pls fill all box");
    }else{
      alert('Your Entered : ' + this.state.name +"   players  :" + this.state.players+"  Toss  :" + this.state.toss);
      this.props.history.push("/handCricket1");
    }
    
  
  }
 
  render() {
      
    return (
      <>
      
        <div className="mainContent card ">
          <h1><u> Test of Hand Cricket Game </u></h1><br/><br/>
          <div className ="cardSide">
          <TextField  required label="Name" variant="outlined" value={this.state.name} onChange={this.handleNameChange} /><br/><br/>
          <hr/>
          
          <TextField required select label="Player" helperText="Please select Number of player" variant="outlined" 
          value={this.state.players} 
          onChange={this.handlePlayersChange}>
           <option value={1}>One Player</option>
           <option value={2}>Two Player</option>
           <option value={3}>Three Player</option>
           <option value={4}>Four Player</option>
          </TextField>
          <hr/>
          <TextField required select label="Toss" helperText="Please select Head or Tail" variant="outlined" 
          value={this.state.toss} 
          onChange={this.handleTossChange} >
           <option  value={'head'}>Head</option>
           <option  value={'tail'}>Tail</option>
          </TextField>

          </div>
          <br/><br/>
          <Button  onClick={ this.handleSubmit} variant="contained" color="primary">Toss </Button>
           <br/><br/>
         
        </div>
      </>
    );
  }
}

export default handCricket;

//  var x = Math.floor((Math.random() * 6) + 1);