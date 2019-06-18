import React, { Component } from 'react';
import '../wakeUp.css';

class Door1 extends Component {


  constructor(props) {
    super(props)
    this.state = {}

  }

  setToTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0)
  }

  componentDidMount() {
    setTimeout(() => {
      var audio = new Audio('/sounds/door1.mp3');
      audio.play();
    }, 1000);

    setTimeout(() => {
      this.props.trueizer(0)
    }, 9000);

  }

  render() {

    return (
      <>
        <div className="blackDiv">
        </div>
        <div className="doorContainer" >
        </div>
      </>
    )
  }

}

export default Door1;