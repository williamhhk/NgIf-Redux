import { selectedItemReducer } from './_reducers/selectedItem.reducer'

export interface AppStore {
	selectedItemState : any;
}

export const appStore = {
	selectedItemState : selectedItemReducer,
}