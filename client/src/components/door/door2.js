import React, { Component } from 'react';
import '../wakeUp.css';

class Door2 extends Component {


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



  componentDidMount() {
    setTimeout(() => {
      var audio = new Audio('/sounds/door2.mp3');
      audio.play();
    }, 1000);

    setTimeout(() => {
      this.props.trueizer(9)
    }, 9000);

  }

  render() {

    return (
      <>
        <div className="blackDiv">
        </div>
        <div className="doorContainer2" >
        </div>
      </>
    )
  }

}

export default Door2;