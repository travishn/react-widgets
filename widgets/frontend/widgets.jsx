import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';


const Root =  () => (
  <div>
    <Clock/>
    <h1> It works hooray</h1>
  </div>
);


document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root/>, document.getElementById("main"));
});
