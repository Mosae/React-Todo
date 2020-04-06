// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
	return (
		<div className="todo-array">
			Todo List:{' '}
			{props.todos.map((item) => {
				console.log('To do array :', item);
			})}
		</div>
	);
};

export default TodoList;
