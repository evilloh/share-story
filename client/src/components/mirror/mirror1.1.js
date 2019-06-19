import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../mirror.css';


class Mirror1 extends Component {


  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0,
      ready: false
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
      document.querySelector(".mirrorImg1").style.opacity = `${0 + this.state.scrollY * 1}`

      if (this.state.scrollY > 0.99) {
        window.onscroll = undefined

        if (this.props.wakes[6]) {
          setTimeout(() => {
            this.props.trueizer(6)
          }, 2000);
        } else if (this.props.wakes[16]) {
          setTimeout(() => {
            this.props.trueizer(16)
          }, 2000);
        } else if (this.props.wakes[26]) {
          setTimeout(() => {
            this.props.trueizer(26)
          }, 2000);
        }

        // this.setState({ ready: true })
      }
    }

  }

  render() {
    window.onbeforeunload = () => window.scrollTo(0, 0);
    return (
      <>
        {this.state.ready && <Link to="/mirror1" className="firstMirrorLink"><h2 className>MADONNINAAAAAA</h2></Link>}
        <div className='appearFromWhite'></div>
        <div className="superContainer">
          <div className="mirrorContainer" >

            <img src="/img/mirror0.jpg" alt="mirror" className="mirrorImg" />
            <img src="/img/mirror1.jpg" alt="mirror" className="mirrorImg1" />
          </div>
        </div>
      </>
    )
  }

}

export default Mirror1;