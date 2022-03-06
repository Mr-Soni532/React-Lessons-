import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import React, { Component } from 'react'
import News from "./News";
import Sports from "./Sports";
import Health from "./Health";

export default class Home extends Component {
  render() {
     let {country, apiKey} = this.props;
    return (
     <>
         <Container className="mt-4 ">
          <div className="news-container">
            <div className="headline">
           <News country={country} category="general" apiKey={apiKey}/>
            </div>
            <div className="sideNews">
              <Sports country={country} apiKey={apiKey} />
              <Health country={country} apiKey={apiKey} />
            </div>
          </div>
        </Container>
     </>
    )
  }
}
