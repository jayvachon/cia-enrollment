import React from 'react'
import { Field, SubmissionError, reduxForm } from 'redux-form'
import Example from '../example'
import { findUser } from '../services/LeadService'
import './login.css'

const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  }
  return errors
}

const onSubmit = (values) => {
	return findUser(values.email)
		.then((res) => {
			return res;
		})
		.catch(err => {
			throw new SubmissionError({ email: 'Wrong email', _error: 'Login failed' })
		})
}

const renderField = ({ input, label, type, meta: {touched, error } }) => {
	return (
		<div>
			{/*<label>{label}</label>*/}
			<div>
				<input className="form-control" {...input} placeholder={label} type={type}/>
				{/*{touched && error && <span>{error}</span>}*/}
			</div>
		</div>
	)
}

const LoginForm = (props) => {
	
	const {error, errors, handleSubmit, reset, pristine, submitting} = props;
	
	return (
		<div>
			{/*<p>Your personal information will not be shown on this page, so no password is necessary</p>*/}
			<h3>First time here?</h3>
			<p>Enter the email address you wish to use throughout the full enrollment process.</p>
			<h3>Returning to continue your enrollment?</h3>
			<p>Enter the email address you submitted when you created your account.</p>
			<form onSubmit={handleSubmit}>
				<div className="vspacer">
					<Field name="email" component={renderField} type="email" label="Email"/>
				</div>
				{error && <strong>{error}</strong>}
				<div style={{marginTop: 20}}>
					<button className="submit" type="submit" disabled={pristine || submitting}>Submit</button>
				</div>
			</form>
		</div>
	)
}

export default reduxForm({
	form: 'simple',
	validate,
	onSubmit,
})(LoginForm)