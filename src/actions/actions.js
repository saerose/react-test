import { ADD_CARD, EDIT_CARD, REMOVE_CARD } from 'src/actions/types';

export const addCard = (card) => ({
    type: ADD_CARD,
    card: {
        ...card
    }
});

export const editCard = (card) => ({
    type: EDIT_CARD,
    card
});

export const deleteCard = (card) => ({
    type: REMOVE_CARD,
    card
});
