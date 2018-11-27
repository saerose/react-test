import { ADD_CARD, EDIT_CARD, REMOVE_CARD } from "../actions/types.actions";

const initialState = {
    cards: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return [
                ...state,
                action.card
            ];
        case 'EDIT_CARD':
            return state.map((card) => card.id === action.card.id ? action.card : card);
        case 'REMOVE_CARD':
            return state.filter((card) => card.id !== action.id);
        default:
            return state;
    }
};

export default reducer;