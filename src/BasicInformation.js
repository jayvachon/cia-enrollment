import React from 'react'
import { reduxForm } from 'redux-form'
import { updateLead } from './services/LeadService'
import { SubmissionError } from 'redux-form'
import SSN from './items/SSN'
import PhoneNumber from './items/PhoneNumber'
import BirthDate from './items/BirthDate'
import GraduationDate from './items/GraduationDate'
import FirstName from './items/FirstName'
import LastName from './items/LastName'
import Street from './items/address/Street'
import City from './items/address/City'
import State from './items/address/State'
import EducationLevel from './items/EducationLevel'
import ZipCode from './items/address/ZipCode'

let id = ''

/*

Contains:
- Phone Number /
- Last name /
- First name /
- Date of birth /
- Address
	- street /
	- city /
	- state /
	- zip code /
	- country(?)
- Social security number /
- Highest education /
- High school graduation date /

*/

const validate = values => {
	const errors = {}
	return errors
}

const onSubmit = async (values) => {
	// console.log(values)
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
				<GraduationDate label="High School Graduation Date" lead={props.lead} />
				<EducationLevel label="Highest Education Level" lead={props.lead} />

				<Street label="Street" lead={props.lead} />
				<City label="City" lead={props.lead} />
				<State label="State" lead={props.lead} />
				<ZipCode label="Zip Code" lead={props.lead} />

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