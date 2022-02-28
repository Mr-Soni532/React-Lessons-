// import React from "react";
import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TextForm({ heading, mode, showAlert }) {
  const [text, setText] = useState(""); // state variable for text

  const convertToUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("success", "Text converted to Upper-Case");
  };
  const convertToLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("success", "Text converted to Lower-Case.");
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    showAlert("success", "Text coppied to clipboard.");
  };
  const removeSpaces = () => {
    setText(text.split(/[ ]+/).join(" "));
    showAlert("success", "Extra spaces removed.");
  };
  const clrTxt = () => {
    setText("");
    showAlert("success", "Text Cleared");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <Container>
        <Row className={`mb-2 text-${mode.fontColor}`}>
          <h2>{heading}</h2>
        </Row>
        <Row className="mb-3">
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                className={`bg-${mode.bgColor} text-${mode.fontColor}`}
                as="textarea"
                rows={6}
                value={text}
                onChange={handleOnChange}
                autoFocus="enable"
              />
            </Form.Group>
          </Form>
        </Row>

        <Row>
          <Col >
            {/* UpperCase */}
            <Button className="me-2 my-1" onClick={convertToUpper}>
              Convert to Uppercase
            </Button>
            {/* Lowercase */}
            <Button className=" me-2 my-1" onClick={convertToLower}>
              Convert to Lowercase
            </Button>
            {/* Lowercase */}
            <Button className=" me-2 my-1" onClick={removeSpaces}>
              Remove Extra-Spaces
            </Button>
            {/* CopyTExt */}
            <Button className=" me-2 my-1 " onClick={copyText}>
              Copy Text
            </Button>
          </Col>
          <Col xl = "1" xs ="1">
            {/* Clear Text */}
            <Button variant="danger" className="me-2 my-1 float-end" onClick={clrTxt}>
              Clear
            </Button>
          </Col>
        </Row>
        <Row  className={` my-3 text-${mode.fontColor}`}>
          <h1>Text Summary</h1>
          <p>
            <b>{text.split(" ").filter((e) => e.length !== 0).length}</b> Words
            | <b>{text.length}</b> characters
          </p>
        </Row>
      </Container>
    </>
  );
}
