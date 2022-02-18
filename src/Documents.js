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
			<h2>Documents</h2>
			<form onSubmit={handleSubmit}>

				{requiredDocuments.map((doc, i) => 
					<Upload lead={props.lead} label={Content.documents[doc].label} name={doc} />)
				}

				{/*<Upload lead={props.lead} label="Essay" name="essay" />
				{requiredDocuments.includes('identification') &&
					<Upload lead={props.lead} label="Official ID" name="identification" />
				}
				{requiredDocuments.includes('passport') &&
					<Upload lead={props.lead} label="Passport" name="identification" />
				}
				<Upload lead={props.lead} label="Diploma or Transcript" name="diploma" />
				{requiredDocuments.includes('dd214') &&
					<Upload lead={props.lead} label="DD-214" name="dd214" />
				}
				{requiredDocuments.includes('coe') &&
					<Upload lead={props.lead} label="Certificate of Eligibility" name="coe" />
				}
				{requiredDocuments.includes('proof32k') &&
					<Upload lead={props.lead} label="Proof of Access to $32,000" name="proof32k" />
				}
				{requiredDocuments.includes('affidavit') &&
					<Upload lead={props.lead} label="Affidavit of Support" name="affidavit" />
				}*/}
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