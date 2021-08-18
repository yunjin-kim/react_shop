import React, {useState} from 'react';
import {Navbar, Container, Nav, NavDropdown,Carousel, Button} from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';


function BarComponent(){
  return(
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand as={Link} to="/">오설록</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/teashop">티샵</Nav.Link>
                <Nav.Link href="#link">티라이프</Nav.Link>
                <Nav.Link href="#link">이벤트</Nav.Link>
                <Nav.Link href="#link">스토리</Nav.Link>
                <Nav.Link href="#link">제주 티뮤지엄</Nav.Link>
                <Nav.Link as={Link} to="/cartpage">장바구니</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

export default BarComponent;