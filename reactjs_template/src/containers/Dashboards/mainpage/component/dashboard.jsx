import React, { Component } from "react";
import {Container, Row, Col, CardBody, Card,} from 'reactstrap';
import  './dashboard.css';
class Dashboard extends Component{
    constructor() {
        super();
        this.state = {
       
          }
        }
render() {
 return (
     <Container>
         <Row>
         <Col md={12} sm={12}>     
   <h1 style={{marginBottom:'1em'}}>Proctor</h1>

         <Row>  
         <Col md={3} sm={3}>        
         <Card className="grid extendCard">
          <CardBody>        
   <h4 className="BoxShadowPadTop">ACTIVE</h4>
   </CardBody>        
   </Card>
   </Col>
   <Col md={3} sm={3}>        
         <Card className="grid extendCard">
          <CardBody>        
   <h4 className="BoxShadowPadTop">DRAEFT</h4>
   </CardBody>        
   </Card>
   </Col>
   <Col md={3} sm={3}>        
         <Card className="grid extendCard">
          <CardBody>        
   <h4 className="BoxShadowPadTop">COMPLETED</h4>
   </CardBody>        
   </Card>
   </Col>
   <Col md={3} sm={3}>        
         <Card className="grid extendCard">
          <CardBody>         
   <h4 className="BoxShadowPadTop">CREATE ASSESSMENT</h4>
   </CardBody>        
   </Card>
   </Col>
   </Row>
   </Col>
   </Row>
     </Container>
   
         )
}
}
export default  Dashboard;
