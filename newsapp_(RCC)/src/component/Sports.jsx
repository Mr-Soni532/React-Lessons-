import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import SportsItem from "./SportsItem";
import LoadingSpinner from "./LoadingSpinner";



export default class Sports extends Component {
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: true,
    

    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=sports&apiKey=${this.props.apiKey}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  }
  render() {
    return (
      <>
        <Row style={{marginTop: "80px"}}>
          <h1 className="badge bg-primary fs-5 px-3">Sports Highlights</h1>
        </Row>

        <Row
          className="d-flex "
          id="sports_container"
          style={{
            overflow: "scroll",
            overflowX: "hidden",
            maxHeight: "600px",
            
          }}
        >
          {this.state.loading ? (
            <LoadingSpinner type="side"/>
          ) : this.state.articles.map((element) => {
                return (
                  <div key={element.url}>
                    <SportsItem
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
