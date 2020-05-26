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

  deleteGame = (_id) => {
    fetch('https://games-app-siit.herokuapp.com/games/' + _id, { method: 'DELETE' })
      .then(resp => resp.text()).then(apiresponse => console.log(apiresponse))
      
    let games = this.state.games.filter(game => {
      return game._id !== _id
    })
    this.setState({
      isLoaded: true,
      games: games
    })
  }

  render() {

    return (
      <div className="App" >
        <Game games={this.state.games} deleteGame={this.deleteGame} />
      </div>
    );
  }

}

export default App;
