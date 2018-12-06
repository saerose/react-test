import {ADD_CARD, EDIT_CARD, REMOVE_CARD, , FILTER_CARDS, GET_WHITE_CARDS, GET_BLACK_CARDS } from './types.actions';

export const getWhiteCards = {
    type: GET_WHITE_CARDS,
    url: '?color=white'
}

export const getBlackCards = {
    type: GET_BLACK_CARDS,
    url: '?color=black'
}

export const filterBy = (color) => ({
    type: 'FILTER_CARDS',
    color
})

export const addCard = (card) => ({
    type: ADD_CARD,
    card
})

export const editCard = (card) => ({
    type: EDIT_CARD,
    card
})

export const deleteCard = (card) => ({
    type: REMOVE_CARD,
    card
})
