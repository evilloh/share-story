import React, { Component } from 'react';
import '../loop.css';

class Loop1 extends Component {


  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0
    }
    let scrollerino = 0
  }


  componentDidMount() {
    document.querySelector("#areaClick").onclick = (e) => {
      e.preventDefault()
      var audio = new Audio('/sounds/doorOpen.mp3');
      audio.play();
      document.querySelector(".transitionDivWhite").style.display = "block"
      setTimeout(() => {
        this.props.trueizer(31)
      }, 1000);
    }


    window.onbeforeunload = () => window.scrollTo(0, 0);
    // setInterval(() => {
    //   document.querySelector("#casita").style.display = "block"
    //   document.querySelector("#casita").classList.toggle("glitch")
    //   console.log("casa")
    //   setTimeout(() => {
    //     document.querySelector("#casita").style.display = "none"
    //     document.querySelector("#casita").classList.toggle("glitch")
    //   }, 500);
    // }, 4000);
  }


  render() {
    let x1 = window.innerWidth / 3
    let y1 = 40;
    let x2 = window.innerWidth - x1
    let y2 = window.innerHeight / 3
    return (
      <React.Fragment>
        <div className="casita casooona"></div>
        <div className="transitionDivWhite"></div>
        <div className="disturb">
          <img className="glitchFinal" src="img/ilLadroGL4.png" alt="glitch effect" useMap="#mapperino"></img>
        </div>
        <map name="mapperino">
          <area shape="rect"
            id="areaClick"
            coords={x1 + "," + y1 + "," + x2 + "," + y2}
            href="#" alt="next" />
        </map>
      </React.Fragment>


    )
  }

}

export default Loop1;