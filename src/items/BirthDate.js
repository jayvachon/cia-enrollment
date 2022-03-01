import React, { useState } from 'react'
import { Field } from 'redux-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Item from '../Item'

const renderDatePicker = ({input, label, placeholder, defaultValue, meta: {touched, error} }) => (
  <div>
  	<label>{label}</label>
  	<div className="vspacer">
			<DatePicker
				{...input}
				autoOk={true}
				selected={input.value !== '' ? new Date(input.value) : null}
				onChange={input.onChange}
				placeholder="Click to select date"
				showPopperArrow={false}
				maxDate={new Date()}
				showMonthDropdown
				showYearDropdown
				dropdownMode="select"
				/>
	      {touched && error && <span>{error}</span>}
      </div>
  </div>
);

const BirthDate = (props) => {
	const [startDate, setStartDate] = useState(new Date());
	return (
		<Item
			type={props.lead.dateOfBirth}
			label={props.label}>
			<Field
				name="dateOfBirth"
				label={props.label}
				component={renderDatePicker} />
		</Item>
	)
}

export default BirthDate
