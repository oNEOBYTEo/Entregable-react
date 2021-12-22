import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyIcon from './MyIcon'
import HandleRandom from './HandleRandom';


ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <MyIcon />
      
      <HandleRandom />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


// export default ColorPicker;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
