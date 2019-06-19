import React, { Component } from 'react';
import './choice.css';
import axios from 'axios'
import { HashLink as Link } from 'react-router-hash-link';


class Choice extends Component {


  constructor(props) {
    super(props)
    this.state = {
      show: undefined,
      chosen: undefined,
      choice: {
        help: undefined,
        description: '',
      },
    }
    this.showForm = () => this.setState({ show: 1 })
    this.typeText = () => {
      document.querySelector('.dreamDescription').classList.add("disappearTop")
      document.querySelector('.choices').classList.add("disappearBot")
      this.setState({ chosen: 1 })
    }

  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      choice: {
        ...this.state.choice,
        [name]: value
      }
    })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    let posterino = { help: true, description: this.state.choice.description }
    axios.post("​https://share-story.herokuapp.com/api/newPost", posterino, { withCredentials: true })
      .then(theChoice => console.log("ITS NEWWWW!", theChoice))
      .catch(err => console.log("You couldn't make a choice!", err))
    this.setState({ help: undefined, description: "" })
    document.querySelector(".transitionDiv").style.display = "block"
    setTimeout(() => {
      this.props.props.levelizer()
      this.props.trueizer(18)
    }, 1000);

  }

  handleNo = () => {
    let posterino = { help: false, description: "" }
    axios.post("​https://share-story.herokuapp.com/api/newPost", posterino, { withCredentials: true }
    )
      .then(theChoice => console.log("ITS NEWWWW!", theChoice))
      .catch(err => console.log("You couldn't make a choice!", err))
    this.setState({ help: undefined, description: "" })
    document.querySelector(".transitionDiv").style.display = "block"
    setTimeout(() => {
      this.props.props.levelizer()
      this.props.trueizer(18)
    }, 1000);

  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {

    return (
      <div className="superContainerChoice">
        <div className="transitionDiv">        </div>

        {this.state.show &&
          <div className="formContainer">
            <div className="bg-video">
              <video className="bg-video-content" src="/videos/windowvideo.mp4" autoPlay muted loop>
              </video>
            </div>
            <div className="dreamDescription">
              <p>Weird dream you are having tonight.</p>
              <p>You stand behind a person, who appears to be moments away from jumping off the window right in front of you.</p>
              <p>What do you do?</p>
            </div>
            <div className="choices">
              <p className="choice1" onClick={this.typeText}>Say something</p>
              <Link to="/#exactline2" ><p className="choice2" onClick={this.handleNo}>Stay quiet</p></Link>
            </div>
            {this.state.chosen === 1 &&
              <form onSubmit={this.handleFormSubmit}>
                <p>The person notices you, looks you in the eyes and asks:</p>
                <p>Why not?</p>
                <input className="inputText" type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} />
                <input className="sub" type="submit" value="Speak" />
              </form>
            }
          </div>
        }

        <div className="blackDiv3">
          <div className="quoteContainer">
            <p>Do you know what it's like to wake up in the morning, knowing that eating something terrible is the only happy thing that is going to happen to you all day?
           </p>
            <p>You kill yourself at some horrific job that you're lucky to have, and when it's all over, all you want to do is forget about it.</p>
            <cite>Actual Sunlight</cite>
            <h5 className="sleepBtn" onClick={this.showForm}>Go to sleep</h5>
          </div>
        </div>


      </div>
    )
  }

}

export default Choice;