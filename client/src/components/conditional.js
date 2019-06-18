import React, { Component } from 'react';
import './begin.css';
import WakeUp1 from "./wakeup/wakeup1"
import WakeUp2 from "./wakeup/wakeup2"
import WakeUp3 from "./wakeup/wakeup3"
import WakeUp4 from "./wakeup/wakeup4"
import OpenEyes from "./wakeup/openEyes"



const conditional = (props) => {
  if (props.wakes[2]) {
    window.onscroll = undefined
  }
  return <div>
    {props.wakes[1] && <WakeUp1 trueizer={props.trueizer}></WakeUp1>}
    {props.wakes[2] && <WakeUp2 trueizer={props.trueizer}></WakeUp2>}
    {props.wakes[3] && <WakeUp3 trueizer={props.trueizer}></WakeUp3>}
    {props.wakes[4] && <WakeUp4 trueizer={props.trueizer}></WakeUp4>}
    {props.wakes[5] && <OpenEyes trueizer={props.trueizer}></OpenEyes>}
  </div>
}







export default conditional