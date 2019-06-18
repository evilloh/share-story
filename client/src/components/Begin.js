import React, { Component } from 'react';
// import EyesDay1 from "./conditional"
import Door1 from "./door/door1"
import WakeUp1 from "./wakeup/wakeup1"
import WakeUp2 from "./wakeup/wakeup2"
import WakeUp3 from "./wakeup/wakeup3"
import WakeUp4 from "./wakeup/wakeup4"
import OpenEyes from "./wakeup/openEyes"
import FirstDay from "./firstDay/firstDay"
import Mirror1 from "./mirror/mirror1.1"
import Mirror1_2 from "./mirror/mirror1.2"
import EyesDay2 from "./conditional2"

import Door2 from "./door/door2"
import WakeUp5 from "./wakeup/wakeup5"
import WakeUp6 from "./wakeup/wakeup6"
import WakeUp7 from "./wakeup/wakeup7"
import WakeUp8 from "./wakeup/wakeup8"
import Mirror2_2 from "./mirror/mirror2.2"
import Choice from "./choice"

import Door3 from "./door/door3"
import WakeUp9 from "./wakeup/wakeup9"
import WakeUp10 from "./wakeup/wakeup10"
import WakeUp11 from "./wakeup/wakeup11"
import WakeUp12 from "./wakeup/wakeup12"
import Mirror3_2 from "./mirror/mirror3.2"
import Loop from "./loop/loop"
import Loop1 from "./loop/loop.1"
import { Link } from 'react-router-dom'
import './begin.css';
// import casona from './canvasLoop'


class Home extends Component {


  constructor(props) {
    super(props)
    this.state = {
      wakes: {
        0: true,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
        17: false,
        18: false,
        19: false,
        20: false,
        21: false,
        22: false,
        23: false,
        24: false,
        25: false,
        26: false,
        50: false,
      }


    }

    this.trueizer = (level) => {
      let newWakes = { ...this.state.wakes }
      newWakes[level] = false
      newWakes[level + 1] = true
      this.setState({
        wakes: newWakes
      })
    }
  }



  componentDidMount() {
    window.onscroll = undefined
    if (this.props.level === 1) {
      this.props.levelizer()
      this.setState({
        wakes: {
          0: false,
          1: false,
          2: false,
          3: false,
          4: false,
          5: false,
          6: false,
          7: false,
          8: false,
          9: true,
          10: false,
          11: false,
          12: false,
          13: false,
          14: false,
          15: false,
          16: false,
          17: false,
          18: false,
          19: false,
          20: false,
          21: false,
          22: false,
          23: false,
          24: false,
          25: false,
          26: false,
          50: false,
        }
      })
    }
    // console.log("here", window.onscroll, this.state.wakes)
  }



  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        {this.state.wakes[0] && <Door1 wakes={this.state.wakes} trueizer={this.trueizer}></Door1>}
        {this.state.wakes[1] && <WakeUp1 trueizer={this.trueizer}></WakeUp1>}
        {this.state.wakes[2] && <WakeUp2 trueizer={this.trueizer}></WakeUp2>}
        {this.state.wakes[3] && <WakeUp3 trueizer={this.trueizer}></WakeUp3>}
        {this.state.wakes[4] && <WakeUp4 trueizer={this.trueizer}></WakeUp4>}
        {this.state.wakes[5] && <OpenEyes wakes={this.state.wakes} trueizer={this.trueizer}></OpenEyes>}
        {this.state.wakes[6] && <Mirror1 wakes={this.state.wakes} trueizer={this.trueizer}></Mirror1>}
        {this.state.wakes[7] && <Mirror1_2 wakes={this.state.wakes} trueizer={this.trueizer}></Mirror1_2>}
        {this.state.wakes[8] && <FirstDay wakes={this.state.wakes} trueizer={this.trueizer} props={this.props}></FirstDay>}

        {this.state.wakes[9] && <Door2 wakes={this.state.wakes} trueizer={this.trueizer}></Door2>}
        {this.state.wakes[10] && <WakeUp5 trueizer={this.trueizer}></WakeUp5>}
        {this.state.wakes[11] && <WakeUp6 trueizer={this.trueizer}></WakeUp6>}
        {this.state.wakes[12] && <WakeUp7 trueizer={this.trueizer}></WakeUp7>}
        {this.state.wakes[13] && <WakeUp8 trueizer={this.trueizer}></WakeUp8>}
        {this.state.wakes[14] && <OpenEyes wakes={this.state.wakes} trueizer={this.trueizer}></OpenEyes>}
        {this.state.wakes[15] && <Mirror1 wakes={this.state.wakes} trueizer={this.trueizer}></Mirror1>}
        {this.state.wakes[16] && <Mirror2_2 wakes={this.state.wakes} trueizer={this.trueizer}></Mirror2_2>}
        {this.state.wakes[17] && <Choice wakes={this.state.wakes} trueizer={this.trueizer}></Choice>}


        {this.state.wakes[21] && <Door3 wakes={this.state.wakes} trueizer={this.trueizer}></Door3>}
        {this.state.wakes[22] && <WakeUp9 trueizer={this.trueizer}></WakeUp9>}
        {this.state.wakes[23] && <WakeUp10 trueizer={this.trueizer}></WakeUp10>}
        {this.state.wakes[24] && <WakeUp11 trueizer={this.trueizer}></WakeUp11>}
        {this.state.wakes[25] && <WakeUp12 trueizer={this.trueizer}></WakeUp12>}
        {this.state.wakes[26] && <OpenEyes wakes={this.state.wakes} trueizer={this.trueizer}></OpenEyes>}
        {this.state.wakes[27] && <Mirror1 wakes={this.state.wakes} trueizer={this.trueizer}></Mirror1>}
        {this.state.wakes[28] && <Mirror3_2 wakes={this.state.wakes} trueizer={this.trueizer}></Mirror3_2>}

        {this.state.wakes[29] && <Loop wakes={this.state.wakes} trueizer={this.trueizer}></Loop>}
        {this.state.wakes[30] && <Loop wakes={this.state.wakes} trueizer={this.trueizer}></Loop>}
        {this.state.wakes[19] && <Loop wakes={this.state.wakes} trueizer={this.trueizer}></Loop>}
        {this.state.wakes[20] && <Loop1 wakes={this.state.wakes} trueizer={this.trueizer}></Loop1>}

        {this.state.wakes[50] && <Home wakes={this.state.wakes} trueizer={this.trueizer} ></Home>}


      </React.Fragment>
    )
  }

}

export default Home;