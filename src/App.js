import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import './App.css';




function App() {
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
        <div className="col-md-4">
          <img src="https://www.osulloc.com/upload/kr/ko/adminImage/CV/PI/20191213161646687QE.png?quality=80" />
          <h4>레드파파야블랙티 20입</h4>
          <p>18,400원</p>
        </div>
        <div className="col-md-4">
          <img src="https://www.osulloc.com/upload/kr/ko/adminImage/ZM/SS/20191213160304931SR.png?quality=80" />
          <h4>삼다연제주영귤 20입</h4>
          <p>23,000원</p>
        </div>
        <div className="col-md-4">
          <img src="https://www.osulloc.com/upload/kr/ko/adminImage/GD/EP/20200716171557754KL.png?quality=80" />
          <h4>찬물녹차 20입</h4>
          <p>8,600원</p>
        </div>
      </div>
    </div>

    
    </div>
  );
}

export default App;
