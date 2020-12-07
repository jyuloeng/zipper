import { Reducer } from "redux";
import { ListActionTypes, ListActions } from "../actions/list";
export interface IListState {
  items: Array<{ _id: number }>;
}

const initialListState: IListState = {
  items: [],
};

export const listReducer: Reducer<IListState, ListActions> = (
  state = initialListState,
  action
) => {
  switch (action.type) {
    case ListActionTypes.UPDATE_LIST:
      const nState = Object.assign({}, state, {
        items: action.items,
      });
      return nState;
    default:
      return state;
  }
};
