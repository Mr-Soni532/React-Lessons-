import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
export default class LoadingSpinner extends Component {
  render() {
    return (
     <>
        {this.props.type === "main"? (
          <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: "100%" }}
        >
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
        </div>
        ):(<div
          className="d-flex justify-content-center align-items-center"
          style={{ width: "100%" }}
        >
          <Spinner animation="border" variant="dark" />
        </div>)}
        
     </>
    );
  }
}
