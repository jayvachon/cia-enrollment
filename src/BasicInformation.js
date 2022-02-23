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
		
			<div className="instructions">
				<p>Next, please fill out your personal information. We use this information to set up your online profile with the school, help you access your benefits, and ship your laptop.</p>
				<p>For your security, your information is stored on an encrypted server and will not be displayed on this website.</p>
			</div>

			<form onSubmit={handleSubmit}>
				<FirstName label="First Name" lead={props.lead} />
				<LastName label="Last Name" lead={props.lead} />
				{props.lead.type !== 'international'&&
					<SSN label="Social Security Number" lead={props.lead} />
				}
				<PhoneNumber label="Phone Number" lead={props.lead} />
				<BirthDate label="Date of Birth" lead={props.lead} />
				<GraduationDate label="High School Graduation Date" lead={props.lead} />
				<EducationLevel label="Highest Education Level" lead={props.lead} />

				<div className="content">
					<h3>Mailing Address</h3>
					<p>For your address, please enter the mailing address where you would like your laptop to be shipped. This must be a US address. If you do not have a US address, or if you are planning to move in the near future, you can leave this blank and return to it later.</p>
				</div>

				<Street label="Street" lead={props.lead} />
				<City label="City" lead={props.lead} />
				<State label="State" lead={props.lead} />
				<ZipCode label="Zip Code" lead={props.lead} />

				<button className="submit" type="submit" disabled={pristine || submitting}>Submit</button>
			</form>
		</section>
	)
}

export default reduxForm({
	form: 'basic-info',
	validate,
	onSubmit,
})(BasicInformation)