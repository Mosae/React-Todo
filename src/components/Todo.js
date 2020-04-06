import React from 'react';

const Todo = (props) => {
	return (
		<div className="todo-list">
			{props.todos.map((item) => console.log('Thios is the item', item))}
		</div>
	);
};

export default Todo;
