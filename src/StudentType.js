import React, { Component } from 'react'
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

const veteranDetails = _.find(Content.studentTypes, t => t.id === 'veteran');
const internationalDetails = _.find(Content.studentTypes, t => t.id === 'international');

const details = {
	civilian: [ 
		{ value: 'aid', label: 'Financial Aid' },
		{ value: 'pocket', label: 'Out of Pocket' },
	],
	veteran: _.map(veteranDetails.types, d => {
		return {
			value: d.id,
			label: d.label,
		};
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
  	this.props.parentCallback({
  		type: this.state.selected,
  		subtype: option,
  	});
  }

  render () {
    const defaultOption = this.state.selected
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label
    const selected = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.value
    
    const defaultDetailOption = this.state.detailSelected
    const detail = typeof selected === 'string' ? this.state.detailSelected : this.state.detailSelected.label

    return (
      <section>
        <h3>I am an...</h3>
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        <div className='result'>
          You selected
          <strong> {placeHolderValue} </strong>

        	{selected !== '' &&
	          	<Dropdown options={details[selected]} onChange={this._onSelectDetail} value={defaultDetailOption} placeholder="Select an option"/>
	      	}
	      	
        </div>
      </section>

    )
  }
}

export default StudentType