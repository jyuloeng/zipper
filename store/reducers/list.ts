import { UPDATE_LIST_RESULTS } from "../../constants/actions";

interface ListAction {}

const list = (
  state = {
    items: [],
  },
  action: any
) => {
  switch (action.type) {
    case "UPDATE_LIST_RESULTS":
      const nState = Object.assign({}, state, {
        items: action.items,
      });

      return nState;

    default:
      return state;
  }
};

export default list;
