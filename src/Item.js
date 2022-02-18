import React from 'react'

const Item = (props) => {

	// console.log(props.type)

	return (
		<div className="item">
			{!props.type &&
				<div>
				{props.children}
				</div>
			}
			{props.type &&
				<p>{props.label} ✔</p>
			}
		</div>
	)
}

export default Item