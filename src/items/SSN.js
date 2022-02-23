import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { createNumberMask, createTextMask } from 'redux-form-input-masks'
import Item from '../Item'
import useCollapse from 'react-collapsed'

const ssnMask = createTextMask({
	pattern: '999-99-9999',
	allowEmpty: true,
});

const length = value => value && (value.length > 0 && value.length < 9)
	? "Not enough numbers!"
	: undefined
	
const renderField = ({ toggleProps, collapseProps, input, label, type, meta: { touched, error } }) => (
	<div>
		<div className="collapsible">
			<label {...toggleProps()}>{label} <span><button className="toggle-info">?</button></span></label>
		</div>
		<div className="vspacer">
			<div {...collapseProps()}>
	            <div className="more-info">
	                We require your social security number because it is necessary to access your financial aid or veteran's benefits. Your social security number will never be shared publicly.
	            </div>
	        </div>
			<input className='form-control' {...input} placeholder={label} type={type}/>
			{touched && error && <span className="error">{error}</span>}
		</div>
	</div>
)

const SSN = (props) => {

	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

	return (
		<Item
			type={props.lead.socialSecurityNumber}
			label={props.label}>
			<div>
		        <Field 
		        	name='socialSecurityNumber'
		        	label={props.label}
		        	toggleProps={getToggleProps}
		        	collapseProps={getCollapseProps}
		        	component={renderField}
		        	validate={[length]}
					{...ssnMask} />
			</div>
		</Item>
    )
}

export default SSN