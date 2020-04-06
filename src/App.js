import React from 'react';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
	{
		task: 'Organize Garage',
		id: 1528817077286,
		completed: false,
	},
	{
		task: 'Bake Cookies',
		id: 1528817084358,
		completed: false,
	},
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	//MVP: Inut field
	// add button
	// render inputs when add button is clicked
	//Completed task
	// clear completed
	constructor() {
		super();
		this.state = {
			todos,
		};
	}

	addChore = (e, chore) => {
		e.preventDefault();
		const newChore = {
			task: chore,
			id: Math.random(),
			completed: false,
		};
		this.setState({
			todos: [...this.state.todos, newChore],
		});
	};

	render() {
		return (
			<div>
				<h2>To Do List: </h2>
				<Todo todos={this.state.todos} />
				<TodoForm addChore={this.addChore} />
				<TodoList todos={this.state.todos} />
			</div>
		);
	}
}

export default App;
