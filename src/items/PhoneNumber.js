import React, { Component } from 'react'
import Example from '../example'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { createNumberMask, createTextMask } from 'redux-form-input-masks'
import { updateLead } from '../services/LeadService'

let state = {};

const phoneMask = createTextMask({
  pattern: '(999) 999-9999',
  allowEmpty: true,
});

const validate = (props, value) => {
	if (value.length === 10) {
		return updateLead(state.lead.id, 'phone', value)
			.then(response => response.json())
			.then(res => {
				if (res.success === true) {
					state.lead.phone = 'x'
					// onSubmitSuccess()
				}
			})
	} else {
		console.log('ew')
	}
}

const PhoneNumber = (props) => {

	state.lead = props.lead;

	return (
		<div>
		{!props.lead.phone &&
	    	<div>
		        <label>Phone Number</label>
		        <Field 
		        	name='phone'
		        	component='input'
		        	onBlur={validate}
		          {...phoneMask} />
		    </div>
		}
		{props.lead.phone &&
			<p>Phone Number ✔</p>
		}
		</div>
    );
}

export default reduxForm({
	form: 'phone',
})(PhoneNumber)