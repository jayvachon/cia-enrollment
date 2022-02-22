import React from 'react'
import './steps.css'

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
				name="step2">2. Basic Information
			</button>
			<button
				className="step"
				onClick={() => props.onUpdateStep(3)}
				value={3}
				id={props.step === 3 ? "selected" : "unselected"}
				disabled={!props.lead.type}
				name="step3">3. Required Documents
			</button>
		</div>
	)
}

export default Steps