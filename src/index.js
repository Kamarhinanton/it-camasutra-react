import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let postData = [{id : 1, message: 'Hi, how are you', counts: 5 }, {id: 2, message: 'Hey you', counts: '23' }];
let dialogsData = [
    {id: 1, name: 'Anton'},
    {id: 2, name: 'Ira'},
    {id: 3, name: 'Matvey'},
    {id: 4, name: 'Andrey'},
    {id: 5, name: 'Lena'},
    {id: 6, name: 'Ehor'}
] ;
let messages= [
    {id: 1, message: 'hi'},
    {id: 2, message: 'how are you'},
    {id: 3, message: 'what is up'},
];
ReactDOM.render(
  <React.StrictMode>
    <App postData ={postData} dialogsData={dialogsData} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
