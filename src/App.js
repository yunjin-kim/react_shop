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
        {
          tea.map((a,i)=>{
            return <Product tea={tea[i]} i={i}/>
          })
        }

      </div>
    </div>

    </div>
  );
}

function Product(props){
  return(
    <div className="col-md-4">
    {/* <img src={'../img/'+(props.i + 1)+'.png'}width='100%' /> */}
    <img src={props.tea.img} width='100%' />
    <h4>{props.tea.title}</h4>
    <p>{props.tea.price}원</p>
    </div>
  )
}


export default App;
