import "./SideNewsPannel.css";
import "./Webkit.css";
import React, { Component } from "react";
import defaultImg from "../assets/defaultImg.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {  } from "react-bootstrap";

export default class SportsItem extends Component {
  render() {
    let { title, imageUrl, newsUrl } = this.props;
    return (
      <>
        <a className="item-container" href={newsUrl}>
          <div className="" id="img-container">
            <img src={imageUrl ? imageUrl : defaultImg} alt="" />
          </div>
          <div id="post-heading">
          {title ? title.slice(0, 60) : ""}...
          </div>
        </a>
      </>
    );
  }
}

