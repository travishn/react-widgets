import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';



const data = [ {title: 'title1', content: 'content1'}, {title: 'title2', content: 'content2' } , {title: 'title3', content: 'content3'} ];
const Root =  () => (
  <div>
    <Clock/>
    <Tabs info={data}/>
  </div>
);


document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root/>, document.getElementById("main"));
});
