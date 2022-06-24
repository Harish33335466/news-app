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
        length: action.length,
      };
    case ActionTypes.CATEGORY_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
        category: action.category,
        length: state.data.length,
      };
    case ActionTypes.DUMMY_DATA:
      return {
        ...state,
        data: state.data.map((article) => {
          return {
            title: article.title,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim vel leo tincidunt tempus ut in neque. Donec sed bibendum libero, at vulputate nulla. Donec sed mi sit amet urna pellentesque gravida ac vel ex",
            url: article.url,
            urlToImage: article.urlToImage,
            publishedAt: article.publishedAt,
            source: article.source.name,
          };
        }),
        loading: false,
      };

    default:
      return state;
  }
};

export default DataReducer;
