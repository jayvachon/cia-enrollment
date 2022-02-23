import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import Item from '../../Item'

const minLength = value => value && (value.length > 0 && value.length < 5)
	? "Not enough numbers!"
	: undefined

const maxLength = value => value && (value.length > 5)
	? "Too many numbers!"
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

const ZipCode = props => {
	return (
		<Item
			type={props.lead.zip}
			label={props.label}>
			<div>
		        <Field 
		        	name="zip"
		        	label={props.label}
		        	component={renderField}
		        	validate={[minLength, maxLength]}
	        	/>
			</div>
		</Item>
	)
}

export default ZipCode