// import React from "react";
import React, {useState} from 'react';

export default function TextForm(props) {
    const convertToUpper = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) =>{
        console.log('on change')
        setText(event.target.value)
    }


    const [text, setText] = useState('Hello World')
  return (
    <>
      <div className="mb-3">
        <h4>{props.heading}</h4>
        <textarea className="form-control" id="textBox" rows="6" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary" onClick={convertToUpper} >Convert to Uppercase</button>
    </>
  );
}
