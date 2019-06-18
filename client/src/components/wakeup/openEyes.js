import React, { Component } from 'react';
import '../wakeUp.css';

class openEyes extends Component {


  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0
    }

  }

  setToTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0)
  }

  componentWillMount() {
    this.setToTop()

  }


  componentDidMount() {

    setTimeout(() => {
      document.querySelector(".wakeUp").classList.add("open");
      document.querySelector(".wakeDown").classList.add("open");
      document.querySelector(".superContainer").style.backgroundColor = "white";
      console.log(this.props.wakes)

      if (this.props.wakes[5]) {
        setTimeout(() => {
          this.props.trueizer(5)
        }, 2000);
      } else if (this.props.wakes[14]) {
        setTimeout(() => {
          this.props.trueizer(14)
        }, 2000);
      } else if (this.props.wakes[26]) {
        setTimeout(() => {
          this.props.trueizer(26)
        }, 2000);
      }

    }, 1500);

  }

  render() {
    // I have to put a timeout because it doesn't wait for the shit to render before doing it. I WANT A PROMISE!!

    return (
      <div className="superContainer" >
        <div className="wakeUp"></div>
        <div className="wakeDown"></div>
      </div>
    )
  }

}

export default openEyes;