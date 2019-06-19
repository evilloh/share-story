import React, { Component } from 'react';
import './finale.css';
import axios from 'axios'


class Finale extends Component {


  constructor(props) {
    super(props)
    this.state = {
      help: false,
      description: "",
      ratio: 0,
    }
    let scrollerino = 0
    this.nextSentence = (n) => {

      console.log("casa")
      document.querySelector(`.end${n}`).style.display = "none"
      document.querySelector(`.end${n + 1}`).style.display = "block"

      let val = 242 - n * 40
      document.querySelector(".finaleContainer").style.backgroundColor = `rgb(${val}, ${val}, ${val})`

    }
  }


  componentDidMount() {
    document.querySelector(".end6").addEventListener("click", () => {
      axios.get(`http://localhost:5000/lastOne`)
        .then(theChoice => {
          this.setState({ help: theChoice.data.post.help, description: theChoice.data.post.description, ratio: theChoice.data.ratio })
          console.log("ITS NEWWWW!", theChoice)
        })
        .catch(err => console.log("You couldn't make a choice!", err))

    });

    window.onbeforeunload = () => window.scrollTo(0, 0);
  }


  render() {
    return (
      <React.Fragment>
        <div className="finaleContainer">
          <h2 className="ending end1" onClick={() => this.nextSentence(1)}>It could end now.</h2>
          <h2 className="ending end2" onClick={() => this.nextSentence(2)}>No more responsibilities.</h2>
          <h2 className="ending end3" onClick={() => this.nextSentence(3)}>No more pressure.</h2>
          <h2 className="ending end4" onClick={() => this.nextSentence(4)}>No more anxiety.</h2>
          <h2 className="ending end5" onClick={() => this.nextSentence(5)}>You'd feel free.</h2>
          <h2 className="ending end6" onClick={() => this.nextSentence(6)}>Finally.</h2>
          <div className="end7">
            {!this.state.help &&
              <div className="gameOver">
                <p>You didn't find anyone that could say something helpful to you in this unfortunate state of your life.</p>
                <p>
                  <span>Share</span> is not just a story, it is an experiment. I wanted to share a story with all of you, maybe helping out someone in the process.
                  What I wanted to show, sharing this story, is that depression is more common that it may look like. And it's with sharing your emotions that
                  the stigma behind it will disappear. Otherwise, if we hide behind a pretty Instagram picture, or a fake smile all the time, nobody will realise how normal it is to feel this way.
                </p>
                <p>How common and how <span>human</span> it is.</p>
                <p>If this is your case, you are not broken, you are not useless and most importantly you are not alone.</p>
              </div>
            }
            {this.state.help &&
              <div className="gameWon">
                <p class="next">Next</p>
                <div className="firstWonCont">
                  <p>You hear someone shouting at you:</p>
                  <h2>{this.state.description}</h2>

                </div>
                <div className="secondWonCont">
                  <p>You feel less alone, and you say to yourself: </p>
                  <p>"Suicide is a permanent solution to a temporary problem."</p>
                </div>

                <p><span>Share</span> is not just a story, it is an experiment. I wanted to share a story with all of you, maybe helping out someone in the process.
                  What I wanted to show, sharin how <span>human</span> it is. If this is your case, you are not broken, you are not useless and most importantly you are not alone.
            </p>
              </div>
            }
            <h1>It's Over</h1>

          </div>
        </div>
      </React.Fragment>


    )
  }

}

export default Finale;