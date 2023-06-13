import axios from "axios";
import * as actions from "../Constant/hotelList";

export const featureListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: actions.FEATURE_LIST_REQUEST,
    });
    const res = await axios.get(
      "http://localhost:3001/api/hotel/countByCity?cities=gurgaon,delhi,jaipur,amritsar"
    );
    console.log("data is ", res);
    dispatch({
      type: actions.FEATURE_LIST_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: actions.FEATURE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const featurePropertyAction = (url) => async (dispatch) => {
  console.log("url is ", url);
  try {
    dispatch({
      type: actions.FEATURE_PROPERTY_REQUEST,
    });
    const res = await axios.get(`http://localhost:3001/api/hotel?${url}`);
    console.log("data is ", res);
    dispatch({
      type: actions.FEATURE_PROPERTY_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: actions.FEATURE_PROPERTY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
