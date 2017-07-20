
import * as item from '../actions/item'

export function selectedItemReducer (state = null, action : item.Actions)  : any {
  switch (action.type) {
    case item.SELECTED:
      return action.payload;
    default:
      return state;
  }
};