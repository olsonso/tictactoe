import { connect } from "react-redux";

const resetButton = ({ dispatch }) => {
    return (
        <Button label="New Game" onPress={dispatch}/>
    )
};

connect()(resetButton);

export default resetButton;
