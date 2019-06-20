import React, { Component } from 'react';
// import WakeUp1 from "./wakeup/wakeup1"
// import WakeUp2 from "./wakeup/wakeup2"
// import WakeUp3 from "./wakeup/wakeup3"
// import WakeUp4 from "./wakeup/wakeup4"
// import OpenEyes from "./wakeup/openEyes"
// import Door1 from "./door/door1"
// import Door2 from "./door/door2"
// import Door3 from "./door/door3"
// import Mirror1 from "./mirror/mirror1.1"
// import Mirror1_2 from "./mirror/mirror1.2"
// import Mirror2_2 from "./mirror/mirror2.2"
// import Mirror3_2 from "./mirror/mirror3.2"
// import Loop from "./loop/loop"
// import Loop1 from "./loop/loop.1"
// import FirstDay from "./firstDay/firstDay"
import './home.css';
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

class Home extends Component {


  constructor(props) {
    super(props)
    this.state = {}

  }

  componentDidMount() {
    const showTextsSecond = () => {
      document.querySelector('.firstSent').classList.add("appear4")
      document.querySelector('.secondSent').classList.add("appear3d1")
      document.querySelector('.thirdSent').classList.add("appear2d2")
      document.querySelector('.fourthSent').classList.add("appear3")
      document.querySelector('.fifthSent').classList.add("appear4")
      document.querySelector('.sixthSent').classList.add("appear3d1")
      document.querySelector('.seventhSent').classList.add("appear3")
      document.querySelector('.eighthSent').classList.add("appear2d2")
    }

    const hideTextSecond = () => {
      document.querySelector('.firstSent').classList.remove("appear4")
      document.querySelector('.secondSent').classList.remove("appear3d1")
      document.querySelector('.thirdSent').classList.remove("appear2d2")
      document.querySelector('.fourthSent').classList.remove("appear3")
      document.querySelector('.fifthSent').classList.remove("appear4")
      document.querySelector('.sixthSent').classList.remove("appear3d1")
      document.querySelector('.seventhSent').classList.remove("appear3")
      document.querySelector('.eighthSent').classList.remove("appear2d2")

    }


    const isInViewport = el => {
      const rect = el.getBoundingClientRect()
      const vertInView = (rect.top <= window.innerHeight) && ((rect.top + rect.height) >= 0)
      const horInView = (rect.left <= window.innerWidth) && ((rect.left + rect.width) >= 0)
      return (vertInView && horInView)
    }

    let scrollY

    window.onscroll = () => {
      scrollY = window.scrollY

      if (isInViewport(document.getElementById('hero'))) {
        console.log("Casa ")
        document.querySelector('.hero-inertia').style.transform = `translateY(${scrollY * .3}px)`
        document.querySelector('.h3-inertia').style.transform = `translateY(${scrollY * .27}px)`
      }

      // if (1 > 0) {
      if (this.props.level > 0) {

        // SECOND SECTION PART

        if (document.querySelector("body").classList.contains("secondSection")) {
          // console.log(scrollY)
          document.querySelector('.firstSent').style.transform = `translateY(${scrollY * -0.2}px)`
          document.querySelector('.secondSent').style.transform = `translateY(${scrollY * .17}px)`
          document.querySelector('.thirdSent').style.transform = `translateY(${scrollY * -.37}px)`
          document.querySelector('.fourthSent').style.transform = `translateY(${scrollY * .17}px)`
          document.querySelector('.fifthSent').style.transform = `translateY(${scrollY * .27}px)`
          document.querySelector('.sixthSent').style.transform = `translateY(${scrollY * .17}px)`
          document.querySelector('.seventhSent').style.transform = `translateY(${scrollY * -.47}px)`
          document.querySelector('.eighthSent').style.transform = `translateY(${scrollY * .37}px)`


          if (isInViewport(document.querySelector('.secondPart2'))) {

            document.querySelector(".secondPart2").classList.add("activeSecond")
            showTextsSecond()
          } else {
            document.querySelector(".secondPart2").classList.remove("activeSecond")
            hideTextSecond()
          }
        }

      }
      /////// THIRD PART ///////

      if (this.props.level > 1) {
        if (isInViewport(document.querySelector('.thirdPartTwo'))) {
          document.querySelector(".lastOne").classList.add("appear3d1")
          document.querySelector(".lastKnock").classList.add("appear4")
        } else {
          document.querySelector(".lastOne").classList.remove("appear3d1")
          document.querySelector(".lastKnock").classList.remove("appear4")
        }
      }

      if (this.props.level > 1) {
        if (isInViewport(document.querySelector('.thirdPart'))) {

          document.querySelector(".onePthird").classList.add("faderino1")
          document.querySelector(".twoPthird").classList.add("faderino2")
          document.querySelector(".threePthird").classList.add("faderino3")
          document.querySelector(".fourPthird").classList.add("faderino4")
          document.querySelector(".fivePthird").classList.add("faderino5")
        } else {

          document.querySelector(".onePthird").classList.remove("faderino1")
          document.querySelector(".twoPthird").classList.remove("faderino2")
          document.querySelector(".threePthird").classList.remove("faderino3")
          document.querySelector(".fourPthird").classList.remove("faderino4")
          document.querySelector(".fivePthird").classList.remove("faderino5")
        }

      }

      document.querySelectorAll('.reveal').forEach(elm => {
        if (isInViewport(elm)) {

          document.querySelector(".knockIntro").classList.add('knockAppear')
          elm.classList.add('appear')
        } else {
          elm.classList.remove('appear')
        }
      })

      document.querySelectorAll('.reveal2').forEach(elm => {
        if (isInViewport(elm)) {
          document.querySelector(".secondKnock").classList.add('knockAppear')
          elm.classList.add('appear')
        } else {
          elm.classList.remove('appear')
        }
      })



    }
  }
  // quello che voglio fare e' mettere Wakeup1, 2 etc... e passargli una funzione tipo <WakeUp1 -goNext- />, la funzione, del padre,
  // fa in modo di renderizzare il prossimo wakeup, al quale passo un altro -goNext- fino a che non finisco e l'ultimo avra' una funzione di fine, che ne so io.
  render() {
    console.log(this.props, "let's see")

    return (
      <React.Fragment>
        <header id="hero" className="headerContainer">
          <div className="titleContainer hero-inertia">
            {this.props.level > 1 ?
              <Link smooth to="/#exactline2"><h1 id="die">LET'S FINISH THIS, SHALL WE?</h1></Link>
              : <h1>Share</h1>
            }

          </div>

          {this.props.level > 1 ? <h3 className="h3-inertia">You know you want it.</h3> : <h3 className="h3-inertia">Let me tell you a story.</h3>}
        </header>
        <div className="intermediateDiv">
        </div>
        <section className="sectionContainer">
          <div className="infoContainer">

            <div className="introContainer reveal">
              <h2 >A Story</h2>
            </div>
            <div className="introDescription reveal">
              <p>For many years I´ve been dealing with depression and suicidal thoughts.</p>
              <p> I’ve been able to fight back those impulses and relegate them away, but it feels like it could be any moment that something triggers a button in my head and makes the nightmare start over again.</p>
              <p> To me it feels like if a monster called depression is waiting outside the door of my house, knocking every once in a while, asking to come in. </p>
            </div>
          </div>

          <Link to="/begin" props={this.props}> <h4 className="knockIntro">Knock Knock</h4></Link>

        </section>

        {
          this.props.level > 0 && <div>
            <section className="secondPart" id="exactline">
              <h2 className="secondPartTitle">It just gives me more reasons to <span>end</span> this insufferable pain.</h2>
            </section>
            <section className="secondPart2">
              <h4 className="firstSent">What's the purpose</h4>
              <h4 className="secondSent">I just want it to stop</h4>
              <h4 className="thirdSent">I'm tired</h4>
              <h4 className="fourthSent">Why all this pressure</h4>
              <h4 className="fifthSent">I can't stand the pressure</h4>
              <h4 className="sixthSent">Disappear</h4>
              <h4 className="seventhSent">Stop it</h4>
              <h4 className="eighthSent">Numb</h4>
            </section>
            <section className="secondPart3">
              <p className="secondP reveal2">You feel the unstoppable pressure that grows day after day, feasting on your unhappyness and rewarding you with anxiety.</p>
              <Link to="/begin"> <h4 className="secondKnock"> </h4></Link>
            </section>
          </div>
        }

        {
          this.props.level > 1 &&
          <div>
            <section className="thirdPart" id="exactline2">
              <div className="thirdPartOne">
                <p className="onePthird">You feel paralysed. You think about how you’re supposed to fill in the society, behave like everyone else.</p>
                <p className="twoPthird">How you are supposed to follow society’s beauty standard, otherwise you won’t find love. </p>
                <p className="threePthird">How you need to have a significant other, otherwise you won’t be really happy.</p>
                <p className="fourPthird">And you really start to believe that, that you can’t be loved as ugly as you are therefore you will never fulfill your happiness. </p>
                <p className="fivePthird">That the dreams and ambitions you had earlier on have just become that, dreams, compared to the undeniably worthless lifestyle you’re living now.  </p>
              </div>
              <div className="intermediateDiv secondInter">
              </div>
              <div className="thirdPartTwo">
                <div className="lastOne">
                  <h2> You feel the unstoppable pressure that grows day after day, feasting on your unhappiness and rewarding you with anxiety.</h2>
                  <Link to="/begin"> <h4 className="lastKnock">KNOCK KNOCK</h4></Link>
                </div>
              </div>

            </section>
          </div>
        }


      </React.Fragment >
    )
  }

}

export default Home;