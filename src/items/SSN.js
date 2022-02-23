import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { createNumberMask, createTextMask } from 'redux-form-input-masks'
import Item from '../Item'

const ssnMask = createTextMask({
	pattern: '999-99-9999',
	allowEmpty: true,
});

const length = value => value && (value.length > 0 && value.length < 9)
	? "Not enough numbers"
	: undefined

const renderField = ({ input, label, type, meta: { touched, error } }) => (
	<div>
		<label>{label}</label>
		<div className="vspacer">
			<input className='form-control' {...input} placeholder={label} type={type}/>
			{touched && error && <span>{error}</span>}
		</div>
	</div>
)

const SSN = (props) => {

	return (
		<Item
			type={props.lead.socialSecurityNumber}
			label={props.label}>
			<div>
		        <Field 
		        	name='socialSecurityNumber'
		        	label={props.label}
		        	component={renderField}
		        	validate={[length]}
					{...ssnMask} />
			</div>
		</Item>
    )
}

export default SSN