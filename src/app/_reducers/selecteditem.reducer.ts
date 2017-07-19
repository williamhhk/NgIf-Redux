
export function selectedItemReducer (state = null, action)  : any {
  switch (action.type) {
    case 'SELECT_ITEM':
      return action.payload;
    default:
      return state;
  }
};