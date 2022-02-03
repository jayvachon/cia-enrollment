import React, { Component } from 'react'
import Example from '../example'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { createNumberMask, createTextMask } from 'redux-form-input-masks'
import { updateLead } from '../services/LeadService'
import Item from '../Item'

let state = {};

const ssnMask = createTextMask({
	pattern: '999-99-9999',
	allowEmpty: true,
});

const submit = (props, value) => {
	if (value.length === 9) {
		return updateLead(state.lead.id, 'socialSecurityNumber', value);
	} else {
		return "Missing numbers"
	}
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
	<div>
		<label>{label}</label>
		<div>
			<input className='form-control' {...input} placeholder={label} type={type}/>
			{touched && error && <span>{error}</span>}
		</div>
	</div>
)

const SSN = (props) => {

	state.lead = props.lead;

	return (
		<Item
			type={props.lead.socialSecurityNumber}
			name="Social Security Number">
			<div>
		        <Field 
		        	name='ssn'
		        	label="Social Security Number"
		        	component={renderField}
		        	onBlur={submit}
		          {...ssnMask} />
			</div>
		</Item>
    )
}

export default SSN