import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer
});

//applyMiddleware вклинює наші асинхронні санки

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default  store;