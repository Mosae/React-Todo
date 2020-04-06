import React from 'react';
//import { ReactComponent } from '*.svg';

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			chore: '',
		};
	}
	render() {
		return (
			<form>
				<input type="text" />
				<button>Add +</button>
			</form>
		);
	}
}

export default TodoForm;
