import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Navbar, NavDropdown, Form, Nav, FormControl } from 'react-bootstrap';
import Movies from "./components/Movies"

export default class App extends React.Component {
  
  state = {
    movies: [],
    movieType: "now_playing"
  };
  
  componentDidMount() {
    this.getMovies();
  }
  
  async getMovies() {
    const API_key = "4c5b4a5e627748117d4b24082672a9b4"
    const movieType = this.state.movieType
    
    const response = await fetch (
      `https://api.themoviedb.org/3/movie/${movieType}?api_key=${API_key}&language=en-US&page=1`
    );
    const jsonData = await response.json();
    console.log("Array of a result", jsonData.results[1]);
    this.setState({
      movies: jsonData.results
    })
  }
  
  getMovieTypes(movieType) {
    this.setState({
      movieType, 
    }, this.getMovies)
    
  }

  render() {
    return (
      <div className="App">
          
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Movie Database</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link onClick={()=> this.getMovieTypes("now_playing")}>Now Playing</Nav.Link>
                <Nav.Link onClick={()=> this.getMovieTypes("top_rated")}>Top Rated</Nav.Link>
                <Nav.Link onClick={()=> this.getMovieTypes("popular")}>Popular</Nav.Link>
                <Nav.Link onClick={()=> this.getMovieTypes("upcoming")}>Upcoming</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          
          
          
          
          
          
          <Movies movies={this.state.movies} />

          
      </div>
    );
  }

}



