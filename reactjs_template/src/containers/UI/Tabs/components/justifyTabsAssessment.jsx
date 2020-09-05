import React, { PureComponent } from 'react';
import {
  Card, CardBody,Row, Col, Nav, NavItem, NavLink, TabContent, TabPane,Button, ButtonToolbar,
} from 'reactstrap';
import PropTypes from 'prop-types';
import EyeIcon from 'mdi-react/EyeIcon';
import { withTranslation } from 'react-i18next';
import validate from './validate';
import { Field, reduxForm } from 'redux-form';
import renderRadioButtonField from '../../../../shared/components/form/RadioButton';
import './justifyTabsAssessment.css'
import renderDropZoneField from '../../../../shared/components/form/DropZone';
import renderCheckBoxField from '../../../../shared/components/form/CheckBox';


import classnames from 'classnames';
import renderSelectField from '../../../../shared/components/form/Select';
const renderField = ({
    input, placeholder, type, meta: { touched, error },
  }) => (
    <div className="form__form-group-input-wrap">
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && <span className="form__form-group-error">{error}</span>}
    </div>
  );
  
  renderField.propTypes = {
    input: PropTypes.shape().isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    meta: PropTypes.shape({
      touched: PropTypes.bool,
      error: PropTypes.string,
    }),
  };
  
  renderField.defaultProps = {
    placeholder: '',
    meta: null,
    type: 'text',
  };
class JustifyTabsAssessmentBottom extends PureComponent {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   	users: [{firstName: "", lastName: ""}]
  //   };
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

    
  addClick(){
    this.setState(prevState => ({ 
    	users: [...prevState.users, { firstName: "", lastName: "" }]
    }))
  }

  createUI(){
    var s='NoofQuestion'
    return this.state.users.map((el, i) => (
      <div key={i}>           
                {/* <span className="form__form-group-label">Dropdown</span> */}            
            <Field
                   name={'Noofquestion'+i}
                    component={renderField}
                    type="text"
                    placeholder="No of question"
                    onChange={this.handleChange.bind(this, i)}
                  />
                     <Field
                   name={'Markandquestion'+i}
                    component={renderField}
                    type="text"
                    placeholder="Mark and question"
                    onChange={this.handleChange.bind(this, i)}
                  />
                    <Field
                    name={'MultipleChoice'+i}
                    placeholder="MultipleChoice"
                    component={renderSelectField}
                    options={[
                      { value: 'match the following', label: 'Match the following' },
                      { value: 'Fill in the blanks', label: 'Fill in the blanks' },
                      { value: 'True or false', label: 'True or false' },

                    ]}
                  />
                
         {/* <input placeholder="No of question"  name="firstName" value={el.firstName ||''} onChange={this.handleChange.bind(this, i)} />
         <input placeholder="Mark and question" name="lastName" value={el.lastName ||''} onChange={this.handleChange.bind(this, i)} /> */}
         <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
      </div>          
    ))
 }
 handleChange(i, e) {
  const { name, value } = e.target;
  let users = [...this.state.users];
  users[i] = {...users[i], [name]: value};
  this.setState({ users });
}
removeClick(i){
  let users = [...this.state.users];
  users.splice(i, 1);
  this.setState({ users });
}

  
handleSubmit(event) {
  alert('A name was submitted: ' + JSON.stringify(this.state.users));
  event.preventDefault();
}
    static propTypes = {
        t: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
      };
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      showPassword: false,
      users: [{firstName: "", lastName: ""}]
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  showPassword = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };
    toggle = (tab) => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  render() {
 
    const { t } = this.props;
    const { activeTab } = this.state;
    
    const {
        handleSubmit, pristine, reset, submitting} = this.props;
      const { showPassword } = this.state;
    return (
      <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Create Assessment</h5>
              {/* <h5 className="subhead">Use default tabs with classes
                <span className="red-text"> tabs--justify tabs--bordered-bottom</span>
              </h5> */}
            </div>
            <div className="tabs tabs--justify tabs--bordered-bottom scroll_overflow">
              <div className="tabs__wrap">
                <Nav tabs scroll_overflow>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => {
                        this.toggle('1');
                      }}
                    >
                      STEP1
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => {
                        this.toggle('2');
                      }}
                    >
                      STEP2
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '3' })}
                      onClick={() => {
                        this.toggle('3');
                      }}
                    >
                      STEP3
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '4' })}
                      onClick={() => {
                        this.toggle('4');
                      }}
                    >
                      STEP4
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                  <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              {/* <h5 className="bold-text">{t('forms.from_validation.horizontal_form_validate')}</h5> */}
              <h5 className="subhead">Create Assessment</h5>
            </div>
            <form className="form form--horizontal" onSubmit={handleSubmit}>
              <Row>
      <Col md={3} lg={3} xl={3}>
              <div className="form__form-group inputTop1">
                <span className="form__form-group-label">Exam Name</span>
                <div className="form__form-group-field">
                  <Field
                    name="Examname"
                    component={renderField}
                    type="text"
                    placeholder="Exam Name"
                  />
                </div>
              </div>
      </Col>
      <Col md={3} lg={3} xl={3}>

              <div className="form__form-group inputTop1">
                <span className="form__form-group-label">Term</span>
                <div className="form__form-group-field">
                  <Field
                    name="Term"
                    component={renderField}
                    type="text"
                    placeholder="Term"
                  />
                </div>
              </div>
      </Col>
      <Col md={3} lg={3} xl={3}>

              <div className="form__form-group inputTop1">
                <span className="form__form-group-label">Standard</span>
                <div className="form__form-group-field">
                  <Field
                    name="Standard"
                    component={renderField}
                    type="text"
                    placeholder="Standard"
                  />
                </div>
              </div>
      </Col>
      <Col md={3} lg={3} xl={3}>

              <div className="form__form-group inputTop1">
                <span className="form__form-group-label">Subject</span>
                <div className="form__form-group-field">
                  <Field
                    name="Subject"
                    component={renderField}
                    type="text"
                    placeholder="Subject"
                  />
                </div>
              </div>
      </Col>
      {/* <Col md={3} lg={3} xl={3}>

              <div className="form__form-group">
                <span className="form__form-group-label">Subject</span>
                <div className="form__form-group-field">
                  <Field
                    name="Subject"
                    component={renderField}
                    type="text"
                    placeholder="Subject"
                  />
                </div>
              </div>
      </Col> */}
      </Row>

      <Row className="row2" style={{width:'100%', float:'left'}}>
      
       <Col md={7} lg={7} xl={7}>

      <div className="form__form-group inputTop2">
                <span className="form__form-group-label">Test Duration</span>
                <div className="form__form-group-field">
                  <Field
                    name="TestDurationStart"
                    component={renderField}
                    type="text"
                    placeholder="start"
                  />
               
                <Field className="paddLeft"
            name="TestDurationEnd"
            component={renderField}
            type="text"
            placeholder="End"
          />
        </div>
      </div>
    </Col>
       
      </Row>
      <Row className="row2" style={{width:'100%', float:'left'}}>
      
       <Col md={7} lg={7} xl={7}>

      <div className="form__form-group inputTop2">
                <span className="form__form-group-label">Test Duration</span>
                <div className="form__form-group-field">
                  <Field
                    name="TestDurationStart"
                    component={renderField}
                    type="text"
                    placeholder="start"
                  />
               
                <Field className="paddLeft"
            name="TestDurationEnd"
            component={renderField}
            type="text"
            placeholder="End"
          />
        </div>
      </div>
    </Col>
       
      </Row>
     
      {/* <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit">Submit</Button>
                <Button type="button" onClick={reset} disabled={pristine || submitting}>
                  Cancel
                </Button>
              </ButtonToolbar> */}
      {/* <Row style={{width:'100%'}}>
<Col md={12} lg={12} xl={12}>
           
<ButtonToolbar style={{marginLeft:'0px'}} className="form__button-toolbar">
                <Button color="primary" type="submit">Next</Button>
               
              </ButtonToolbar> 
</Col>
      </Row> */}
          
{/*          
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit">Submit</Button>
                <Button type="button" onClick={reset} disabled={pristine || submitting}>
                  Cancel
                </Button>
              </ButtonToolbar> */}
            </form>
          </CardBody>
        </Card>
      </Col>
      <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit"     className={classnames({ active: activeTab === '2' })}
                      onClick={() => {
                        this.toggle('2');
                      }}>Next</Button>
                
              </ButtonToolbar> 
                  </TabPane>
                  <TabPane tabId="2">
            <form className="form form--horizontal" onSubmit={handleSubmit}>
              
<Row style={{width:'100%'}}>

<Col md={1} lg={1} xl={1}>

<div className="form__form-group-label">Create Test</div>

</Col>
<Col md={11} lg={11} xl={11}>
                  <div className="form__form-group formRadio">
              <div className="form__form-group-field">
                <Field
                  name="radio_colored"
                  component={renderRadioButtonField}
                  label="Manually"
                  radioValue="0"
                  
                  className="colored"
                />
              </div>
            </div>

            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field
                  name="radio_colored"
                  component={renderRadioButtonField}
                  label="Use Tool Generator"
                  radioValue="1"
                  
                  className="colored"
                />
              </div>
            </div>

            
            <div className="form__form-group formRadio">

<div className="form__form-group-field">
  <Field
    name="radio_colored"
    component={renderRadioButtonField}
    label="Choose From Library"
    radioValue="2"
    
    className="colored"
  />
</div>
</div>
</Col>

            </Row>
            {/* <form className="form form--horizontal" onSubmit={handleSubmit}> */}
              
              <Row style={{width:'100%'}}>              
              <Col md={1} lg={1} xl={1}>              
              <div className="form__form-group-label">Randomize</div>
              </Col>
              <Col md={11} lg={11} xl={11}>              
                          <div className="form__form-group formRadio form_down">              
                            <div className="form__form-group-field">
                              <Field
                                name="radio_on_click"
                                component={renderRadioButtonField}
                                label="Don’t Randomize"
                                radioValue="3"
                                
                                className="colored"
                              />
                            </div>
                          </div>
              
                          <div className="form__form-group form_down">
                            <div className="form__form-group-field">
                              <Field
                                name="radio_on_click"
                                component={renderRadioButtonField}
                                label="Randomize Question Order
                                (Show a different sequence of questions of each participants)"
                                radioValue="4"
                                
                                className="colored"
                              />
                            </div>
                          </div>
                          <div className="form__form-group formRadio form_down">
              
              <div className="form__form-group-field">
                <Field
                  name="radio_on_click"
                  component={renderRadioButtonField}
                  label="Randomize Question Order
                  (Show different set of questions to each participants )
                  "
                  radioValue="5"
                  
                  className="colored"
                />
              </div>
              </div>
              
                <form onSubmit={this.handleSubmit}>
          {this.createUI()}        
          <input type='button' value='add more' onClick={this.addClick.bind(this)}/>
          {/* <input type="submit" value="Submit" /> */}
      </form>
              
              </Col>
              
                          </Row>

                        </form>
          
                  </TabPane>
                  <TabPane tabId="3">
                  <Row style={{width:'100%'}}>
              <Col md={4} lg={4} xl={4}>
                <h6>Create New Question</h6><br/>
</Col>

<Col md={4} lg={4} xl={4}>
<Field
            name="AddFromLibrary"
            component={renderDropZoneField}
            customHeight
          />
</Col>
<Col md={4} lg={4} xl={4}>
<Field
            name="UploadQuestions"
            component={renderDropZoneField}
            customHeight
          />
          </Col>
                  </Row>
                  </TabPane>
                  <TabPane tabId="4">    
<form className="form form--horizontal" onSubmit={handleSubmit}>

                <Col md={12} lg={12} xl={12}>
              <div className="card__title">
              <h5 className="bold-text">Question Setting</h5>
              {/* <h5 className="subhead">Use default tabs with classes
                <span className="red-text"> tabs--justify tabs--bordered-bottom</span>
              </h5> */}
            </div>
            <Col md={6} lg={6} xl={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Number of Attempts</span>
                <div className="form__form-group-field">
                  <Field
                    name="NumberofAttempts"
                    component={renderField}
                    type="text"
                    placeholder="Number of Attempts"
                  />
                  <span className="form__form-group-label">During Exam</span>
                </div>
              </div>
              </Col>
              <Col md={6} lg={6} xl={6}>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="Unlimittedattempts"
                    component={renderCheckBoxField}
                    defaultChecked
                    color="#4ce1b6"
                    className="colored"
                  />
                  <span className="form__form-group-label">Unlimited Attempts</span>
                </div>
              </div>
              </Col>
              </Col>
              <Col md={12} lg={12} xl={12}>
              <div className="card__title">
              <h5 className="bold-text">Time Settings</h5>
              {/* <h5 className="subhead">Use default tabs with classes
                <span className="red-text"> tabs--justify tabs--bordered-bottom</span>
              </h5> */}
            </div>
                <div className="form__form-group formRadio">
                <span className="form__form-group-label">Test Duration</span>
                <div className="form__form-group-field">
                  <Field
                    name="testDuraton"
                    component={renderRadioButtonField}
                    label="Date&Time"
                    radioValue="0"
                    
                    className="colored"
                  />
                    <Field
                    name="testDuraton"
                    component={renderRadioButtonField}
                    label="CountDown"
                    radioValue="1"  
                    className="colored"
                  />
                </div>
                </div>
                </Col>
                <Col md={12} lg={12} xl={12}>
                <div className="form__form-group formRadio">
                <span className="form__form-group-label">Pause time when windows closed</span>
                <div className="form__form-group-field">
                  <Field
                    name="pausetime"
                    component={renderRadioButtonField}
                    label="Yes"
                    radioValue="0"
                    
                    className="colored"
                  />
                    <Field
                    name="pausetime"
                    component={renderRadioButtonField}
                    label="No"
                    radioValue="1"  
                    className="colored"
                  />
                </div>
                </div>
                </Col>
                <Col md={12} lg={12} xl={12}>
                  <div className="card__title">
                     <h5 className="bold-text">Proctoring Setting</h5>
                        {/* <h5 className="subhead">Use default tabs with classes
                          <span className="red-text"> tabs--justify tabs--bordered-bottom</span>
                        </h5> */}
                  </div>
                  <div className="form__form-group formRadio">
                <span className="form__form-group-label">Live Image of Students</span>
                <div className="form__form-group-field">
                  <Field
                    name="LiveImage"
                    component={renderRadioButtonField}
                    label="Yes"
                    radioValue="0"
                    
                    className="colored"
                  />
                    <Field
                    name="LiveImage"
                    component={renderRadioButtonField}
                    label="No"
                    radioValue="1"  
                    className="colored"
                  />
                </div>
                </div>
                </Col>
                <Col md={12} lg={12} xl={12}>
                <div className="form__form-group formRadio">
                <span className="form__form-group-label">Restrict Browser New Tab</span>
                <div className="form__form-group-field">
                  <Field
                    name="RestrictBrowser"
                    component={renderRadioButtonField}
                    label="Yes"
                    radioValue="0"
                    
                    className="colored"
                  />
                    <Field
                    name="RestrictBrowser"
                    component={renderRadioButtonField}
                    label="No"
                    radioValue="1"  
                    className="colored"
                  />
                </div>
                </div>
                </Col>
                <Col md={12} lg={12} xl={12}>
                <div className="card__title">
                     <h5 className="bold-text">Result Setting</h5>
                        {/* <h5 className="subhead">Use default tabs with classes
                          <span className="red-text"> tabs--justify tabs--bordered-bottom</span>
                        </h5> */}
                  </div>
                  <div className="form__form-group formRadio">
                <span className="form__form-group-label">SMS</span>
                <div className="form__form-group-field">
                  <Field
                    name="SMS"
                    component={renderRadioButtonField}
                    label="Yes"
                    radioValue="0"
                    
                    className="colored"
                  />
                    <Field
                    name="SMS"
                    component={renderRadioButtonField}
                    label="No"
                    radioValue="1"  
                    className="colored"
                  />
                </div>
                </div>
                </Col>
                <Col md={12} lg={12} xl={12}>
                <div className="form__form-group formRadio">
                <span className="form__form-group-label">Mail</span>
                <div className="form__form-group-field">
                  <Field
                    name="Mail"
                    component={renderRadioButtonField}
                    label="Yes"
                    radioValue="0"
                    
                    className="colored"
                  />
                    <Field
                    name="Mail"
                    component={renderRadioButtonField}
                    label="No"
                    radioValue="1"  
                    className="colored"
                  />
                </div>
                </div>
                </Col>
                <Col md={12} lg={12} xl={12}>
                <div className="form__form-group formRadio">
                <span className="form__form-group-label">Test Completed Success Message</span>
                <div className="form__form-group-field">
                  <Field
                    name="testcompleted"
                    component={renderRadioButtonField}
                    label="Yes"
                    radioValue="0"
                    
                    className="colored"
                  />
                    <Field
                    name="testcompleted"
                    component={renderRadioButtonField}
                    label="No"
                    radioValue="1"  
                    className="colored"
                  />
                </div>
                </div>
                </Col>
                <Col md={12} lg={12} xl={12}>
                <div className="form__form-group formRadio">
                <span className="form__form-group-label">Display Result</span>
                <div className="form__form-group-field">
                  <Field
                    name="DisplayResult"
                    component={renderRadioButtonField}
                    label="Yes"
                    radioValue="0"
                    
                    className="colored"
                  />
                    <Field
                    name="DisplayResult"
                    component={renderRadioButtonField}
                    label="No"
                    radioValue="1"  
                    className="colored"
                  />
                </div>
                </div>
                </Col>
              <Col md={12} lg={12} xl={12}>
              <div className="form__form-group">
                <span className="form__form-group-label">Test Url</span>
                <div className="form__form-group-field">
                  <Field
                    name="TestUrl"
                    component={renderField}
                    type="text"
                    placeholder="TestUrl"
                  />
                </div>
              </div>
              </Col>
              <Col md={12} lg={12} xl={12}>
                <ButtonToolbar>
                <Button color="primary" type="submit">Submit</Button>
                <Button type="button" onClick={reset} disabled={pristine || submitting}>
                  Cancel
                </Button>
              </ButtonToolbar>
              </Col>
              </form>
              </TabPane>
              </TabContent>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default  reduxForm({
    form: 'JustifyTabsAssessmentBottom', // a unique identifier for this form
    validate,
  })(withTranslation('common')(JustifyTabsAssessmentBottom));
