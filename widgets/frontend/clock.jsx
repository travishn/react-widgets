
import React from 'react';

class Clock extends React.Component{

  constructor() {
    super();
    this.time = new Date();
    this.state = {
      seconds: this.time.getSeconds(),
      minutes: this.time.getMinutes(),
      hours: this.time.getHours(),
      day: this.time.getDate(),
      month: this.time.getMonth(),
      year: this.time.getFullYear()
    };

    this.tick = this.tick.bind(this);
  }

  render () {
    return (
      <div className = "clock">
        <h1>Ze Clock</h1>
        <div className = "clock_box_1">
          <section className = "clock_box_1a">
            <h2 className = "time-header">Current time: </h2>
            <h2 className = "time-numeral"> {this.state.hours}:{this.state.minutes}:{this.state.seconds}</h2>
          </section>
          <section className ="clock_box_1b">
            <h2 className = "date-header">Current date: </h2>
            <h2 className = "date-numeral"> {this.state.month}:{this.state.day}:{this.state.year}</h2>
          </section>
        </div>
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
