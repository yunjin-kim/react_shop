import React, { useEffect, useState } from 'react';
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
  let [alert, setAlert] = useState(true);
  let [inputData, setInputData] = useState('');

  useEffect(()=>{
    let alertTimer = setTimeout(()=>{setAlert(false)},2000);
    return ()=>{clearTimeout(alertTimer)};
    //setTimeout이 끝나기전 페이지 넘기면 오류생길 수 있어서 페이지 넘어갈 때 timer 없애준다
  },[alert]);


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
          <Nav.Link as={Link} to="/detail/0">홍차</Nav.Link>
          <Nav.Link as={Link} to="/detail/1">발효차</Nav.Link>
          <Nav.Link as={Link} to="/detail/2">녹차</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
        <Box>
          <Title className="red">녹차</Title>
        </Box>

        {inputData}
        <input onChange={(e)=>{setInputData(e.target.value)}} />

        {
          alert === true 
          ?   (<div className="my_alert_yellow" >
              <p>상품이 4개밖에 남지 않았어요!</p>
              </div>)
          : null
        }
       
        <div className="col-md-6">
        <img src={findProduct.img} width='50%' />
        </div>
        <div className="col-md-6 mt-4">
        <h4 className="pt-5">{findProduct.title}</h4>
        <p>{findProduct.price}원</p>
        <button type="button" className="btn btn-primary">구매하기</button>
        <button type="button" className="btn btn-primary" onClick={()=>{
          histroy.goBack();
        }}>뒤로가기</button>
        </div>
    </>
  )
}

export default Detail;