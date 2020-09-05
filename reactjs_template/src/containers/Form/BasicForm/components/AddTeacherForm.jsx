import React, { PureComponent } from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import EyeIcon from 'mdi-react/EyeIcon';
import { withTranslation } from 'react-i18next';
import renderSelectField from '../../../../shared/components/form/Select';
import validate from './validate';
import './AddTeacher.css'

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

class AddTeacherForm extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
  };

  constructor() {
    super();
    this.state = {
      showPassword: false,
    };
  }

  showPassword = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    const {
      handleSubmit, pristine, reset, submitting, t,
    } = this.props;
    const { showPassword } = this.state;

    return (
      
        <Card>
          <CardBody>
            <div className="card__title">
              {/* <h5 className="bold-text">{t('forms.from_validation.horizontal_form_validate')}</h5> */}
              <h5 className="subhead">Add Teacher</h5>
            </div>
            <Col md={12} lg={12} xl={12}>
            <form className="form form--horizontal seperate_class" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">Name</span>
                <div className="form__form-group-field">
                  <Field
                    name="Name"
                    component={renderField}
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              </form>
              </Col>
              <Col md={12} lg={12} xl={12}>
            <form className="form form--horizontal seperate_class" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">Phone number</span>
                <div className="form__form-group-field">
                  <Field
                    name="PhoneNumber"
                    component={renderField}
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              </form>
              </Col>
              <Col md={12} lg={12} xl={12}>
            <form className="form form--horizontal seperate_class" onSubmit={handleSubmit}>
              <div className="form__form-group seperate_class">
                <span className="form__form-group-label">E-mail</span>
                <div className="form__form-group-field">
                  <Field
                    name="email"
                    component={renderField}
                    type="email"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>
              </form>
              </Col>
              <Col md={12} lg={12} xl={12}>
            <form className="form form--horizontal seperate_class" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">Class</span>
                <div className="form__form-group-field">
                  <Field
                    name="Class"
                    component={renderField}
                    type="text"
                    placeholder="Class"
                  />
                </div>
              </div>
              </form>
              </Col>
              <Col md={12} lg={12} xl={12}>
            <form className="form form--horizontal seperate_class" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">Teaching To</span>
                <div className="form__form-group-field">
                  <Field
                    name="TeachingTo"
                    component={renderField}
                    type="text"
                    placeholder="Teaching To"
                  />
                </div>
              </div>
              </form>
              </Col>
              <Col md={12} lg={12} xl={12}>
            <form className="form form--horizontal seperate_class" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">Subject Handled</span>
                <div className="form__form-group-field">
                  <Field
                    name="SubjectHandled"
                    component={renderField}
                    type="text"
                    placeholder="Subject Handled"
                  />
                </div>
              </div>
              </form>
              </Col>
          
         
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit">Submit</Button>
                <Button type="button" onClick={reset} disabled={pristine || submitting}>
                  Cancel
                </Button>
              </ButtonToolbar>
          </CardBody>
        </Card>
    );
  }
}

export default reduxForm({
  form: 'AddTeacherForm', // a unique identifier for this form
  validate,
})(withTranslation('common')(AddTeacherForm));
