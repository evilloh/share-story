import React, { Component } from 'react';
import '../wakeUp.css';

class Door3 extends Component {


  constructor(props) {
    super(props)
    this.state = {}

  }

  setToTop = () => {
    setTimeout(() => {
      console.log("Diocane")
      window.scrollTo(0, 0);
    }, 0)
  }

  componentWillMount() {
    // this.setToTop()

  }


  componentDidMount() {
    setTimeout(() => {
      var audio = new Audio('/sounds/door3.mp3');
      audio.play();
    }, 1000);

    setTimeout(() => {
      this.props.trueizer(21)
    }, 9000);
  }

  render() {

    return (
      <>
        <div className="blackDiv">
        </div>
        <div className="doorContainer3" >
        </div>
      </>
    )
  }

}

export default Door3;