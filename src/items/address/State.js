import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import Item from '../../Item'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const states = [
	'AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE',
	'FL', 'FM', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS',
	'KY', 'LA', 'MA', 'MD', 'ME', 'MH', 'MI', 'MN', 'MO', 'MP',
	'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 
	'OH', 'OK', 'OR', 'PA', 'PR', 'PW', 'RI', 'SC', 'SD', 'TN',
	'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'
]

const State = props => {
	return (
		<Item
			type={props.lead.state}
			label={props.label}>
			<div>
				<label>{props.label}</label>
				<div className="vspacer">
					<Field
						className="select-dropdown"
			        	name="state"
			        	label={props.label}
			        	component="select">
			        	<option value="">Select state</option>
			        	{states.map(state => (
				        	<option value={state} key={state}>{state}</option>
		        		))}
					</Field>
				</div>
			</div>
		</Item>
	)
}

export default State