import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
function App() {
  const [mode, setMode] = useState({
    bgColor: 'light',
    fontColor: 'dark', 
    color: 'black'
  })

  const toggleMode = () =>{
    if(mode.bgColor === 'dark'){
      setMode({
        bgColor: 'light',
        fontColor: 'dark', 
        color: 'black'
      })
      document.body.style.backgroundColor = 'white';
    } else {
      setMode({
        bgColor: 'dark',
        fontColor: 'light', 
        color: 'white'
      })
      document.body.style.backgroundColor = 'black';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" bgTheme={mode.bgColor} fontTheme={mode.fontColor} toggleMode={toggleMode}/>
      <div className="container my-3" >
      <TextForm heading = "Enter Your Text" bgTheme={mode.bgColor} fontTheme={mode.fontColor} colorTheme = {mode.color} toggleMode={toggleMode}/>
      </div>
    </>
  );
}

export default App;
