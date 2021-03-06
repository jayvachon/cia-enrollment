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
	alert("Thank you. We have received your submission.");
	console.log(values)
	return await updateLead(id, values)
}


const Documents = props => {

	const {error, errors, handleSubmit, reset, pristine, submitting } = props

	id = props.lead.id

	const studentType = _.find(Content.studentTypes, t => t.mondayLabel === props.lead.type)
	let requiredDocuments = studentType.id === 'international'
		? _.find(studentType.types, t => t.mondayLabel === props.lead.visa).requiredDocuments 
		: _.find(studentType.types, t => t.mondayLabel === props.lead.financialAid).requiredDocuments

	// Special case: essay is not required for media programs
	if (props.lead.course !== 'Web Development Immersive Certificate' && props.lead.course !== 'Associate of Science in Computer Science and Web Architecture') {
		requiredDocuments = requiredDocuments.filter(e => e !== 'essay')
	}

	return (
		<section>
			<div className="instructions">
				<p>Lastly, please submit the following required documents.</p>
				<p>For your security, your documents are stored on an encrypted server and will not be displayed on this website.</p>
			</div>
			<form onSubmit={handleSubmit}>

				{requiredDocuments.map((doc, i) => 
					<Upload
						lead={props.lead}
						label={Content.documents[doc].label}
						key={doc}
						name={doc}
						moreInfo={Content.documents[doc].message}
						download={Content.documents[doc].download} />)
				}
				<button className="submit" type="submit">Submit</button>
			</form>
		</section>
	)
}

export default reduxForm({
	form: 'documents',
	onSubmit,
})(Documents)