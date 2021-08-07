import React, { useContext, useEffect, useState } from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import './App.css';
import Detail from './Detail';
import axios from 'axios';
import tealist from './data';
import { Link, Route, Switch } from 'react-router-dom';
//같은 변수값을 공유할 범위 생성
export let stockContext =React.createContext();

function App() {
  let [tea, setTea] = useState(tealist);
  let [stock, setStock] = useState([10, 11, 12]);
  let [more, setMore] = useState(true);
  let [moreErr, setMoreErr] = useState(true);

  useEffect(()=>{
    console.log(tea)
    tea.forEach((tea)=>{
      if(tea.id === 5){
        setMore(false)
      }
    })
  },[tea])
  
  return (
    <div className="App">
      
    <Switch>
    {/* 중복매칭을 허용하지 않겠다 */}

    <Route exact path="/">
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
      <div className="background">  
        <h1>녹차 / 발효차 / 홍차</h1>
        <p>
          유기농 제주 차밭에서 자란 우리 녹차 발효차 라인입니다
        </p>
      </div>

      <div className="container">
        <stockContext.Provider value={stock}>
        <div className="row">
          {
            tea.map((a,i)=>{
              return <Product key={a+i} tea={tea[i]} i={i}/>
            })
          }
        </div>

        </stockContext.Provider>

      </div>
      
      {
        more === true
        ? (
          <button className="btn btn-primary" onClick={()=>{
            axios.get('https://raw.githubusercontent.com/yunjin-kim/yunjin-kim/main/data2.json')
            .then((result)=>{
              setTea([...tea, ...result.data])
            })
            .catch(()=>{
              console.log();
              setMoreErr(false);
            })
            }}>더보기
          </button>)
        : null
      } 

      {
        moreErr === true
        ? null
        : <MoreErrBox />
      }

    </Route>

    <Route path="/detail/:id">
        <stockContext.Provider value={stock}>
      <Detail tea={tea} stock={stock} setStock={setStock} />
        </stockContext.Provider>
    </Route>
    {/* <Route path="/aa" component={Modal}></Route> */}

    </Switch>

    </div>
  );
}

function Product(props){

  let stock = useContext(stockContext);

  return(
    <div className="col-md-4">
    {/* <img src={'../img/'+(props.i + 1)+'.png'}width='100%' /> */}
    <img src={props.tea.img} width='100%' alt="tea"/>
    <h4>{props.tea.title}</h4>
    <p>{props.tea.price}원</p>
    {stock[props.i]}
    <Test></Test>
    </div>
  )
}

function MoreErrBox(){
  return(
    <div className="my_alert_yellow" >
      <p>새로고침 한번 해주세요</p>
    </div>
  )
}

function Test(){
  return <p>재고</p>
}


export default  App;
