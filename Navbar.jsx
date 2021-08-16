import React, {useState} from 'react';
import {Navbar, Container, Nav, NavDropdown,Carousel, Button} from 'react-bootstrap';

function BarComponent(){
  return(
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand href="#home">오설록</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">티샵</Nav.Link>
                <Nav.Link href="#link">티라이프</Nav.Link>
                <Nav.Link href="#link">이벤트</Nav.Link>
                <Nav.Link href="#link">스토리</Nav.Link>
                <Nav.Link href="#link">제주 티뮤지엄</Nav.Link>
                <NavDropdown title="Korea" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Korea</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">USA</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">China</NavDropdown.Item>
                    <NavDropdown.Divider/>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

export default BarComponent;