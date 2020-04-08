import React from 'react';

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
	constructor() {
		super();
		this.state = {
			todos,
		};
	}

	addItem = (e, item) => {
		e.preventDefault();
		const newItem = {
			name: item,
			id: Date.now(),
			completed: false,
		};
		this.setState({
			todos: [...this.state.todos, newItem],
		});
	};

	toggleItem = (itemId) => {
		console.log(itemId);
		// map over array
		// when we find the item we clicked, toggle the purchased field
		// otherwise return the item untouched
		this.setState({
			todos: this.state.todos.map((item) => {
				if (itemId === item.id) {
					return {
						...item,
						purchased: !item.purchased,
					};
				}
				return item;
			}),
		});
	};

	clearPurchased = (e) => {
		e.preventDefault();
		// if item is purchased (item.purchased is true) then filter out
		this.setState({
			todos: this.state.todos.filter((item) => !item.purchased),
		});
	};

	render() {
		console.log('rendering...');
		return (
			<div className="App">
				<div className="header">
					<h1>Todo List</h1>
					<TodoForm addItem={this.addItem} />
				</div>
				<TodoList
					todos={this.state.todos}
					toggleItem={this.toggleItem}
					clearPurchased={this.clearPurchased}
				/>
			</div>
		);
	}
}

export default App;
