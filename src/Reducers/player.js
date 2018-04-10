const player = (state = 'X', action) => {
    switch (action.type) {
        case 'NEW_MOVE':
            return (state === 'X') ? 'O' : 'X';
        case 'RESET':
            return 'X';
        default:
            return state;
    }
};

export default player;
