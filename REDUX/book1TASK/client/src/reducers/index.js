import types from '../actions/types'
export default (state, action) => {
    switch (action.type) {
        case types.SET_TECHNOLOGY:
            return {
                ...state,
                tech: action.text
            };

        default:
            return state;
    }
};