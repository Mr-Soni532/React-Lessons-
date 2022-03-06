
import React, { Component } from "react";
import NavBar from "./component/NavBar";
import { Routes, Route } from "react-router-dom";
import CategoryPage from './component/CategoryPage'
import Home from "./component/Home";


export default class App extends Component {

  constructor() {
    super();  
    this.state = {
     API: "685cf4219c994182aa0e6bd63943e7e9",
      country: 'us'
    };
  }

  render() {  
    return (
      <>
        <NavBar />
        {/* <CategoryPage country={this.state.country} category="general" apiKey={this.state.API}/> */}
          <Routes>
              <Route path="/" element={<Home key="Home" country={this.state.country} apiKey={this.state.API}/>}/>
              <Route path="/business" element={<CategoryPage key="Business" country={this.state.country} category="business" apiKey={this.state.API}/>}/>
              <Route path="/entertainment" element={<CategoryPage key="Entertainment" country={this.state.country} category="entertainment" apiKey={this.state.API}/>}/>
              <Route path="/general" element={<CategoryPage key="General" country={this.state.country} category="general" apiKey={this.state.API}/>}/>
              <Route path="/health" element={<CategoryPage key="Health" country={this.state.country} category="health" apiKey={this.state.API}/>}/>
              <Route path="/science" element={<CategoryPage key="Science" country={this.state.country} category="science" apiKey={this.state.API}/>}/>
              <Route path="/sports" element={<CategoryPage key="Sports" country={this.state.country} category="sport" apiKey={this.state.API}/>}/>
              <Route path="/technology" element={<CategoryPage key="Technology" country={this.state.country} category="technology" apiKey={this.state.API}/>}/>
        </Routes>
      </>
    );
  }
}
