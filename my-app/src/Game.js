import React from 'react';

function Game(props) {

    const { games,deleteGame } = props;
    const listGames = games.map(game => {
        return (
            <div className="game" key={game._id}>
                <h1>{game.title}</h1>
                <p>{game.description}</p>
                <img src={game.imageUrl} alt="game" />
                <button onClick={() => {deleteGame(game._id)}}>Delete Game</button>
            </div>
        )
    });
    return (
        <div className="list-games">
            {listGames}
        </div>
    )



}

export default Game;