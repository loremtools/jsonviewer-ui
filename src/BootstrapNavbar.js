import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

import './BootstrapNavbar.css';

import JsonViewerPanel from './JsonViewerPanel';

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div>
        <div className="row no-padding">
          <div className="col-md-12 no-padding">
            <Router>
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="/">LoremTools</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/jsonviewer">JsonViewer</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path="/jsonviewer">
                  <JsonViewer />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    )
  }
}

function Home() {
  return <h2>Home</h2>;
}

function JsonViewer() {
  return <JsonViewerPanel />;
}

function About() {
  return <h2>About</h2>;
}

export default BootstrapNavbar;
