import * as actions from "../../Constant/hotelList";

export const featureListReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case actions.FEATURE_LIST_REQUEST:
      return {
        loading: true,
      };
    case actions.FEATURE_LIST_SUCCESS:
      return {
        loading: false,
        list: action.payload,
      };
    case actions.FEATURE_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const featurePropertyReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case actions.FEATURE_PROPERTY_REQUEST:
      return {
        loading: true,
      };
    case actions.FEATURE_PROPERTY_SUCCESS:
      return {
        loading: false,
        list: action.payload,
      };
    case actions.FEATURE_PROPERTY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const SearchItemReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case actions.SEARCH_ITEM_REQUEST:
      return {
        loading: true,
      };
    case actions.SEARCH_ITEM_SUCCESS:
      return {
        loading: false,
        list: action.payload,
      };
    case actions.SEARCH_ITEM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
