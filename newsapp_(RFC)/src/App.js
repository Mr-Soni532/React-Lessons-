
import React, { Component } from "react";
import LoadingBar from 'react-top-loading-bar'                // install - npm i react-top-loading-bar
import NavBar from "./component/NavBar";
import { Routes, Route } from "react-router-dom";
import CategoryPage from './component/CategoryPage'
import Home from "./component/Home";


export default class App extends Component {

  constructor() {
    super();  
    this.state = {
     API: "1b53f3e174864fc18c7244b7635bae39",
     country: 'us', 
     progress: 0
    };
  }
  setProgress = (val) => {
    this.setState({progress: val})
  }
  render() {  
    return (
      <>
        <NavBar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
              <Route path="/" element={<Home setProgress={this.setProgress} key="Home" country={this.state.country} apiKey={this.state.API}/>}/>
              <Route path="/business" element={<CategoryPage setProgress={this.setProgress} key="Business" country={this.state.country} category="business" apiKey={this.state.API}/>}/>
              <Route path="/entertainment" element={<CategoryPage setProgress={this.setProgress} key="Entertainment" country={this.state.country} category="entertainment" apiKey={this.state.API}/>}/>
              <Route path="/general" element={<CategoryPage setProgress={this.setProgress} key="General" country={this.state.country} category="general" apiKey={this.state.API}/>}/>
              <Route path="/health" element={<CategoryPage setProgress={this.setProgress} key="Health" country={this.state.country} category="health" apiKey={this.state.API}/>}/>
              <Route path="/science" element={<CategoryPage setProgress={this.setProgress} key="Science" country={this.state.country} category="science" apiKey={this.state.API}/>}/>
              <Route path="/sports" element={<CategoryPage setProgress={this.setProgress} key="Sports" country={this.state.country} category="sport" apiKey={this.state.API}/>}/>
              <Route path="/technology" element={<CategoryPage setProgress={this.setProgress} key="Technology" country={this.state.country} category="technology" apiKey={this.state.API}/>}/>
        </Routes>
      </>
    );
  }
}
