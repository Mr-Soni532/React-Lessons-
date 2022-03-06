import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row,  } from "react-bootstrap";
import NewsItem from "./NewsItem";
import LoadingSpinner from "./LoadingSpinner";
export default class News extends Component {

  constructor() {
    super();  
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=10&page=
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
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=10&page=
    ${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false  });
  };

  render() {

    return (
      <>
        <Row style={{ borderBottom: "2px solid rgba(0,0,0,0.3)", marginLeft: "1.8px", marginTop: "30px" }}>
          <h1 className="d-flex align-items-center p-0 pb-2" style={{fontWeight: "600"}}>
            News<span className="text-muted">@</span>Hub {" "}
            <span className="badge bg-danger" style={{fontSize: "20px", margin: " 0 10px", letterSpacing: "1.3px", fontWeight: "600", textTransform: "uppercase"}}>
             Top Headlines
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
        <Row
          className="d-flex "
          id="news_Container"
          style={{
            // maxHeight: "1200px",
            minHeight: "600px",
            marginTop: "20px",
          }}
        >   
           { this.state.articles.map((element) => {
            return  (
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
            )
           })}
        </Row>    
        </InfiniteScroll>
          ) : ( <LoadingSpinner type="main"/> )
          }
      </>
    );
  }
}
