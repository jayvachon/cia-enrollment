import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import Item from '../Item'
import MyDropzone from '../MyDropzone'
import Dropzone from 'react-dropzone-uploader'
import UploadField from './UploadField'
import 'react-dropzone-uploader/dist/styles.css'


class Upload extends Component {

	constructor(props) {
		super(props)
		this.getUploadParams = this.getUploadParams.bind(this)
		this.handleChangeStatus = this.handleChangeStatus.bind(this)
	}

	getUploadParams({ file, meta }) {
		const body = new FormData()
		body.append('file', file)
		body.append('leadId', this.props.lead.id)
		body.append('documentType', this.props.name)
		return { url: 'http://localhost:8080/api/upload', body }
	}

	handleChangeStatus({ meta }, status) {
		if (status === 'removed') {
			this.props.lead[this.props.name] = 'x'
			this.forceUpdate()
		}
	}

	handleSubmit(files, allFiles) {
		// console.log('got it')
		// console.log(files.map(f => f.meta))
		allFiles.forEach(f => f.remove())
	}

	render() {

		const {type, label, name} = this.props

		return (
			<Item
				type={this.props.lead[this.props.name]}
				label={this.props.label}>
				<UploadField
					name={this.props.name}
					label={this.props.label}
					download={this.props.download}
					moreInfo={this.props.moreInfo}
					getUploadParams={this.getUploadParams}
					handleChangeStatus={this.handleChangeStatus}
					handleSubmit={this.handleSubmit}
					/>
			</Item>
		)
	}
}

export default Upload