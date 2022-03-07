import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import React from 'react'
import News from "./News";
import Sports from "./Sports";
import Health from "./Health";

export default function Home({country, apiKey, setProgress}) {
    return (
     <>
        <Container>
          <div className="news-container">
            <div className="headline">
              <News country={country} category="general" apiKey={apiKey} setProgress={setProgress}/>
            </div>
            <div className="sideNews" style={{position: "sticky", right: "100px",top: "-700px", maxHeight: "1px"}}>
              <Sports country={country} apiKey={apiKey} />
              <Health country={country} apiKey={apiKey} />
            </div>
          </div>
        </Container>
     </>
    )
  }
