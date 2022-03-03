import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
export default class Spinner extends Component {
  render() {
    return (
        <Spinner animation="border" variant={this.props.SpinnerColor} />
    )
  }
}
