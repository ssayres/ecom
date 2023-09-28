import React, { Component, Fragment } from 'react'
import {Container, Navbar} from 'react-bootstrap';

class NavMenuDesktop extends Component {
  render() {
    return (
      <Fragment>
      <Navbar bg="light">
      <Container>
      <Navbar.Brand href="#home"> Teste Navbar</Navbar.Brand>
      </Container>
      </Navbar>
      </Fragment>
    )
  }
}

export default NavMenuDesktop
