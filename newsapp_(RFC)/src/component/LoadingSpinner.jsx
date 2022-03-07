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
         
          <Spinner animation="grow" variant="danger" className="p-200"/>

          <Spinner animation="grow" variant="warning" className="p-200" />
          
          <Spinner animation="grow" variant="info" className="p-200" />
     
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
