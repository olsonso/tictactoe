import { newMove, newGame } from '../Actions/game';
import { connect } from "react-redux";
import GameBoard from './gameBoard';

const getWinner = (cells) => {
    var winner = undefined;

    //matrix of all winning states
    const winningStates = [
        [0, 1, 2], //first row
        [3, 4, 5], //second row
        [6, 7, 8], //third row
        [0, 4, 8], //first column
        [2, 4, 6], //second column
        [0, 3, 6], //third column
        [1, 4, 7], //first diagnol
        [2, 5, 8] //second diagnol
    ];

    winningStates.forEach((winningState) => {
        const findWinner = cells[winningState[0]];
        if (findWinner !== undefined) {
            var hasWonCurrentState = true;
            winningState.forEach((winningCell) => {
                if (cells[winningCell] !== findWinner) hasWonCurrentState = false;
            });
            if (hasWonCurrentState) winner = findWinner;
        }
    });

    return winner;
};

const isTie = (cells) => {
    // No tie when the game is won
    if (getWinner(cells) !== undefined) return false;

    var isTie = true;
    cells.forEach((cell) => {
        if (cell === undefined) isTie = false;
    });

    return isTie;
};

const whosTurn = (player1, player2) =>{

}

const isValidMove = (cells, cell) => {
    // Invalid move when the cell is not free
    if (cells[cell] !== undefined) return false;

    // Do not update when the game is over
    if (getWinner(cells) !== undefined || isTie(cells)) return false;

    return true;
};

const getStatusMessage = (cells, player) => {
    this.state={
      color:'blue'
    }
    if (isTie(cells)) return 'Tie!';

    const winner = getWinner(cells);
    if (winner !== undefined) {
        return winner + ' Has Won!';
    } else {
        return 'Player ' + player;
    }
};

const mapStateToProps = (state) => {
    return {
        player: state['player'],
        cells: state['cells'],
        message: getStatusMessage(state['cells'], state['player'], state['color'])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetCell: (cell, cells, player) => {
            if (isValidMove(cells, cell)) dispatch(newMove(cell, player));
        },
        onNewGame: () => {
            dispatch(newGame());
        }
    }
};

const states = connect(mapStateToProps, mapDispatchToProps)(GameBoard);

export default states;
