import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer
});

let store = legacy_createStore(reducers);

window.store = store;

export default  store;