const initialState = {
  allCards: [],
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
    case 'FILTER_CARDS':
      return {
        ...state,
        cards: action.color ? state.allCards.filter(el => el.color === action.color) : state.allCards.sort(a => a.color === 'black' ? -1 : 1)
      };

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
        cards: [
          ...state.cards,
          ...action.cards.map((card, id) => typeof card === 'string'
            ? { color: 'white', text: card, id }
            : { color: 'black', text: card.text, id }).slice(0, 10)
        ],
        allCards: [
          ...state.allCards,
          ...action.cards.map((card, id) => typeof card === 'string'
            ? { color: 'white', text: card, id }
            : { color: 'black', text: card.text, id }).slice(0, 10)
        ]
      };
    case 'ADD_CARD':
      return {
        ...state,
        allCards: [
          ...state.allCards,
          action.card
        ].sort(a => a.color === 'black' ? -1 : 1)
      };
    case 'EDIT_CARD':
      return {
        ...state,
        allCards: state.allCards.map((card) => card.id === action.card.id ? action.card : card)
      };
    case 'REMOVE_CARD':
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.card.id ? true : card.color !== action.card.color),
        allCards: state.allCards.filter((card) => card.id !== action.card.id ? true : card.color !== action.card.color)
      };
    default:
      return state;
  }
};

export default reducer;