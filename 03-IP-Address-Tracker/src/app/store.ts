import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import pageReducer from "../features/page/pageSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
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
