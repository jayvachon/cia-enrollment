import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { createNumberMask, createTextMask } from 'redux-form-input-masks'
import Item from '../Item'

const phoneMask = createTextMask({
  pattern: '(999) 999-9999',
  allowEmpty: true,
});

const length = value => value && (value.length > 0 && value.length < 10)
	? "Not enough numbers"
	: undefined

const renderField = ({ input, label, type, meta: { touched, error } }) => (
	<div>
		<label>{label}</label>
		<div>
			<input className='form-control' {...input} placeholder={label} type={type}/>
			{touched && error && <span>{error}</span>}
		</div>
	</div>
)

const PhoneNumber = (props) => {

	return (
		<Item
			type={props.lead.phone}
			label={props.label}>
			<div>
				<Field 
        	name='phone'
        	label={props.label}
        	component={renderField}
        	validate={[length]}
          {...phoneMask} />
			</div>
		</Item>
	)
}

export default PhoneNumber
