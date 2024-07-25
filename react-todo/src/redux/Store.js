import { combineReducers, legacy_createStore } from "redux"
import taskReducer from "./TaskReducer";

const rootReducer = combineReducers({ taskReducer })

const store = legacy_createStore(rootReducer)

export default store;