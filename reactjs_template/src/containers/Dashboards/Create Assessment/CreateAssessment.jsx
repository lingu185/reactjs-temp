import React, { Component } from "react";
import {Container, Row, Col, CardBody, Card,} from 'reactstrap';
import AddTeacherForm from "../../Form/BasicForm/components/AddTeacherForm";
// import AddSchoolForm from "../../../Form/BasicForm/components/AddSchoolForm";
import JustifyTabsAssessmentBottom from '../../../containers/UI/Tabs/components/justifyTabsAssessment';

class CreateAssement extends Component{
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
         {/* <AddSchoolForm onSubmit={(values)=>{
        console.log('HARI',values)
      }} /> */}
      <JustifyTabsAssessmentBottom onSubmit={(values)=>{
        console.log('HARI1234',values)
      }}/>
      {/* <AddTeacherForm onSubmit={(values)=>{
        console.log('HARI1234',values)
      }}/> */}
   </Col>
   </Row>
     </Container>
   
         )
}
}
export default  CreateAssement;
