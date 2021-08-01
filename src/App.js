import React, { useState } from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import './App.css';
import tealist from './data';
import Detail from './Detail';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  let [tea, setTea] = useState(tealist);
  
  return (
    <div className="App">
      
    <Switch>
    {/* 중복매칭을 허용하지 않겠다 */}

    <Route exact path="/">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand ><Link to="/">오설록</Link></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link ><Link to="/detail">녹차</Link></Nav.Link>
          <Nav.Link >발효차</Nav.Link>
          <Nav.Link >홍차</Nav.Link>
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
    </Route>

    <Route path="/detail">
      <Detail></Detail>
    </Route>
    {/* <Route path="/aa" component={Modal}></Route> */}

    <Route path="/:id">
          <div>기리보이</div>
    </Route>


      
    </Switch>

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
