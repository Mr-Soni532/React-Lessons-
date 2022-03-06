import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button } from "react-bootstrap";
import NewsItem from "./NewsItem";
import LoadingSpinner from "./LoadingSpinner";
export default class News extends Component {


  constructor() {
    super();  
    this.state = {
      articles: this.articles,
      loading: true,
      page: (this.page=1),
      totalResults: this.totalResults,
    };
  }
  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=10&page=
    ${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log('update ' + (this.state.page)) 
    this.setState({ articles: parsedData.articles, loading: false });
  }

  async componentDidMount() {
    this.updateNews();
    console.log('mount ' + this.state.page) 

  }

  handleNextClick = async () => {
    // window.scrollTo(0, 0);
    console.log('next-1 ' + this.state.page) 
    this.setState({loading: true})
    this.updateNews()
    this.setState({page: this.state.page + 1})
    console.log('next-2 ' + (this.state.page + 1)) 
  };

  handlePreClick = async () => {
    // window.scrollTo(0, 0);
    console.log('pre-1 ' + this.state.page) 
    this.setState({loading: true})
    this.updateNews()
    this.setState({page: this.state.page - 1})
    console.log('pre-2 ' + (this.state.page - 1)) 

  };
  render() {
    return (
      <>
        <Row style={{ borderBottom: "2px solid black", marginLeft: "1.8px" }}>
          <h1 className=" fw-bold d-flex align-items-center p-0">
            News@Hub{" "}
            <span className="badge bg-danger fs-5 mt-2 ms-2">
              Top Headlines
            </span>
          </h1>
        </Row>
        <Row
          className="d-flex "
          id="news_Container"
          style={{
            overflowY: "scroll",
            maxHeight: "1200px",
            marginTop: "20px",
            marginBottom: "20px",
            minHeight: "500px",
          }}
        >
          {this.state.loading ? (
            <LoadingSpinner type="main"/>
          ) : (
            this.state.articles.map((element) => {
              return (
                <div key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })
          )}
        </Row>
        <Col
          className="d-flex justify-content-between mb-5"
          style={{ borderTop: "2px solid black", paddingTop: "40px" }}
        >
          <Button
            variant="dark"
            size="lg"
            onClick={this.handlePreClick}
            style={
              this.state.page <= 1
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }
          >
            &larr; Previous
          </Button>
          <Button
            variant="dark"
            size="lg"
            onClick={this.handleNextClick}
            style={
              this.state.page === Math.ceil(this.state.totalResults / 10)
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }
          >
            Next &rarr;
          </Button>
        </Col>
      </>
    );
  }
}
