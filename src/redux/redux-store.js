import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"

let reducers = combineReducers({
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store