import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  SearchItemReducer,
  featureListReducer,
  featurePropertyReducer,
} from "./Reducers/Hotel/HotelList";
import { hotelRoomReducer } from "./Reducers/Rooms/Rooms";

const reducer = combineReducers({
  featureList: featureListReducer,
  featureProperty: featurePropertyReducer,
  SearchItems: SearchItemReducer,
  hotelRoom: hotelRoomReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
