import shortid from 'shortid';

// selectors
export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

// action name creator
const reducerName = 'columns';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators
export const createActionAddColumn = payload => ({
  payload: { ...payload, id: shortid.generate() },
  type: ADD_COLUMN,
});

// reducer
export default function reducer(state = [], action = {}) { /* default values using if there is no value at the beginning, while initializing store */
  switch (action.type) {   /*switch is like loop -> if(action.type==case) do {return..}, else do default */
    case ADD_COLUMN:
      return [...state, action.payload];
    default:
      return state;
  }
}
