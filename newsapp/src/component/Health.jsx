import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import HealthItems from "./HealthItem";

export default class Sports extends Component {
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: true,
      key: "ccd8db0a67664546bbd0af28ef964eab"
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${this.state.key}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  }

  render() {
    return (
      <>
        <Row style={{marginTop: "50px"}}>
          <h1 className="badge bg-success fs-5 ">Health Updates</h1>
        </Row>
        <Row
          className="d-flex "
          style={{
            overflow: "scroll",
            overflowX: "hidden",
            maxHeight: "600px",
          }}
        >
          {this.state.loading
            ? "Loading..."
            : this.state.articles.map((element) => {
                return (
                  <div key={element.url}>
                    <HealthItems
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
        </Row>
      </>
    );
  }
}
