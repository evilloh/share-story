import React, { Component } from 'react';
import Begin from './components/Begin'
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom'

class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      level: 0
    }

    this.levelizer = (level) => {
      console.log("did you call me?")
      let newLevels
      newLevels = this.state.level + 1
      this.setState({ level: newLevels })
    }
  }


  render() {
    return (
      <Switch>
        <Route path="/" exact render={() => <Home level={this.state.level} levelizer={this.levelizer} />} />
        <Route path="/begin" exact render={() => <Begin level={this.state.level} levelizer={this.levelizer} />} />
      </Switch>

    )
  }

}

export default App;