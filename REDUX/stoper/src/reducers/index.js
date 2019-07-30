export default (state, action) => {
    let newState;
    switch (action.type) {
        case "INC_VALUE":
            newState = {
                ...state
            };
            newState[state.activeSession]++;
            return {
                ...newState,
            };
        case "DEC_VALUE":
            newState = {
                ...state
            };
            newState[state.activeSession]--;
            return {
                ...newState,
            };
        case "SET_SESSION":
            return {
                ...state,
                activeSession: action.payload
            }
            default:
                return state
    };
}