import axios from "axios";
import * as actions from "../Constant/RoomConstant";

export const hotelRoomAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actions.HOTEL_ROOM_REQUEST,
    });
    const res = await axios.get(`http://localhost:3001/api/room/${id}`);
    console.log("data action  is ", res.data.data);
    dispatch({
      type: actions.HOTEL_ROOM_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: actions.HOTEL_ROOM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
