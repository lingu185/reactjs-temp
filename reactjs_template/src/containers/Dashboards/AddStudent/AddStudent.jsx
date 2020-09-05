import React, { Component } from "react";
import {Container, Row, Col, CardBody, Card,} from 'reactstrap';
import AddStudent from "../../Form/BasicForm/components/AddStudent";
// import AddSchoolForm from "../../../Form/BasicForm/components/AddSchoolForm";

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
         <AddStudent onSubmit={(values)=>{
        console.log('HARIstudent',values)
      }} />
   </Col>
   </Row>
     </Container>
   
         )
}
}
export default  addSchool;
