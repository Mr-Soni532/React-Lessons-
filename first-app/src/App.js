import "./App.css";
import NavigaitonMenu from "./components/NavigaitonMenu";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const darkMode = {
    bgColor: "light",
    fontColor: "dark",
  };
  const lightMode = {
    bgColor: "dark",
    fontColor: "light",
  };

  const [mode, setMode] = useState(darkMode);
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };

  const toggleMode = () => {
    if (mode.bgColor === "dark") {
      setMode(darkMode);
      document.body.style.backgroundColor = "white";
    } else {
      setMode(lightMode);
      document.body.style.backgroundColor = "black";
    }
  };
  return (
    <>
      <NavigaitonMenu title="TextUtils" mode={mode} toggleMode={toggleMode} />
     {/* <Test/> */}
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
