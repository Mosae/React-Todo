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
			</form>
		);
	}
}

export default TodoForm;
