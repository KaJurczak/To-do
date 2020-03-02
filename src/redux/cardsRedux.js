import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards, searchString}, columnId) => cards.filter(card => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title)
);

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard = payload => ({
  payload: { ...payload, id: shortid.generate() },
  type: ADD_CARD,
});

// reducer
export default function reducer(state = [], action = {}) { /* default values using if there is no value at the beginning, while initializing store */
  switch (action.type) {   /*switch is like loop -> if(action.type==case) do {return..}, else do default */
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
