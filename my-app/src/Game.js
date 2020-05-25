import React from 'react';

function Game(props) {

    const { games } = props;
    const listGames = games.map(game => (
        <div className="game" key={game._id}>
            <h1>{game.title}</h1>
            <p>{game.description}</p>
            <img src={game.imageUrl} alt="game" />
        </div>
    ));
    return (
        <div className="list-games">
            {listGames}
        </div>
    )



}

export default Game;