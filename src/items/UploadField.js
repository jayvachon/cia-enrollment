import React from 'react'
import { Field } from 'redux-form'
import Dropzone from 'react-dropzone-uploader'
import useCollapse from 'react-collapsed'

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

				<Dropzone
					inputContent="Drag File or Click to Browse"
					getUploadParams={getUploadParams}
					onChangeStatus={handleChangeStatus}
					onSubmit={handleSubmit}
					styles={{ dropzone: { minHeight: 60, maxHeight: 250 } }}
					// accept=".pdf,.doc,.docx,.rtf,.txt"
					accept="image/*,.pdf,.doc,.docx,.rtf,.txt"
					// "dropzone.invalid.error": "Invalid content",
					
				   />
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