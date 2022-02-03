import React from 'react'
import SSN from './items/SSN'
import PhoneNumber from './items/PhoneNumber'
import BirthDate from './items/BirthDate'
import { reduxForm } from 'redux-form'

// <PhoneNumber lead={props.lead} onSubmitSuccess={this.setleadData}/>

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

const BasicInformation = (props) => {
	return (
		<form>
			<SSN lead={props.lead} />
			<PhoneNumber lead={props.lead} />
			<BirthDate />
		</form>
	)
}

export default reduxForm({
	form: 'basic-info'
})(BasicInformation)