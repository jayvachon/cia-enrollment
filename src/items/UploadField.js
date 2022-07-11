import React from 'react'
import { Field } from 'redux-form'
import Dropzone from 'react-dropzone-uploader'
import useCollapse from 'react-collapsed'
import { ToastContainer, toast } from 'react-toastify'

const CustomContent = () => {
	return (
		<div className="dropzone-text">
			<p className="instruction">Drop a File</p>
			<p className="accepted-files">Accepted file types: .png, .jpg, .jpeg, .pdf, .doc, .docx, .rtf, .txt</p>
		</div>
		)
}

const renderField = ({ toggleProps, collapseProps, getUploadParams, handleChangeStatus, handleSubmit, download, moreInfo, input, label, type, meta: {touched, error } }) => {
	return (
		<div>

			{moreInfo !== '' &&
				<div className="collapsible">
					<label {...toggleProps()}>{label} <span><button type="button" className="toggle-info">?</button></span></label>
				</div>
			}

			{moreInfo === '' &&
				<label>{label}</label>
			}

			{download &&
				<p><a href={require(`../assets/${download}`)} download={download}>Download form</a></p>
			}

			<div className="vspacer">

				{moreInfo !== '' &&
					<div {...collapseProps()}>
			            <div className="more-info">
							{moreInfo}
			            </div>
			        </div>
				}

				<React.Fragment>
				  <ToastContainer position="bottom-right" />
				  <Dropzone
				    getUploadParams={getUploadParams}
				    onChangeStatus={handleChangeStatus}
				    accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,.rtf,.txt"
				    maxFiles={1}
				    multiple={false}
				    canCancel={false}
				    inputContent={CustomContent}
				    styles={{
				      dropzone: { width: 400, height: 200 },
				      dropzoneActive: { borderColor: 'blue' },
				      dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
				    }}
				  />
				</React.Fragment>
		   </div>
		</div>
	)
}


const UploadField = (props) => {

	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
		defaultExpanded: true,
	})

	return (
		<Field
			name={props.name}
			label={props.label}
			toggleProps={getToggleProps}
			collapseProps={getCollapseProps}
			getUploadParams={props.getUploadParams}
			handleChangeStatus={props.handleChangeStatus}
			handleSubmit={props.handleSubmit}
			download={props.download}
			moreInfo={props.moreInfo}
			component={renderField} />
	)
}

export default UploadField