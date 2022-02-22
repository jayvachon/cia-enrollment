import React from 'react'
import { reduxForm } from 'redux-form'
import { updateLead } from './services/LeadService'
import { SubmissionError } from 'redux-form'
import Upload from './items/Upload'
import Content from './Content'
import _ from 'lodash'

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

	const studentType = _.find(Content.studentTypes, t => t.mondayLabel === props.lead.type)
	const requiredDocuments = _.find(studentType.types, t => t.mondayLabel === props.lead.financialAid).requiredDocuments

	return (
		<section>
			{/*<h2>Required Documents</h2>*/}
			<p>Lastly, please submit the following required documents. For your security, your documents are stored on an encrpyted server and will not be displayed on this website.</p>
			<form onSubmit={handleSubmit}>

				{requiredDocuments.map((doc, i) => 
					<Upload lead={props.lead} label={Content.documents[doc].label} name={doc} />)
				}
			</form>
		</section>
	)
}

export default reduxForm({
	form: 'documents',
	// validate,
	onSubmit,
})(Documents)