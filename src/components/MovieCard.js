import React, { Component } from "react";
import Trailer from "./Trailer";

import "./styles.css";

import { Button, Card, ProgressBar } from "react-bootstrap";

var moment = require("moment");
export default class MovieCard extends Component {
  render() {
    const {
      movie,
      movie: {
        overview,
        title,
        release_date: release,
        poster_path: movieImg,
        vote_average,
        id
      }
    } = this.props;

    return (
      <div>
        <Card className="custom-card" style={{ width: "18rem" }}>
          <Card.Header className="custom-card-header">
            <h6 className="space">
              <small>{ release }</small>
            </h6>
            <Button
              variant="outline-info"
              size="sm"
              onClick={() => this.props.toggle(id)}
            >
              Trailer
            </Button>
          </Card.Header>

          <div className="overview-container">
            <Card.Img
              alt={title}
              variant="top"
              src={`https://image.tmdb.org/t/p/w500${movieImg}`}
            />
            <div class="overlay">
              <div class="text-title">{title}</div>
              <div class="text">{overview}</div>
            </div>
          </div>
          <Card.Header>
            <ProgressBar
              className="Progressbar"
              now={vote_average * 10}
              label={vote_average * 10 + "%"}
            />
          </Card.Header>
        </Card>
      </div>
    );
  }
}
