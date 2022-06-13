import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//react бібліотека яка відмальовує ui
//reducer(преобразовувач) функція яка приймає state, action, якщо потрібно приміняє action і повертає новий state.
function App(props) {
    return (
      <BrowserRouter>
          <div className='app-wrapper'>
          <Header/>
          <Navbar/>
            <div className="app-wrapper-content">
              <Routes>
                <Route path ='/Dialogs' element={<Dialogs
                    dialogsPage={props.appState.dialogPage}
                    dispatch = {props.dispatch}
                />}/>
                <Route path ='/Profile' element={<Profile
                    profilePage={props.appState.profilePage}
                    dispatch = {props.dispatch}/> } />
              </Routes>
            </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
