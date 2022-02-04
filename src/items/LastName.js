import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import Item from '../Item'

const lettersOnly = value => value && !/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/.test(value)
	? "Only letters are allowed"
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

const LastName = props => {
	return (
		<Item
			type={props.lead.lastName}
			label={props.label}>
			<div>
		        <Field 
		        	name="lastName"
		        	label={props.label}
		        	component={renderField}
		        	validate={[lettersOnly]}/>
			</div>
		</Item>
	)
}

export default LastName