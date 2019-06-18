import React, { Component } from 'react';
import './choice.css';
import axios from 'axios'


class Door2 extends Component {


  constructor(props) {
    super(props)
    this.state = {
      show: undefined,
      choice: {
        help: '',
        description: '',
      },
    }
    this.showForm = () => this.setState({ show: 1 })

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
    let { help, description } = this.state
    axios.post(`https://ih-beer-api.herokuapp.com/beers/new`, { help, description })
      .then(theChoice => console.log("ITS NEWWWW!", theChoice))
      .catch(err => console.log("You couldn't make a choice!", err))
    this.setState({ name: '', tagline: '', description: '', first_brewed: '', brewers_tips: '', attenuation_level: '', contributed_by: '' })
  }


  postCoaster = coaster => {
    return this.service.post('newCoaster', coaster)
      .then(res => res.data)
      .catch(err => console.log(err))
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="superContainerChoice">
        {this.state.show &&
          <div >
            <form onSubmit={this.handleFormSubmit}>
              <label>Name:
                <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
              </label>
              <br></br>

              <label>tagline:
                <input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)} />
              </label>
              <input className="sub" type="submit" value="Send" />
            </form>
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

export default Door2;