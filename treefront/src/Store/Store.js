import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./Reducers/CombineReducer";

const store = configureStore({reducer:rootReducer});

export default store;