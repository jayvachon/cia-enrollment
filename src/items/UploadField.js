import React from 'react'
import { Field } from 'redux-form'
import Dropzone from 'react-dropzone-uploader'
import useCollapse from 'react-collapsed'

const renderField = ({ toggleProps, collapseProps, getUploadParams, handleChangeStatus, handleSubmit, moreInfo, input, label, type, meta: {touched, error } }) => {
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

			<div className="vspacer">

				{moreInfo !== '' &&
					<div {...collapseProps()}>
			            <div className="more-info">
							{moreInfo}
			            </div>
			        </div>
				}

				<Dropzone
					getUploadParams={getUploadParams}
					onChangeStatus={handleChangeStatus}
					onSubmit={handleSubmit}
					// styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
					accept="image/*,.pdf"
					maxFiles={1}
				   />
		   </div>
		</div>
	)
}

const UploadField = (props) => {

	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

	return (
		<Field
			name={props.name}
			label={props.label}
			toggleProps={getToggleProps}
			collapseProps={getCollapseProps}
			getUploadParams={props.getUploadParams}
			handleChangeState={props.handleChangeStatus}
			handleSubmit={props.handleSubmit}
			moreInfo={props.moreInfo}
			component={renderField} />
	)
}

export default UploadField