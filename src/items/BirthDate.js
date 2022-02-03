import React from 'react'
import DatePicker from 'react-datepicker'
// import { reduxForm } from 'redux-form'
import 'react-datepicker/dist/react-datepicker.css'

const BirthDate = (props) => {
	return (
		<DatePicker />
	)
}

export default BirthDate

/*export default reduxForm({
	form: 'birthdate'
})(BirthDate)*/