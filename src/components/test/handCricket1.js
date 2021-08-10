import React, { Component } from 'react';

class handCricket1 extends Component {
  
  render() {
    
    return (
      <>
      <div className="mainContent card">
        {this.props.name}
        {this.props.player}
        {this.props.toss}
      </div>
      </>
    );
  }
}


export default handCricket1;