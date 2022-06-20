import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";

//react бібліотека яка відмальовує ui
//reducer(преобразовувач) функція яка приймає state, action, якщо потрібно приміняє action і повертає новий state.
//redux
//axios бібліотека для роботи з запросами
function App(props) {
    return (
          <div className='app-wrapper'>
          <Header/>
          <Navbar/>
            <div className="app-wrapper-content">
              <Routes>
                <Route path ='/Dialogs' element={<DialogsContainer/>}/>
                <Route path ='/Profile' element={<Profile/> } />
                <Route path ='/users' element={<UsersContainer/>} />
              </Routes>
            </div>
          </div>
  );
}

export default App;
