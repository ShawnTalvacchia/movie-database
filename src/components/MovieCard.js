import React, { Component } from 'react'

import './styles.css';

import {Card, Accordion, ListGroupItem, ListGroup, ProgressBar} from "react-bootstrap";

export default class MovieCard extends Component {
    render() {
        const { movie, movie: {
            title,
            overview,
            release_date: release,
            backdrop_path: movieImg,
            vote_count,
            vote_average
        } } = this.props 
        console.log("string here", typeof vote_average)

        return (
            <div>
                
                    <Card className="custom-card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movieImg}`} />
                        <Card.Header className="card-header">{title}</Card.Header>
                        
                        <Accordion className="overview" defaultActiveKey="0">
                            <Accordion.Toggle as={Card.Title} eventKey="1">
                                Overview
                            </Accordion.Toggle>
                            <Accordion.Collapse className="openToggle" eventKey="1">
                                <Card.Body>{overview}</Card.Body>
                            </Accordion.Collapse>
                        </Accordion>
                        <Card.Body className="movie-details">
                            <small className="space">Release: {release}</small>
                            <ul>
                                {/* <li className="space"><small>Release: {release}</small></li> */}
                                <li>Rating</li>
                                <li><ProgressBar now={vote_average*10} label={vote_average*10 + "%"} />
                                <li><small>{vote_count} votes</small></li>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                {/* </Accordion> */}
            </div>
        )
    }
}


