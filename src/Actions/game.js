
export const newMove = (cell, player) => {
    return {
        type: 'NEW_MOVE',
        cell: cell,
        player: player
    };
};

export const whosTurn = (player1, player2) => {
  return {
    type: 'WHOS_TURN',
    player: player?  player1 : player2
  };
};

export const newGame = () => {
    return {
        type: 'NEW_GAME'
    };
};
