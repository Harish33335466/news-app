import { ActionTypes } from "../Constants/ActionTypes";

export const DataLoading = (Data,length) => {
  return {
    type: ActionTypes.DISPLAY_DATA,
    payload: Data,
    length: length,
  };
};

export const categoryData=(category,id)=>{
  return {
    type: ActionTypes.CATEGORY_DATA,
    payload: category,
    category: id,
  };
}

export const dummyData=()=>{
  return {
    type: ActionTypes.DUMMY_DATA,
  };
}
