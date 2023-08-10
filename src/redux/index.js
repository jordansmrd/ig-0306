import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./auth";

export const rootReducer = combineReducers({
  auth: userReducer,
});
