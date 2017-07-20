import { Action } from '@ngrx/store';
export const SELECTED = 'Selected Item'


export class SelectedAction implements Action {
  readonly type = SELECTED;
  constructor(public payload: any) {}
}

export type Actions =
  | SelectedAction;
 // | UserAction;