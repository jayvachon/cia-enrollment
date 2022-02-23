import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import Item from '../../Item'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
	<div>
		<label>{label}</label>
		<div className="vspacer">
			<input className='form-control' {...input} placeholder={label} type={type}/>
			{touched && error && <span>{error}</span>}
		</div>
	</div>
)

const Street = props => {
	return (
		<Item
			type={props.lead.street}
			label={props.label}>
			<div>
		        <Field 
		        	name="street"
		        	label={props.label}
		        	component={renderField}/>
			</div>
		</Item>
	)
}

export default Street