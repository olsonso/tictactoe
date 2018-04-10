import React, {Component} from 'react';
import Header from '../Components/header';
import Cell from '../Components/cell';
import Button from '../Components/button';

class GameBoard extends Component {

    render() {
        const game = this;
        return (
            <div>
                <Header message={this.props.message} color={this.props.color} />
                <div className="grid">
                    {
                        this.props.cells.map((value, cell) => (
                            <Cell key={cell} state={value} onPress={(e) => {
                                game.props.onSetCell(cell, this.props.cells, this.props.player)
                            }}/>
                        ))
                    }
                </div>
                <div className="panel">
                    <Button label="New Game" onPress={(e) => {
                        game.props.onNewGame()
                    }} />
                </div>
            </div>
        )
    }
}

export default GameBoard;
