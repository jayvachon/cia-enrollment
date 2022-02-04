import React from 'react'
import SSN from './items/SSN'
import PhoneNumber from './items/PhoneNumber'
import BirthDate from './items/BirthDate'
import FirstName from './items/FirstName'
import LastName from './items/LastName'
import { reduxForm } from 'redux-form'
import { updateLead } from './services/LeadService'
import { SubmissionError } from 'redux-form'

// <PhoneNumber lead={props.lead} onSubmitSuccess={this.setleadData}/>

let id = ''

/*

Contains:
- Phone Number
- Last name
- First name
- Date of birth
- Address
	- street
	- city
	- state
	- zip code
	- country(?)
- Social security number
- Highest education
- High school graduation date

*/

const validate = values => {
	const errors = {}
	return errors
}

const onSubmit = async (values) => {
	return await updateLead(id, values)
}

const BasicInformation = props => {

	const {error, errors, handleSubmit, reset, pristine, submitting } = props

	id = props.lead.id

	return (
		<section>
			<h2>Basic information</h2>
			<form onSubmit={handleSubmit}>
				<FirstName label="First Name" lead={props.lead} />
				<LastName label="Last Name" lead={props.lead} />
				<SSN label="Social Security Number" lead={props.lead} />
				<PhoneNumber label="Phone Number" lead={props.lead} />
				<BirthDate label="Date of Birth" lead={props.lead} />
				<button type="submit" disabled={pristine || submitting}>Submit</button>
			</form>
		</section>
	)
}

export default reduxForm({
	form: 'basic-info',
	validate,
	onSubmit,
})(BasicInformation)