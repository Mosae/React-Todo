import React from 'react';

const Todo = (props) => {
	return (
		<div className="todo-list">
			<p>{props.todo}</p>
		</div>
	);
};

export default Todo;
