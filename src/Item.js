import React from 'react'

const Item = (props) => {

	return (
		<div className="item">
			{!props.type &&
				<div>
				{props.children}
				</div>
			}
			{props.type &&
				<p>{props.name} ✔</p>
			}
		</div>
	)
}

export default Item