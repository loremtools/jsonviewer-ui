import React from 'react'
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

import './BootstrapNavbar.css';

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div>
        <div className="row no-padding">
          <div className="col-md-12 no-padding">
            <Router>
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="#home">LoremTools</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">JsonViewer</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
            </Router>
          </div>
        </div>
      </div>
    )
  }
}

export default BootstrapNavbar;
