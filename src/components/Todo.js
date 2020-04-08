import React from 'react';

const Todo = (props) => {
	return (
		<div
			style={{
				textDecoration: props.item.completed ? 'line-through' : 'none',
			}}>
			<p
				className={`item${props.item.completed ? ' completed' : ''}`}
				onClick={() => props.toggleItem(props.item.id)}>
				{props.item.name}
			</p>
		</div>
		// <div>
		// 	<ul
		// 		className={`item${props.item.completed ? ' completed' : ''}`}
		// 		style={{
		// 			textDecoration: props.item.completed ? 'line-through' : 'none',
		// 		}}
		// 		onClick={() => props.toggleItem(props.item.id)}>
		// 		<p>{props.item.name}</p>
		// 	</ul>
		// </div>
	);
};

export default Todo;
