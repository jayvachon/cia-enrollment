import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import Item from '../Item'
import MyDropzone from '../MyDropzone'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

const getUploadParams = () => {
	// return { url: 'https://httpbin.org/post' }
	return { url: 'http://localhost:8080/api/upload'}
}

const handleChangeStatus = ({ meta }, status) => {
	// console.log(status, meta)
}

const handleSubmit = (files, allFiles) => {
	// console.log('got it')
	// console.log(files.map(f => f.meta))
	allFiles.forEach(f => f.remove())
}

const renderField = ({ input, label, type, meta: {touched, error } }) => {
	return (
		<div>
			<label>{label}</label>
			<Dropzone
			     getUploadParams={getUploadParams}
			     onChangeStatus={handleChangeStatus}
			     onSubmit={handleSubmit}
			     // styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
			     accept="image/*,.pdf"
			     maxFiles={1}
			   />
		</div>
	)
}

const Upload = props => {
	return (
		<Item
			type={props.type}
			label={props.label}>
			<Field
				name={props.name}
				label={props.label}
				component={renderField} />
		</Item>
	)
}

export default Upload