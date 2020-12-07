import { ActionCreator, Dispatch } from "redux";

export enum ListActionTypes {
  UPDATE_LIST = "UPDATE_LIST",
}

export interface IUpdateListAction {
  type: ListActionTypes.UPDATE_LIST;
  items: Array<{ _id: number }>;
}

export type ListActions = IUpdateListAction;

export const updateListAction = (
  items: Array<{ _id: number }>
): IUpdateListAction => ({
  type: ListActionTypes.UPDATE_LIST,
  items,
});
