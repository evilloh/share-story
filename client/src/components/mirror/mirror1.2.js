import React, { Component } from 'react';
import '../mirror.css';
import anim from "./animation"
import Vivus from "vivus";
// import ReactVivus from 'react-vivus';

class Mirror1_2 extends Component {


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
      this.props.trueizer(7)
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
          <rect x="29" y="270.335" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -137.8324 506.5779)" width="14" height="23"/>
          <rect x="100" y="294.333" width="14" height="23"/>
          <rect y="203.333" width="23" height="14"/>
          <rect x="190" y="203.333" width="23" height="14"/>
          <rect x="171" y="270.334" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -147.1514 208.4121)" width="14" height="23"/>
          <rect x="171" y="127.334" transform="matrix(0.7071 0.7071 -0.7071 0.7071 150.3055 -85.2015)" width="14" height="23"/>
            <polygon id="arrowSvg" points="134.45,27.383 109.818,2.752 109.811,2.76 107.041,0 104.214,2.784 104.183,2.752 100.011,6.924 100,6.935 
          	100,6.935 79.926,27.01 89.826,36.909 100,26.734 100,117.333 114,117.333 114.067,26.8 124.55,37.283 "/>
          <rect x="29.001" y="127.334" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 159.6268 211.5474)" width="14" height="23"/>
          </svg>
        </div>
        <div className="blackDiv2"></div>
        <div id="before-after">
          <div className="view view-after">   <img src="/img/mirrorDay1.jpg" alt="mirror" /></div>
          <div className="view view-before">  <img src="/img/mirror1.jpg" alt="mirror" /></div>
          <div id="dragme"></div>
        </div>
      </>
    )
  }

}

export default Mirror1_2;