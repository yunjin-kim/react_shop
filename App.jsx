import React, {useEffect, useState} from 'react';
import './App.css';
import {Navbar, Container, Nav, NavDropdown,Carousel, Button} from 'react-bootstrap';
import TeaData from './data';
import teashop from './teashop';
import Cart from './Cart';
import axios from 'axios';
import BarComponent from './Navbar';
import { CSSTransition } from 'react-transition-group';

import { Link, Route, Switch } from 'react-router-dom';

function App() {

    let [tea, setTea] = useState(TeaData);
    let [more, setMore] = useState(true);
    let [pushTab, setPushTab] = useState(0);
    let [switchEvent, setSwitchEvent] = useState(false);

    useEffect(()=>{
      tea.forEach((tea)=>{
        if(tea.id === 5){
          setMore(false)
        }
      })
    })

    return (
        <> 
        <div className = "App" > 

        <Switch>


        <Route exact path="/">
          <BarComponent></BarComponent>

          <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="src/img/carousel1.jpg"
                    alt="First slide"/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="src/img/carousel2.jpg"
                    alt="Second slide"/>

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="src/img/carousel3.jpg"
                    alt="Third slide"/>

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
          <div className="container">
          <div className="row">
            {
              tea.map((a,i)=>{
                return <Product key={a+i} tea={tea[i]} i={i}/>
              })
            }
          </div>
        </div>
                
            {
              more === true
              ? (
                <Button variant="outline-dark" className="morePouBtn" onClick={()=>{
                  axios.get('https://raw.githubusercontent.com/yunjin-kim/yunjin-kim/main/data2.json')
                  .then((more)=>{
                    setTea([...tea, ...more.data])
                  })
                  .catch(console.log)
                }}>
                인기 상품 더보기
                </Button>
              )
              : null
            }
          
            <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
              <Nav.Item>
                <Nav.Link eventKey="link-0" onClick={()=>{setPushTab(0); setSwitchEvent(false);}}>Option1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={()=>{setPushTab(1); setSwitchEvent(false);}}>Option2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" onClick={()=>{setPushTab(2); setSwitchEvent(false);}}>Option3</Nav.Link>
              </Nav.Item>
            </Nav>

          <CSSTransition in={switchEvent} classNames="trans" timeout={1000}>
            <TabContent pushTab={pushTab} setSwitchEvent={setSwitchEvent} />
          </CSSTransition>
          
        </Route>

        <Route path="/teashop">
          <BarComponent></BarComponent>
        </Route>

        <Route path="/cart">
            <Cart></Cart>
        </Route>


        </Switch>
        
        <div className="onlyToday">

        </div>

        

       
    </div>
  </>
    )
}

function TabContent(props){
  
  useEffect(()=>{
    props.setSwitchEvent(true);
  })

  if(props.pushTab === 0){
    return <div>0번째 내용입니다</div>
  }else if(props.pushTab === 1){
    return <div>1번째 내용입니다</div>
  }else if(props.pushTab === 2){
    return <div>2번째 내용입니다</div>
  }
}

function Product(props){
  return(
    <>
      <div className="col-md-3">
        <img src={props.tea.img} width='100%' alt="tea"/>
        <h4>{props.tea.title}</h4>
        <p>{props.tea.price}원</p>
      </div>
    </>
  )
}

function MorePouBtn(props){
 
}

export default App;