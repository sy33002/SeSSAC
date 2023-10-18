import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isVisibleReducer from "./isVisibleReducer";
import moneyReducer from "./moneyReducer";

// combineReducer: reducer룰 하나로 합침
const rootReducer = combineReducers({
    counter: counterReducer,
    isVisible: isVisibleReducer,
    money: moneyReducer,
});

export default rootReducer;
