import React, { useState } from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import './App.css';
import tealist from './data';



function App() {
  let [tea, setTea] = useState(tealist);
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">오설록</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">녹차</Nav.Link>
        <Nav.Link href="#features">발효차</Nav.Link>
        <Nav.Link href="#pricing">홍차</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    <div className="background">  
      <h1>녹차 / 발효차 / 홍차</h1>
      <p>
        유기농 제주 차밭에서 자란 우리 녹차 발효차 라인입니다
      </p>
    </div>

    <div className="container">
      <div className="row">
        <Product />
      </div>
    </div>

    </div>
  );
}

function Product(){
  let [tea, setTea] = useState(tealist);
  return(
    <div className="col-md-4">
    <img src={tea[0].img} />
    <h4>{tea[0].title}</h4>
    <p>{tea[0].price}원</p>
    </div>
  )
    
}


export default App;
