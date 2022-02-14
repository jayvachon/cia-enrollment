import React from 'react'
import { reduxForm } from 'redux-form'
import { updateLead } from './services/LeadService'
import { SubmissionError } from 'redux-form'

let id = ''

const validate = values => {
	const errors = {}
	return errors
}

const onSubmit = async (values) => {
	// console.log(values)
	return await updateLead(id, values)
}

const Documents = props => {

	const {error, errors, handleSubmit, reset, pristine, submitting } = props

	id = props.lead.id

	return (
		<section>
			<h2>Documents</h2>
			<form onSubmit={handleSubmit}>

				<button type="submit" disabled={pristine || submitting}>Submit</button>
			</form>
		</section>
	)
}

export default reduxForm({
	form: 'documents',
	validate,
	onSubmit,
})(Documents)