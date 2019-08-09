import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Navbar, NavDropdown, Form, Nav, Col, Row, FormControl } from 'react-bootstrap';
import Movies from "./components/Movies"

export default class App extends React.Component {
  
  state = {
    movies: [],
    // movieType: "now_playing",
    longerThanText: '',
    shorterThanText: '',
    afterYearText: '',
    beforeYearText: ''
  };
  
  componentDidMount() {
    this.getMovies();
  }
  
  async getMovies() {
    const API_key = "4c5b4a5e627748117d4b24082672a9b4"
    const movieType = this.state.movieType
    const longerThan = this.state.longerThanText
    const shorterThan = this.state.shorterThanText
    const afterYear = this.state.afterYearText
    const beforeYear = this.state.beforeYearText
    
    const response = await fetch (
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_runtime.lte=${longerThan}&with_runtime.gte=${shorterThan}&release_date.gte=${afterYear}&release_date.lte=${beforeYear}`
    );
    const jsonData = await response.json();
    // console.log("Array of a result", jsonData.results[1]);
    this.setState({
      movies: jsonData.results
    })
  }
  
  // getMovieTypes(movieType) {
  //   this.setState({
  //     movieType, 
  //   }, this.getMovies)
  // }

  longerThanText = (e) => {
    this.setState({ longerThanText: e.target.value})
  }
  shorterThanText = (e) => {
    this.setState({ shorterThanText: e.target.value})
  }
  afterYearText = (e) => {
    this.setState({ afterYearText: e.target.value})
  }
  beforeYearText = (e) => {
    this.setState({ beforeYearText: e.target.value})
  }


  
  render() {
    return (
      <div className="App">
          
        <Navbar sticky="top" bg="dark" variant="dark" className="my-NavBar justify-content-around">
          <Form.Group column md={10} className="searches justify-content-around">
            <Form.Group as={Row}>
              {/* Length */}
              <Col md="4">
                <Form.Group>
                  <Form.Group as={Row}>
                    <Col md="12">
                      <Form.Group className="nav-text" as={Row}>
                        Length
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Col md="6" className="SearchesContainer">
                          <Form inline className="SearchesContainer" as={Row}>
                            <Form.Control 
                              size="sm"
                              type="number" 
                              className="SearchInput" 
                              as="input" 
                              placeholder='30'
                              value={this.state.longerThanText}
                              onChange={(e) => this.longerThanText(e)}
                            >
                            </Form.Control>
                          </Form>
                          <Form.Text className="subtext text-muted" as={Row}>
                            Longer than #mins
                          </Form.Text>
                        </Col>
                        <Col md="6" className="SearchesContainer">
                          <Form inline className="SearchesContainer" as={Row}>
                            <Form.Control 
                              size="sm" 
                              className="SearchInput" 
                              as="input" 
                              placeholder='400'
                              value={this.state.shorterThanText}
                              onChange={(e) => this.shorterThanText(e)}
                            > 
                            </Form.Control>
                          </Form>
                          <Form.Text className="subtext text-muted" as={Row}>
                            Shorter than #mins
                          </Form.Text>
                        </Col>
                      </Form.Group>
                    </Col>
                  </Form.Group>
                </Form.Group>
              </Col>

              {/* Released */}
              <Col md="4">
                <Form.Group>
                  <Form.Group as={Row}>
                    <Col md="12">
                      <Form.Group className="nav-text" as={Row}>
                        Released
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Col md="6" className="SearchesContainer">
                          <Form inline className="SearchesContainer" as={Row}>
                            <Form.Control 
                              size="sm" 
                              className="SearchInput" 
                              as="input" 
                              placeholder='1920'
                              value={this.state.afterYearText}
                              onChange={(e) => this.afterYearText(e)}
                            >
                            </Form.Control>
                          </Form>
                          <Form.Text className="subtext text-muted" as={Row}>
                            After this year
                          </Form.Text>
                        </Col>
                        <Col md="6" className="SearchesContainer">
                          <Form inline className="SearchesContainer" as={Row}>
                            <Form.Control 
                              size="sm" 
                              className="SearchInput" 
                              as="input" 
                              placeholder='2019'
                              value={this.state.beforeYearText}
                              onChange={(e) => this.beforeYearText(e)}
                            >
                            </Form.Control>
                          </Form>
                          <Form.Text className="subtext text-muted" as={Row}>
                            Before this year
                          </Form.Text>
                        </Col>
                      </Form.Group>
                    </Col>
                  </Form.Group>
                </Form.Group>
              </Col>
              {/* Sort by */}
              <Col md="4">
                <Form.Group>
                  <Form.Group as={Row}>
                    <Col md="12">
                      <Form.Group className="nav-text" as={Row}>
                        Sort by
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Col md="6" className="SearchesContainer">
                          <Form.Control size="sm" as="select">
                            <option>Popularity</option>
                            <option>Name</option>
                            <option>Release Date</option>
                            <option>Revenue</option>
                          </Form.Control>
                          <Form.Text className="subtext text-muted" as={Row}>
                            Metric
                          </Form.Text>
                        </Col>
                        <Col md="6" className="SearchesContainer">
                          <Form.Control className="SearchesContainer" size="sm" as="select">
                            <option>Ascending</option>
                            <option>Descending</option>
                          </Form.Control>
                          <Form.Text className="subtext text-muted" as={Row}>
                            Direction
                          </Form.Text>
                        </Col>
                      </Form.Group>
                    </Col>
                  </Form.Group>
                </Form.Group>
              </Col>
            </Form.Group>
          </Form.Group>

          <Form.Group column md={2}>
            <Button variant="outline-info"
              onClick={()=> this.setSearch}
              >Search</Button>
          </Form.Group>


        </Navbar>

      {/* Buttons - Example      */}

          {/* <Navbar bg="light" expand="lg">
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
          </Navbar>  */}
          
          <Movies movies={this.state.movies} />
          
      </div>
    );
  }

}



 