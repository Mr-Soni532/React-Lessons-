// import React from "react";
import React, { useState } from "react";

export default function TextForm(props) {
  
  const [text, setText] = useState(""); // state variable for text

  const convertToUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const convertToLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
  };
  const removeSpaces = () => {
    setText( text.split(/[ ]+/).join(" "))
  };
  const clrTxt = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className={`container p-3 ` }>
        <div className={`d-flex justify-content-between m-2 text-${props.fontTheme}`}>
          <h2>{props.heading}</h2>
        </div>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${props.bgTheme} text-${props.fontTheme}`}
            id="textBox"
            rows="6"
            value={text}
            onChange={handleOnChange}
            autoFocus="enable"
            
          />
        </div>

        <div className="container p-0">
          {/* UpperCase */}
          <button className="btn btn-primary me-2" onClick={convertToUpper}>
            Convert to Uppercase
          </button>
          {/* Lowercase */}
          <button className="btn btn-primary me-2" onClick={convertToLower}>
            Convert to Lowercase
          </button>
          {/* Lowercase */}
          <button className="btn btn-primary me-2" onClick={removeSpaces}>
            Remove Extra-Spaces
          </button>
          {/* CopyTExt */}
          <button className="btn btn-primary me-2 " onClick={copyText}>
            Copy Text
          </button>
          {/* Clear Text */}
          <button className="btn btn-outline-danger float-end" onClick={clrTxt}>
            Clear Text
          </button>
        </div>
      </div>
      <div className={`container my-3 text-${props.fontTheme}` }>
        <h1>Text Summary</h1>
        <p>
          <b>{text.split(" ").length}</b> Words | <b>{text.length}</b>{" "}
          characters
        </p>
      </div>
    </>
  );
}
