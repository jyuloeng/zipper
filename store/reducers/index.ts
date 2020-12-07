import { combineReducers } from "redux";
import { listReducer, IListState } from "./list";

export interface IAppState {
  listState: IListState;
}

export const reducer = combineReducers<IAppState>({
  listState: listReducer,
});
