import { ActionTypes } from "../Constants/ActionTypes";

export const DataLoading = (Data,category) => {
  return {
    type: ActionTypes.DISPLAY_DATA,
    payload: Data,
    category: category,
  };
};

export const categoryData=(category,id)=>{
  return {
    type: ActionTypes.CATEGORY_DATA,
    payload: category,
    category: id,
  };
}
