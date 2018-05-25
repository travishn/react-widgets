
import React from 'react';

class Clock extends React.Component{

  constructor() {
    super();
    this.state = {time: new Date()};
  }

  render () {
    return (
      <div>
        <h1>Ze Clock</h1>
      </div>
    );
  }

  tick () {
    this.setState({time: new Date()});
  }

  componentDidMount() {
      window.setInterval(this.tick(), 1000);
  }

}
export default Clock;
