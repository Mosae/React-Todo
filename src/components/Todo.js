import React from 'react';

const Todo = (props) => {
	// const toggleItem = (itemId) => {
	// 	console.log(this);

	// 	this.setState({
	// 		todos: this.state.todos.map((item) => {
	// 			if (itemId === item.id) {
	// 				return {
	// 					...item,
	// 					completed: !item.completed,
	// 				};
	// 			}
	// 			return item;
	// 		}),
	// 	});
	// };
	return (
		<div
			className={`item${props.todo.completed ? ' completed' : ''}`}
			onClick={props.toggleItem}>
			<p>{props.todo}</p>
		</div>
	);
};

export default Todo;
