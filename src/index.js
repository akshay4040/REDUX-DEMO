import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./Store/ConfigureStore";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);




// counter index.js

// import React from 'react';
// import { render } from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import App from './App';
// import reducer from "./Reducers";

// const store = createStore(reducer);

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
