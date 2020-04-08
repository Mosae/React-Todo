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
	);
};

export default Todo;
