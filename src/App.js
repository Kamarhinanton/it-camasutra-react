import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App(props) {
    return (
      <BrowserRouter>
          <div className='app-wrapper'>
          <Header/>
          <Navbar/>
            <div className="app-wrapper-content">
              <Routes>
                <Route path ='/Dialogs' element={<Dialogs
                    dialogsData={props.appState.dialogPage.dialogs}
                    messages={props.appState.dialogPage.messages}/>}/>
                <Route path ='/Profile' element={<Profile
                    postData={props.appState.profilePage.posts}
                    addPost = {props.addPost}
                    newPost = {props.appState.profilePage.newPostText}
                    newPostText = {props.updateText}/> } />
              </Routes>
            </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
