import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

//react бібліотека яка відмальовує ui
//reducer(преобразовувач) функція яка приймає state, action, якщо потрібно приміняє action і повертає новий state.
//redux
function App(props) {
    return (
      <BrowserRouter>
          <div className='app-wrapper'>
          <Header/>
          <Navbar/>
            <div className="app-wrapper-content">
              <Routes>
                <Route path ='/Dialogs' element={<DialogsContainer store = {props.store} />}/>
                <Route path ='/Profile' element={<Profile store ={props.store} /> } />
              </Routes>
            </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
