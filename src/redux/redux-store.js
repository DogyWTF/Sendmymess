import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"

import usersReducer from "./users/users-reducer";

let reducers = combineReducers({
    users: usersReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store