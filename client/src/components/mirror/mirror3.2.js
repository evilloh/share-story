import React, { Component } from 'react';
import '../mirror.css';
import anim from "./animation"
// import ReactVivus from 'react-vivus';

class Mirror3_2 extends Component {


  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0
    }
    this.done = true
  }


  goToNext = () => {
    window.onmousemove = undefined
    setTimeout(() => {
      this.props.trueizer(27)
    }, 2000);
    document.querySelector(".blackDiv2").classList.add("appear")
  }

  componentDidMount() {
    anim()
     window.onmousemove = e => {
      if (document.documentElement.clientWidth - 115 < document.querySelector('#newDaySvg').getBoundingClientRect().left && this.done) {
        document.querySelector(".view-after").classList.add("toTheLeft")
        // para que no se llame this.goToNext mil veces
        this.done = false
        this.goToNext()
      }
    }
  }

  render() {
    return (
      <>
        <div>
          <svg version="1.1" id="newDaySvg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	          width="70px"  viewBox="0 0 213 317.333" enableBackground="new 0 0 213 317.333" xmlSpace="preserve">
          <circle fill="none" stroke="#000000" strokeWidth="16" strokeMiterlimit="10" cx="107.167" cy="210.5" r="49.5"/>
            <polygon id="arrowSvg" points="134.45,27.383 109.818,2.752 109.811,2.76 107.041,0 104.214,2.784 104.183,2.752 100.011,6.924 100,6.935 
          	100,6.935 79.926,27.01 89.826,36.909 100,26.734 100,117.333 114,117.333 114.067,26.8 124.55,37.283 "/>
          </svg>
        </div>
        <div className="blackDiv2"></div>
        <div id="before-after">
          <div className="view view-after">   <img src="/img/mirrorDay3.jpg" alt="mirror" /></div>
          <div className="view view-before">  <img src="/img/mirror1.jpg" alt="mirror" /></div>
          <div id="dragme"></div>
        </div>
      </>
    )
  }

}

export default Mirror3_2;