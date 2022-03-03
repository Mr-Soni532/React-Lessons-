import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import React, { Component } from "react";
import NavBar from "./component/NavBar";
import News from "./component/News";
import Sports from "./component/Sports";
import Health from "./component/Health";
export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container className="mt-4 ">
          <div className="news-container">
            {/*! -----| Headlines |------- */}
            <div className="headline">
              <News />
            </div>
            {/*! -----| Side News |------- */}
            <div className="sideNews">
            {/*! -----| Sports Highlights |------- */}
              <Sports />
              {/*! -----| Health Updates |------- */}
              <Health />
            </div>
          </div>
        </Container>
      </>
    );
  }
}
