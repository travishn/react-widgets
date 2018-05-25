
import React from 'react';

class Clock extends React.Component{

  constructor() {
    super();
    this.time = new Date();
    this.state = {
      seconds: this.time.getSeconds(),
      minutes: this.time.getMinutes(),
      hours: this.time.getHours()
    };

    this.tick = this.tick.bind(this);
  }

  render () {
    return (
      <div>
        <h1>Ze Clock</h1>
        <h2>Current Time: {this.state.hours}:{this.state.minutes}:{this.state.seconds}</h2>
      </div>
    );
  }

  tick () {
    this.setState({seconds: this.state.seconds+1});

    if (this.state.seconds === 60) {
      this.setState({
        seconds: 0,
        minutes: this.state.minutes+1
      });
    }

    if (this.state.minutes === 60) {
      this.setState({
        minutes: 0,
        hours: this.state.hours+1
      });
    }

    if (this.state.hours === 24) {
      this.setState({
        hours: 0
      });
    }
  }

  componentDidMount() {
      this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

}
export default Clock;
