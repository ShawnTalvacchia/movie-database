import React, { Component } from "react";

import { CardDeck, Row, Container } from "react-bootstrap";
import MovieCard from "./MovieCard";

import "./styles.css";

export default class Movies extends Component {
  render() {
    return (
      <Container className="test">
        {this.props.movies.map(movie => {
          if (movie.poster_path !== null) {
          return <MovieCard movie={movie} toggle={this.props.toggle} />;
        }})}
      </Container>
    );
  }
}
