import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";


export const store = legacy_createStore(reducer,applyMiddleware(logger,thunk))