import React from 'react'
import { Field, SubmissionError, reduxForm } from 'redux-form'
import Example from '../example'
import { findUser } from '../services/LeadService'

const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  }
  return errors
}

/*async function findUser(email) {
    try {
        const response = await fetch(`http://localhost:8080/api/lead?email=${email}`,
        	{
        		crossDomain: true,
        		headers: {
    		      'Content-Type': 'application/json',
    		    }
        	});
        return await response.json();
    } catch (error) {
	    	console.log(error);
        return [];
    }
}*/

const onSubmit = (values) => {
	return findUser(values.email)
		.then((res) => {
			console.log('got it')
			console.log(res)
			return res;
		})
		.catch(err => {
			throw new SubmissionError({ email: 'Wrong email', _error: 'Login failed' })
		})
}

const renderField = ({ input, label, type, meta: {touched, error } }) => {
	return (
		<div>
			<label>{label}</label>
			<div>
				<input className="form-control" {...input} placeholder={label} type={type}/>
				{touched && error && <span>{error}</span>}
			</div>
		</div>
	)
}

const LoginForm = (props) => {
	
	const {error, errors, handleSubmit, reset, pristine, submitting} = props;
	
	return (
		<Example title="Login form with redux">
			<form onSubmit={handleSubmit}>
				<Field name="email" component={renderField} type="email" label="Email"/>
				{error && <strong>{error}</strong>}
				<div style={{marginTop: 20}}>
					<button type="submit" disabled={pristine || submitting}>Submit</button>
				</div>
			</form>
		</Example>
	)
}

export default reduxForm({
	form: 'simple',
	validate,
	onSubmit,
})(LoginForm)