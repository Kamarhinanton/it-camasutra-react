import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";

//react бібліотека яка відмальовує ui
//reducer(преобразовувач) функція яка приймає state, action, якщо потрібно приміняє action і повертає новий state.
//redux
//axios бібліотека для роботи з запросами
function App(props) {
    return (
          <div className='app-wrapper'>
          <HeaderContainer/>
          <Navbar/>
            <div className="app-wrapper-content">
              <Routes>
                <Route path ='/Dialogs' element={<DialogsContainer/>}/>
                <Route path ='/Profile' element={<ProfileContainer/>}/>
                <Route path ='/users' element={<UsersContainer/>} />
                <Route path ='/login' element={<Login/>} />
              </Routes>
            </div>
          </div>
  );
}

export default App;
