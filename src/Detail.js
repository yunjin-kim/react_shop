import React, { useState } from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let Box = styled.div`
  padding: 20px
`;

let Title = styled.p`
  font-size: 40px;
  color: ${props => props.color};
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
          <Nav.Link ><Link to="/detail/0">홍차</Link></Nav.Link>
          <Nav.Link><Link to="/detail/1">발효차</Link></Nav.Link>
          <Nav.Link><Link to="/detail/2">녹차</Link></Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
        <Box>
          <Title className="red">녹차</Title>
        </Box>
        <div className="my_alert_yellow ">
          <p>상품이 4개밖에 남지 않았어요!</p>
        </div>
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