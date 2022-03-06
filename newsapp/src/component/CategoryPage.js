
import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container } from "react-bootstrap";
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

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=12&page=
    ${this.state.page}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false  });
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=12&page=
    ${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false  });
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

        {!this.state.loading ?
          ( 
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<LoadingSpinner type="main"/>}
        >
          <div
              className="d-flex flex-wrap justify-content-between"
              id="news_Container"
              style={{
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
          {
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
          }
        </div>
        </InfiniteScroll>
          ) : ( <LoadingSpinner type="main"/> )
          }
      </Container>
    );
  }
}
