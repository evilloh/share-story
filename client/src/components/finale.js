import React, { Component } from 'react';
import './finaletotal.css';
import axios from 'axios'
import PostServices from '../services/postServices'


class Finale extends Component {


  constructor(props) {
    super(props)

    this.state = {
      help: false,
      description: "",
      ratio: 0,
    }
    this.services = new PostServices()

    this.nextSentence = (n) => {
      if (n === 11) {
        document.querySelector(`.end${n}`).style.display = "none"
        document.querySelector(`.end9`).style.display = "block"
      } else {


        document.querySelector(`.end${n}`).style.display = "none"
        document.querySelector(`.end${n + 1}`).style.display = "block"

      }

      let val = 242 - n * 40
      document.querySelector(".finaleContainer").style.backgroundColor = `rgb(${val}, ${val}, ${val})`

      if (document.querySelector("#anyKey").style.display === "block") {
        document.addEventListener('keydown', function (event) {
          window.location.href = "https://www.google.com/search?q=puppies&rlz=1C1CHBF_itUS702US702&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj96IOXm_biAhX-BGMBHVUKAs0Q_AUIECgB&biw=1284&bih=937";
        });
      }
    }
  }


  componentDidMount() {
    document.querySelector(".end6").addEventListener("click", () => {
      this.services.getAnswer()
        .then(theChoice => {
          console.log(theChoice)
          this.setState({ help: theChoice.post.help, description: theChoice.post.description, ratio: theChoice.ratio })
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
                <div className="end8">
                  <p id="gameOverText">You didn't find anyone that could say something helpful to you in this unfortunate state of your life.</p>

                  {this.state.ratio > 0.5 &&
                    <div className="stats">
                      <p>But this is just a case. I can tell you that {this.state.ratio * 100}% of the people who had the weird dream from before wanted to save that person.</p>
                      <p>Thing is that you met the last person who read this story, who didn't say anything.</p>
                      <p>People are mostly good, and life is worth living after all.</p>
                    </div>
                  }

                  {this.state.ratio <= 0.5 &&
                    <div className="stats">
                      <p>Thing is that you met the last person who read this story, who didn't say anything.</p>
                      <p>People are mostly good, and life is worth living after all.</p>
                    </div>
                  }
                  <p className="next" onClick={() => this.nextSentence(8)}>Next</p>
                </div>

                <div className="end9">
                  <div className="finalPep">
                    <p>
                      <span>Share</span> is not just a story, it is an experiment. I wanted to share a story with all of you, maybe helping out someone in the process.</p>
                    <p>What I wanted to show, sharing this story, is that depression is more common that it may look like. </p>
                    <p>And it's with sharing your emotions that
                        the stigma behind it will disappear. Otherwise, if we hide behind a pretty Instagram picture, or a fake smile all the time, nobody will realise how normal it is to feel this way.
                </p>
                    <p>How common and how <span>human</span> it is.</p>
                    <p>If this is your case, you are not broken, you are not useless and most importantly you are not alone.</p>

                  </div>
                  <p id="endBtn" onClick={() => this.nextSentence(9)} >End</p>

                </div>

                <div className="end10" id="anyKey">
                  <h1>Press Any Key To Live</h1>
                </div>

              </div>
            }
            {this.state.help &&
              <div className="gameWon">
                <div className="end11">
                  <p id="gameWonText">You hear someone's voice telling you:</p>
                  <p className="gameDescription">{this.state.description}</p>


                  {this.state.ratio > 0.5 &&
                    <div className="stats">
                      <p>I can tell you that {this.state.ratio * 100}% of the people who had the weird dream from before wanted to save that person.</p>
                      <p>The last person who read this story was one of them.</p>
                      <p>People are mostly good, and life is worth living after all.</p>
                    </div>
                  }

                  {this.state.ratio <= 0.5 &&
                    <div className="statsWon">
                      <p>The last person who read this story was one of them.</p>
                      <p>People are mostly good, and life is worth living after all.</p>
                    </div>
                  }
                  <p className="next" onClick={() => this.nextSentence(11)}>Next</p>
                </div>

                <div className="end9">
                  <div className="finalPep">
                    <p>
                      <span>Share</span> is not just a story, it is an experiment. I wanted to share a story with all of you, maybe helping out someone in the process.</p>
                    <p>What I wanted to show, sharing this story, is that depression is more common that it may look like. </p>
                    <p>And it's with sharing your emotions that
                        the stigma behind it will disappear. Otherwise, if we hide behind a pretty Instagram picture, or a fake smile all the time, nobody will realise how normal it is to feel this way.
                </p>
                    <p>How common and how <span>human</span> it is.</p>
                    <p>If this is your case, you are not broken, you are not useless and most importantly you are not alone.</p>

                    <p id="endBtn" onClick={() => this.nextSentence(9)} >End</p>
                  </div>

                </div>

                <div className="end10" id="anyKey">
                  <h1>Press Any Key To Live</h1>
                </div>

              </div>
            }
          </div>
        </div>
      </React.Fragment>


    )
  }

}

export default Finale;