import React from 'react'
import './steps.css'

const step23enabled = (lead) => {
	const hasCourse = lead.course && lead.course !== "Not Specified"
	const hasType = lead.type && lead.type !== "Not Specified"
	let hasFinancialAid = false
	if (hasType && lead.type === "International") {
		hasFinancialAid = true
	}
	if (hasType && lead.type == "American Civilian" && lead.financialAid) {
		hasFinancialAid = true
	}
	if (hasType && lead.type == "American Veteran" && lead.financialAid !== "None") {
		hasFinancialAid = true
	}
	return !(hasCourse && hasType && hasFinancialAid)
}

const Steps = props => {
	return (
		<div className="nav">
			<button
				className="step"
				onClick={() => props.onUpdateStep(1)}
				value={1}
				id={props.step === 1 ? "selected" : "unselected"}
				name="step1">1. Student Type
			</button>
			<button
				className="step"
				onClick={() => props.onUpdateStep(2)}
				value={2}
				id={props.step === 2 ? "selected" : "unselected"}
				disabled={step23enabled(props.lead)}
				name="step2">2. Basic Information
			</button>
			<button
				className="step"
				onClick={() => props.onUpdateStep(3)}
				value={3}
				id={props.step === 3 ? "selected" : "unselected"}
				disabled={step23enabled(props.lead)}
				name="step3">3. Required Documents
			</button>
		</div>
	)
}

export default Steps