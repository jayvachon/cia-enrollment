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

		const documentType = this.props.name === "passport" ? "identification" : this.props.name

		const body = new FormData()
		body.append('file', file)
		body.append('leadId', this.props.lead.id)
		body.append('documentType', documentType)
		return { url: `${process.env.REACT_APP_API_ROOT}/upload`, body }
	}

	handleChangeStatus({ meta }, status) {
		// console.log(status)
		// console.log(meta)
		if (status === 'removed') {
			const documentType = this.props.name === 'passport' ? 'identification' : this.props.name
			this.props.lead[documentType] = 'x'
			this.forceUpdate()
		}
	}

	handleSubmit(files, allFiles) {
		// console.log('got it')
		// console.log(files.map(f => f.meta))
		alert("Files Uploaded Successfully : " + JSON.stringify(allFiles.map(x => x.meta.name)));
		allFiles.forEach(f => f.remove())
	}

	render() {

		const {type, label, name} = this.props
		const documentType = this.props.name === "passport" ? this.props.lead["identification"] : this.props.lead[this.props.name]

		return (
			<Item
				type={documentType}
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