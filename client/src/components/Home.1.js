import React, { Component } from 'react';
import WakeUp1 from "./wakeup/wakeup1"
import WakeUp2 from "./wakeup/wakeup2"
import WakeUp3 from "./wakeup/wakeup3"
import WakeUp4 from "./wakeup/wakeup4"
import OpenEyes from "./wakeup/openEyes"
import Door1 from "./door/door1"
import Door2 from "./door/door2"
import Door3 from "./door/door3"
import Mirror1 from "./mirror/mirror1.1"
// import Mirror1_2 from "./mirror/mirror1.2"
// import Mirror2_2 from "./mirror/mirror2.2"
// import Mirror3_2 from "./mirror/mirror3.2"
// import Loop from "./loop/loop"
// import Loop1 from "./loop/loop.1"
// import FirstDay from "./firstDay/firstDay"
import './home.css';

class Home extends Component {


  constructor(props) {
    super(props)
    this.state = {
      wakes: {
        1: false,
        2: false,
      }

    }

  }

  trueizer = (level) => {

    let newWakes = { ...this.state.wakes }
    newWakes[level] = false
    newWakes[level + 1] = true
    this.setState({
      wakes: newWakes
    })
  }

  componentDidMount() {

  }
  // quello che voglio fare e' mettere Wakeup1, 2 etc... e passargli una funzione tipo <WakeUp1 -goNext- />, la funzione, del padre,
  // fa in modo di renderizzare il prossimo wakeup, al quale passo un altro -goNext- fino a che non finisco e l'ultimo avra' una funzione di fine, che ne so io.
  render() {

    return (
      <React.Fragment>
        {this.state.wake1 && <WakeUp1></WakeUp1>}
        {this.state.wake1 && <WakeUp1></WakeUp1>}
        {this.state.wake1 && <WakeUp1></WakeUp1>}

      </React.Fragment>
    )
  }

}

export default Home;