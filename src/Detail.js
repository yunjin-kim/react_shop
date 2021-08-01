import React, { useState } from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { Link, Route, Switch, useHistory } from 'react-router-dom';


function Detail(){
  let histroy = useHistory();

  return(
    <>
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
      <div className="col-md-6">
      <img src={"../img/3.png"} width='50%' />
      </div>
      <div className="col-md-6 mt-4">
      <h4 className="pt-5">상품정보</h4>
      <p>상품가격</p>
      <button type="button" class="btn btn-primary">구매하기</button>
      <button type="button" class="btn btn-primary" onClick={()=>{
        histroy.goBack();
      }}>뒤로가기</button>
      </div>
    </>
  )
}

export default Detail;