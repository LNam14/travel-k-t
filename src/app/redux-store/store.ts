import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import loginReducer from "./login/slice";
import tourReducer from "./tour/slice";
import locationReducer from "./location/slice";
import locationHotReducer from "./location-hot/slice";
import bookingReducer from "./booking/slice";
import supportReducer from "./support/slice";
import groupTourReducer from "./group_tour/slice";
import userReducer from "./users/slice";
import statisticalReducer from "./statistical/slice";
import totalReducer from "./total/slice"
import ratioReducer from "./ratio/slice"
export const store = configureStore({
  reducer: {
    loginState: loginReducer,
    locationState: locationReducer,
    locationHotState: locationHotReducer,
    tourState: tourReducer,
    bookingState: bookingReducer,
    supportState: supportReducer,
    groupTourState: groupTourReducer,
    userState: userReducer,
    statisticalState: statisticalReducer,
    totalState: totalReducer,
    ratioState : ratioReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
