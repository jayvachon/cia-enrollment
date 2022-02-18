import React from 'react'
import { reduxForm } from 'redux-form'
import { updateLead } from './services/LeadService'
import { SubmissionError } from 'redux-form'
import Upload from './items/Upload'

let id = ''

const validate = values => {
	const errors = {}
	return errors
}

const onSubmit = async (values) => {
	console.log(values)
	return await updateLead(id, values)
}

const handleSubmit = values => {
	console.log(values)
}

const Documents = props => {

	const {error, errors, handleSubmit, reset, pristine, submitting } = props

	id = props.lead.id

	return (
		<section>
			<h2>Documents</h2>
			<form onSubmit={handleSubmit}>
				<Upload lead={props.lead} label="Official ID" name="identification" />
				<Upload lead={props.lead} label="Diploma or Transcript" name="diploma" />
				{/*<button type="submit" disabled={submitting}>Submit</button>*/}
			</form>
		</section>
	)
}

export default reduxForm({
	form: 'documents',
	// validate,
	onSubmit,
})(Documents)