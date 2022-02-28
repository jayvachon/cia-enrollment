import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import Item from '../../Item'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const states = [
	'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC',
	'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
	'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO',
	'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP',
	'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN',
	'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
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