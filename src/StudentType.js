import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { updateLead } from './services/LeadService'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import _ from 'lodash';
import Content from './Content.js';

const options = _.map(Content.studentTypes, t => {
	return {
		value: t.id,
		label: t.label,
	};
});

const civilianDetails = _.find(Content.studentTypes, t => t.id === 'civilian');
const veteranDetails = _.find(Content.studentTypes, t => t.id === 'veteran');
const internationalDetails = _.find(Content.studentTypes, t => t.id === 'international');

const details = {
	/*civilian: [ 
		{ value: 'aid', label: 'Financial Aid' },
		{ value: 'pocket', label: 'Out of Pocket' },
	],*/
	civilian: _.map(civilianDetails.types, d => {
		return {
			value: d.id,
			label: d.label,
		}
	}),
	veteran: _.map(veteranDetails.types, d => {
		return {
			value: d.id,
			label: d.label,
		}
	}),
	international: _.map(internationalDetails.types, d => {
		return {
			value: d.id,
			label: d.label,
		}
	}),
};

class StudentType extends Component {

	constructor (props) {
		super(props)
		this.state = {
			selected: '',
			detailSelected: ''
		}
		this._onSelect = this._onSelect.bind(this)
		this._onSelectDetail = this._onSelectDetail.bind(this)
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
	    	type: type.mondayLabel,
	    	financialAid: type.id === 'international' ? 'None' : subtype.mondayLabel,
	    }
	    let response = await updateLead(this.props.lead.id, values)
	    // console.log(response)
	    return response
	}

	render () {

		const {error, errors, handleSubmit, reset, pristine, submitting} = this.props

		const defaultOption = this.state.selected
		const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label
		const selected = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.value

		const defaultDetailOption = this.state.detailSelected
		const detail = typeof selected === 'string' ? this.state.detailSelected : this.state.detailSelected.label

		return (

			<section>
				<h2>Student Type</h2>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<h3>I am an...</h3>
					<Field name="type" component={this.renderField} onChange={this._onSelect} value={defaultOption} />

					<div className='result'>
						You selected
						<strong> {placeHolderValue} </strong>

						{selected !== '' &&
							<Dropdown options={details[selected]} onChange={this._onSelectDetail} value={defaultDetailOption} placeholder="Select an option"/>
						}

					</div>
					<button
						type="submit"
						disabled={!this.state.detailSelected}>
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