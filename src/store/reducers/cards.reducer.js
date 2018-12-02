const initialState = {
  cards: [],
  fetching: false,
  message: {
    show: false,
    title: '',
    message: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BLACK_CARDS_REQUEST':
    case 'GET_WHITE_CARDS_REQUEST':
      return {
        ...state,
        fetching: true
      };

    case 'GET_BLACK_CARDS_FAILURE':
    case 'GET_WHITE_CARDS_FAILURE':
      return {
        ...state,
        fetching: false
      };

    case 'GET_BLACK_CARDS_SUCCESS':
    case 'GET_WHITE_CARDS_SUCCESS':
      return {
        ...state,
        fetching: false,
        cards: action.cards.slice(0, 20)
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [
          ...state.cards,
          action.card
        ]
      };
    case 'EDIT_CARD':
      return {
        ...state,
        cards: state.cards.map((card) => card.id === action.card.id ? action.card : card)
      };
    case 'REMOVE_CARD':
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.id)
      };
    default:
      return state;
  }
};

export default reducer;