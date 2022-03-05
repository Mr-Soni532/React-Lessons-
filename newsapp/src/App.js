import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import React, { Component } from "react";
import NavBar from "./component/NavBar";
import { Routes, Route, Link } from "react-router-dom";
// import CategoryPage from './component/CategoryPage'
import News from "./component/News";
import Sports from "./component/Sports";
import Health from "./component/Health";

export default class App extends Component {

  constructor() {
    super();  
    this.state = {
     API: "ce9853bc51a24119a394b52d014b8272",
      country: 'us'
    };
  }

  render() {  
    return (
      <>
        <NavBar />
        {/* <CategoryPage country={this.state.country} category="general" apiKey={this.state.API}/> */}
        <Container className="mt-4 ">
          <div className="news-container">
            <div className="headline">
            <Routes>
              <Route path="/" element={<News key="Home" country={this.state.country} category="general" apiKey={this.state.API}/>}/>
              <Route path="/business" element={<News key="Business" country={this.state.country} category="business" apiKey={this.state.API}/>}/>
              <Route path="/entertainment" element={<News key="Entertainment" country={this.state.country} category="entertainment" apiKey={this.state.API}/>}/>
              <Route path="/general" element={<News key="General" country={this.state.country} category="general" apiKey={this.state.API}/>}/>
              <Route path="/health" element={<News key="Health" country={this.state.country} category="health" apiKey={this.state.API}/>}/>
              <Route path="/science" element={<News key="Science" country={this.state.country} category="science" apiKey={this.state.API}/>}/>
              <Route path="/sports" element={<News key="Sports" country={this.state.country} category="sport" apiKey={this.state.API}/>}/>
              <Route path="/technology" element={<News key="Technology" country={this.state.country} category="technology" apiKey={this.state.API}/>}/>
            </Routes>
            </div>
            <div className="sideNews">
              <Sports country={this.state.country} apiKey={this.state.API} />
              <Health country={this.state.country} apiKey={this.state.API} />
            </div>
          </div>
        </Container>
      </>
    );
  }
}
