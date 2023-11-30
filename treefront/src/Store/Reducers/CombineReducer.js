import { combineReducers } from "@reduxjs/toolkit";

import { modeReducer } from "./ModeReducer";

const rootReducer = combineReducers({
    modeReducer,
});

export default rootReducer;