import { ActionTypes } from "../Constants/ActionTypes";
const initialState = {
  data: [],
  loading: true,
};

export const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DISPLAY_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
        category: action.category,
      };
    case ActionTypes.CATEGORY_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
        category: action.category,
      };

    default:
        return state;
  }
};



export default DataReducer;