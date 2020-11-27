import { UPDATE_LIST_RESULTS } from "../../constants/actions";

export const updateListResults = (items: any) => ({
  type: UPDATE_LIST_RESULTS,
  items,
});
