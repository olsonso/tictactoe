const cells = (state = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], action) => {
    switch (action.type) {
        case 'NEW_MOVE':
          console.log("action", action.type);
            return state.map((item, cell) => {
                return cell === action.cell ? action.player : item;
            });
        case 'RESET':
            return [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        default:
            return state;
    }
};

export default cells;
