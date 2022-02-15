import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
// import Dropdown from 'react-dropdown';
import Item from '../Item'

const educationLevels = [
	{ value: 'highschool', label: 'High School Diploma' },
	{ value: 'somecollege', label: 'Some College' },
	{ value: 'associate', label: 'Associate Degree' },
	{ value: 'bachelor', label: 'Bachelor Degree' },
	{ value: 'master', label: 'Master Degree' },
	{ value: 'doctoral', label: 'Doctoral Degree' },
]

const EducationLevel = props => {
	return (
		<Item
			type={props.lead.educationLevel}
			label={props.label}>
			<div>
				<label>{props.label}</label>
				<br />
		        <Field 
		        	name="educationLevel"
		        	label={props.label}
		        	component="select">
		        	<option value="">Select an education level...</option>
		        	{educationLevels.map(level => (
			        	<option value={level.label} key={level.value}>{level.label}</option>
	        		))}
			    </Field>
			</div>
		</Item>
	)
}

export default EducationLevel
