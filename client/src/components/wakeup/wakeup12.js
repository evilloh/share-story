import React, { Component } from 'react';
import '../wakeUp.css';

class WakeUp4 extends Component {


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

    window.onscroll = () => {
      let scroll = window.scrollY / (document.documentElement.offsetHeight - window.innerHeight)
      this.setState({ scrollY: scroll })
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

            // THIS ALWAYS WHEN THE NEXT COMPONENT TO BE MOUNTED DOESNT HAVE A ONSCROLL 
            window.onscroll = undefined

            this.props.trueizer(24)
          }, 2000);

        }, 1000);
      }


    }
  }

  render() {
    // I have to put a timeout because it doesn't wait for the shit to render before doing it. I WANT A PROMISE!!

    return (
      <div className="superContainer2" >
        <div className="wakeUp"></div>
        <h1 className="text1WakeUp">I don't even recognise myself at the mirror anymore.</h1>
        <div className="wakeDown"></div>
      </div>
    )
  }

}

export default WakeUp4;