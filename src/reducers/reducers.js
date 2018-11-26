import { ADD_CARD, EDIT_CARD, REMOVE_CARD } from "../actions/types";

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
        // case 'EDIT_CARD':
        //     return [];
        // case 'REMOVE_CARD':
        //     return [];
        default:
            return state;
    }
};