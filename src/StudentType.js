import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { updateLead } from './services/LeadService'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import _ from 'lodash'
import Content from './Content.js'

const options = _.map(Content.studentTypes, t => {
	return {
		value: t.id,
		label: t.label,
		mondayLabel: t.mondayLabel,
	}
})

const courseOptions = _.map(Content.courses, t => {
	return {
		value: t.id,
		label: t.label,
	}
})

const civilianDetails = _.find(Content.studentTypes, t => t.id === 'civilian')
const veteranDetails = _.find(Content.studentTypes, t => t.id === 'veteran')
const internationalDetails = _.find(Content.studentTypes, t => t.id === 'international')

const details = {
	civilian: _.map(civilianDetails.types, d => {
		return {
			value: d.id,
			label: d.label,
			mondayLabel: d.mondayLabel,
		}
	}),
	veteran: _.map(veteranDetails.types, d => {
		return {
			value: d.id,
			label: d.label,
			mondayLabel: d.mondayLabel,
		}
	}),
	international: _.map(internationalDetails.types, d => {
		return {
			value: d.id,
			label: d.label,
			mondayLabel: d.mondayLabel,
		}
	}),
};

class StudentType extends Component {

	constructor (props) {
		super(props)

		let courseSelected = _.find(courseOptions, courseOption => courseOption.label === this.props.lead.course)
		
		let selected = ''
		if (this.props.lead.type) {
			 selected = _.find(options, option => option.mondayLabel === this.props.lead.type)
		}

		let detailSelected = ''
		if (selected && this.props.lead.financialAid) {
			detailSelected = _.find(details[selected.value], detailOption => detailOption.mondayLabel === this.props.lead.financialAid)
		}

		this.state = {
			selected,
			detailSelected,
			courseSelected,
		}
		this._onSelect = this._onSelect.bind(this)
		this._onSelectDetail = this._onSelectDetail.bind(this)
		this._onSelectCourse = this._onSelectCourse.bind(this)
	}

	_onSelect (option) {
		this.setState({
			selected: option,
			detailSelected: '',
		})
	}

	_onSelectDetail (option) {
		this.setState({detailSelected: option})
	}

	_onSelectCourse (option) {
		this.setState({courseSelected: option})
	}

	renderField ({ input, label, type, meta: {touched, error } }) {
		return (
			<Dropdown
				options={options}
				onChange={input.onChange}
				value={input.value}
				placeholder="Select an option" />
		)
	}

	async onSubmit(v) {
	    const type = _.find(Content.studentTypes, t => t.id === this.state.selected.value)
	    const subtype = _.find(type.types, t => t.id === this.state.detailSelected.value)
	    const values = {
	    	course: this.state.courseSelected.label,
	    	type: type.mondayLabel,
	    	financialAid: type.id === 'international' ? 'None' : subtype.mondayLabel,
	    }
	    let response = await updateLead(this.props.lead.id, values)
	    // console.log(response)
	    this.props.onUpdateLead(response)
	    return response
	}

	render () {

		const {error, errors, handleSubmit, reset, pristine, submitting} = this.props

		const defaultCourse = this.state.courseSelected
		const defaultType = this.state.selected
		const defaultDetailOption = this.state.detailSelected

		let detailOptions = ''
		if (this.state.selected) {
			detailOptions = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.value
		}
		console.log(detailOptions)

		return (

			<section>
				{/*<h2>Student Type</h2>*/}
				<p>To begin, please let us know which course you would like to take and whether you are an American civilian, veteran, or an international student. If you don't know the answer to any of these questions, choose the one that fits best. You can always change your answer later.</p>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

					<p>Which course would you like to enroll in?</p>
					<Dropdown
						options={courseOptions}
						onChange={this._onSelectCourse}
						placeholder="Select a course"
						value={defaultCourse} />

					<p>Which type of student are you?</p>
					
					<Dropdown
						options={options}
						onChange={this._onSelect}
						value={defaultType}
						placeholder="Select an option" />

					<div className='result'>

						{detailOptions === 'veteran' &&
							<p>Which type of benefits will you be using?</p>
						}
						{detailOptions === 'civilian' &&
							<p>How do you plan to pay for your tuition?</p>
						}
						{detailOptions === 'international' &&
							<p>What is your visa status?</p>
						}
						{this.state.selected &&
							<Dropdown
								options={details[detailOptions]}
								onChange={this._onSelectDetail}
								value={defaultDetailOption}
								placeholder="Select an option"/>
						}

					</div>
					<br />
					<button
						type="submit"
						disabled={!this.state.detailSelected || !this.state.courseSelected}>
						Submit
					</button>
				</form>
			</section>

		)
	}
}

export default reduxForm({
	form: 'student-type',
	onSubmit: StudentType.onSubmit,
})(StudentType)