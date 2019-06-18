import React, { Component } from 'react';
import './begin.css';
// import Door1 from "./door/door1"
// import Door2 from "./door/door2"
// import Door3 from "./door/door3"

const conditional = (props) => {
  if (props.wakes[5]) {
    window.onscroll = undefined
  }
  return <div>
    <h1>Diocane</h1>
  </div>
}







export default conditional