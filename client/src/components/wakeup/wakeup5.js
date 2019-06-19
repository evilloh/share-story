import React, { Component } from 'react';
import '../wakeUp.css';

class WakeUp1 extends Component {


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

    window.onbeforeunload = () => window.scrollTo(0, 0);


    window.onscroll = () => {
      let scroll = window.scrollY / (document.documentElement.offsetHeight - window.innerHeight)
      this.setState({ scrollY: scroll })
      // console.log(this.state.scrollY)
      document.querySelector(".wakeUp").style.height = `${50 - this.state.scrollY * 50}vh`
      document.querySelector(".wakeDown").style.height = `${50 - this.state.scrollY * 50}vh`

      document.querySelector(".text1WakeUp").style.opacity = `${0 + this.state.scrollY * 1}`
      document.querySelector(".text1WakeUp").style.transform = 'translate(-50%, -50%) scale(' + this.state.scrollY + ')'


      if (this.state.scrollY > 0.99) {
        setTimeout(() => {
          document.querySelector(".wakeUp").classList.add("close");
          document.querySelector(".wakeDown").classList.add("close");

          document.querySelector(".text1WakeUp").classList.add("closeText");

          setTimeout(() => {
            this.props.trueizer(11)
          }, 2000);
        }, 1000);
      }

    }



  }

  render() {
    return (
      <div className="superContainer" >
        <div className="wakeUp"></div>
        <h1 className="text1WakeUp">A new day asd 555.</h1>
        <div className="wakeDown"></div>
      </div>
    )
  }

}

export default WakeUp1;