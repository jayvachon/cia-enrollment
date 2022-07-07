import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector, change } from 'redux-form'
// import { dispatch } from 'react-redux'
import { createNumberMask, createTextMask } from 'redux-form-input-masks'
import Item from '../Item'
import Dropdown from 'react-dropdown'
import Content from '../Content.js'
import _ from 'lodash'


const handleChange = (event) => {
    selectedCountry = event.target.value;
  };

// const courseOptions = _.map(Content.courses, t => {
// 	return {
// 		value: t.id,
// 		label: t.label,
// 	}
// })

let selectedCountry = 'US';

const phoneMask = createTextMask({
	pattern: '(999) 999-9999',
	allowEmpty: true,
});

const length = value => value && (value.length > 0 && value.length < 10)
	? "Not enough numbers!"
	: undefined

	// let value = '';
	
const renderField = ({ 	input , label, type, meta: { touched, error } }) => (

	// const renderField = ({ input, label, type, meta: { touched, error } }) => (


	<div>
		{/* <label>{label} (US only)</label> */}
		<label>{label} (With Country Code)</label><br/>
		<label>Don't know your country code, look it up here? </label><a target="_blank" href='https://countrycode.org/'>https://countrycode.org/</a>
		
		<div className="vspacer">
		{/* <Dropdown
				options={courseOptions}
				onChange={handleChange}
				placeholder="Select a course"
				value={selectedCountry} 
		/> */}
			{/* {input = '{"phone":"11231234567","countryShortName":"US"}'} */}
			{/* <input className='form-control' {...input} placeholder={label} type={type}/> */}
			{/* <input className='form-control' {...input} placeholder={label} type={type}/> */}
			<input className='form-control' {...input} placeholder={label} type={type}/>
			{touched && error && <span className="error">{error}</span>}
			{/* {...input.onChange(...input,...input+'US')} */}
			{/* {({input: this.input + 'US'})} */}
			{/* {input} = {JSON.stringify('222')}; */}
			{/* {input.value.change("phone", input.value, input.value + 'US')}  */}
			{/* {input.value} */}
			{/* {typeof(input.value)} */}
			{/* {input = input.value.concat(' US')} */}
			{/* <h1>{JSON.stringify(input)}</h1> */}
			{/* {input.change("phone", input, input + 'US')} */}

		</div>
	</div>
)

const PhoneNumber = (props) => {

	return (
		<Item
			type={props.lead.phone}
			label={props.label}>
			<div>
				<Field
					name='phone'
					label={props.label}
					component={renderField}
					validate={[length]}
					// {...phoneMask}
					 />
			</div>
		</Item>
	)
}

export default PhoneNumber
