import * as actions from "../../Constant/RoomConstant";

export const hotelRoomReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case actions.HOTEL_ROOM_REQUEST:
      return {
        loading: true,
      };
    case actions.HOTEL_ROOM_SUCCESS:
      return {
        loading: false,
        list: action.payload,
      };
    case actions.HOTEL_ROOM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
