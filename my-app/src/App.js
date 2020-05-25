import React, { Component } from 'react';
import Game from './Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      isLoaded: false
    }
  }
  componentDidMount() {
    fetch('https://games-app-siit.herokuapp.com/games').then(resp => resp.json())
      .then(data => //console.log(data)
      {
        this.setState({
          isLoaded: true,
          games: data
        })
      })
  }
  render() {

    return (
      <div className="App" >
        <Game games={this.state.games} />
      </div>
    );
  }

}

export default App;
