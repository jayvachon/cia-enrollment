import React from 'react'

const Steps = props => {
	return (
		<div>
			<button onClick={() => props.onUpdateStep(1)} value={1} name="step1">Student Type</button>
			<button onClick={() => props.onUpdateStep(2)} value={2} name="step2">Basic Information</button>
			<button onClick={() => props.onUpdateStep(3)} value={3} name="step3">Required Documents</button>
		</div>
	)
}

export default Steps