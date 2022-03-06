
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Container } from "react-bootstrap";
import CategoryPageItem from "./CategoryPageItems";
import LoadingSpinner from "./LoadingSpinner";
export default class News extends Component {

  constructor() {
    super();  
    this.state = {
      articles: this.articles,
      loading: true,
      page: (this.page = 1),
      totalResults: this.totalResults,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  }

  handleNextClick = async () => {
    window.scrollTo(0, 0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.key}&pageSize=15&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  handlePreClick = async () => {
    window.scrollTo(0, 0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.key}&pageSize=15&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  render() {
    
    return (
      <Container>
         <Row style={{ borderBottom: "2px solid rgba(0,0,0,0.3)", marginLeft: "1.8px", marginTop: "30px" }}>
          <h1 className="d-flex align-items-center p-0 pb-2" style={{fontWeight: "600"}}>
            News<span className="text-muted">@</span>Hub {" "}
            <span className="badge bg-primary" style={{fontSize: "20px", margin: " 0 10px", letterSpacing: "1.3px", fontWeight: "600"}}>
              {this.props.category.toUpperCase()}
            </span>
      
          </h1>
        </Row>
        <div
          className="d-flex flex-wrap justify-content-between"
          id="news_Container"
          style={{
            marginTop: "20px",
            marginBottom: "20px",

          }}
        >
          {this.state.loading ? (
            <LoadingSpinner type="main"/>
          ) : (
            this.state.articles.map((element) => {
              return (
                <div key={element.url} style={{maxWidth: "32%"}}>
                  <CategoryPageItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    date={element.publishedAt}
                  />
                </div>
              );
            })
          )}
        </div>
        <Col
          className="d-flex justify-content-between mb-5"
          style={{ borderTop: "2px solid black", paddingTop: "30px" }}
        >
          <Button
            variant="dark"
            size="lg"
            onClick={this.handlePreClick}
            style={this.state.page <= 1 ? { visibility: "hidden" }: { visibility: "visible" }
            }
          >
            &larr; Previous
          </Button>
          <Button
            variant="dark"
            size="lg"
            onClick={this.handleNextClick}
            style={
              this.state.page === Math.ceil(this.state.totalResults / 10)? { visibility: "hidden" } : { visibility: "visible" }
            }
          >
            Next &rarr;
          </Button>
        </Col>
      </Container>
       
   
    );
  }
}
