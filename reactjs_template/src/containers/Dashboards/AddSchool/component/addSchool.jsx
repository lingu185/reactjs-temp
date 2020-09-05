import React, { Component } from "react";
import {Container, Row, Col, CardBody, Card,} from 'reactstrap';
import  './addSchool.css'
import AddSchoolForm from "../../../Form/BasicForm/components/AddSchoolForm";

class addSchool extends Component{
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
         <AddSchoolForm onSubmit={(values)=>{
        console.log('HARI',values)
      }} />
   </Col>
   </Row>
     </Container>
   
         )
}
}
export default  addSchool;