import React, { useState } from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

let Boxess = styled.div`
  padding: 20px
`;

let Titless = styled.p`
  font-size: 60px;
  color: ${props => props.colorss};
`;

function Detail(props){
  let { id } = useParams();
  let findProduct = props.tea.find(function(tea){
    return tea.id == id
  })
  let histroy = useHistory();
  

  return(
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand ><Link to="/">오설록</Link></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link ><Link to="/detail/">녹차</Link></Nav.Link>
          <Nav.Link >발효차</Nav.Link>
          <Nav.Link >홍차</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
        <Boxess>
          <Titless>녹차</Titless>
        </Boxess>
        <div className="col-md-6">
        <img src={findProduct.img} width='50%' />
        </div>
        <div className="col-md-6 mt-4">
        <h4 className="pt-5">{findProduct.title}</h4>
        <p>{findProduct.price}원</p>
        <button type="button" class="btn btn-primary">구매하기</button>
        <button type="button" class="btn btn-primary" onClick={()=>{
          histroy.goBack();
        }}>뒤로가기</button>
        </div>
    </>
  )
}

export default Detail;