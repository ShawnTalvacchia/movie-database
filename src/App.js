import React from "react";

import "./App.css";

import YouTube from "@u-wave/react-youtube";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Modal, ModalHeader, ModalBody, Pagination } from "reactstrap";

import { Button, Navbar, Form, Col, Row } from "react-bootstrap";
import Movies from "./components/Movies";
import Genres from "./components/Genres";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      length: { min: 80, max: 150 },
      year: { min: 1940, max: 2020 },
      sort: "popularity",
      ascend: "desc",
      modal: false,
      title: "",
      genre: "",
      page: 1
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies(page1) {
    const API_key = "4c5b4a5e627748117d4b24082672a9b4";
    // const movieType = this.state.movieType
    const longerThan = this.state.length.min;
    const shorterThan = this.state.length.max;
    const afterYear = this.state.year.min;
    const beforeYear = this.state.year.max;
    const sort = this.state.sort;
    const ascend = this.state.ascend;
    const genre = this.state.genre;
    const page = this.state.page;

    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&language=en-US&sort_by=${sort}.${ascend}&include_adult=false&include_video=false&page=${page}&with_runtime.lte=${shorterThan}&with_runtime.gte=${longerThan}&release_date.gte=${afterYear}&release_date.lte=${beforeYear}&with_genres=${genre}`
    );
    const jsonData = await response.json();
    // console.log("Array of a result", jsonData.results[1]);
    this.setState({
      movies: jsonData.results
    });
  }

  getTrailerKey = async movieId => {
    const API_key = "4c5b4a5e627748117d4b24082672a9b4";
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_key}&language=en-US`
      );
      const jsonData = await response.json();

      // console.log("Check this array", jsonData)
      // if (jsonData.results.length > 0) {

      this.setState({
        id: jsonData.results[0].key,
        modal: true,
        title: jsonData.results[0].name
      });
    } catch (error) {
      // }
      alert("No movie trailer");
      console.log("error", error);
    }
  };

  toggle = movieId => {
    if (!this.state.modal) {
      this.getTrailerKey(movieId);
    } else {
      this.setState({ modal: !this.state.modal });
    }
  };

  getLength = e => {
    this.setState({ length: e.target.value });
  };

  setLength(value) {
    this.setState({ length: value });
    this.getMovies();
  }

  setYear(value) {
    this.setState({ year: value });
    this.getMovies();
  }

  setSort(value) {
    this.setState({ sort: value });
    this.getMovies();
  }

  render() {
    return (
      <div className="App">
        <Modal
          size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader
            toggle={this.toggle}
            style={{ backgroundColor: "#17a2b8", color: "#343a40" }}
          >
            {this.state.title}
          </ModalHeader>
          <ModalBody style={{ backgroundColor: "#17a2b8" }}>
            <YouTube className="video-player" video={this.state.id} autoplay />
          </ModalBody>
        </Modal>

        <Navbar sticky="top" bg="dark" variant="dark" className="my-NavBar">
          <Row className="justify-content-around nav-columns">
            {/* Genres */}
            <Col md="12" lg="3" className="SearchesContainer">
              <Form.Group>
                <h6 className="nav-text">Sort by</h6>
                <Row>
                  <Form.Control
                    size="sm"
                    as="select"
                    value={this.state.genre}
                    onChange={e =>
                      this.setState({ genre: e.target.value }, () =>
                        this.getMovies()
                      )
                    }
                  >
                    ><option value="">All</option>
                    <Genres />
                  </Form.Control>
                </Row>
              </Form.Group>
            </Col>

            {/* Length */}
            <Col md="12" lg="3" className="SearchesContainer">
              <Form.Group>
                <h6 className="nav-text">Length</h6>
                <InputRange
                  className="Inputs"
                  // draggableTrack
                  allowSameValues
                  maxValue={200}
                  minValue={60}
                  value={this.state.length}
                  onChange={value => this.setLength(value)}
                  // this.setState({ length: e.value }) && this.getMovies}
                />
              </Form.Group>
            </Col>

            {/* Released */}
            <Col md="12" lg="3" className="SearchesContainer">
              <Form.Group>
                <h6 className="nav-text">Released</h6>
                <InputRange
                  draggableTrack
                  name="Released"
                  maxValue={2020}
                  minValue={1930}
                  value={this.state.year}
                  onChange={value => this.setYear(value)}
                />
              </Form.Group>
            </Col>

            {/* Sort by */}
            <Col md="12" lg="3" className="SearchesContainer">
              <Form.Group>
                <h6 className="nav-text">Sort by</h6>
                <Row>
                  <Col md="6" className="list-option-container">
                    <Form.Control
                      size="sm"
                      as="select"
                      value={this.state.sort}
                      onChange={e =>
                        this.setState({ sort: e.target.value }, () =>
                          this.getMovies()
                        )
                      }
                    >
                      <option value="vote_average">vote</option>
                      <option value="popularity">popularity</option>
                      <option value="original_title">name</option>
                      <option value="revenue">revenue</option>
                    </Form.Control>
                  </Col>
                  <Col md="6" className="list-option-container">
                    <Form.Control
                      size="sm"
                      as="select"
                      size="sm"
                      as="select"
                      value={this.state.ascend}
                      onChange={e =>
                        this.setState({ ascend: e.target.value }, () =>
                          this.getMovies()
                        )
                      }
                    >
                      <option value="desc">descending</option>
                      <option value="asc">ascending</option>
                    </Form.Control>
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          </Row>
        </Navbar>
        <div className="header-container">Filtered Films</div>
        <Movies movies={this.state.movies} toggle={this.toggle} />

      </div>
    );
  }
}
