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