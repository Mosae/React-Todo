import React from 'react';
//import { ReactComponent } from '*.svg';

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			chore: '',
		};
	}

	handleChanges = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	choreSubmit = (e) => {
		e.preventDefault();
		this.setState({ chore: ' ' });
		this.props.addChore(e, this.state.chore);
	};
	render() {
		return (
			<form onSubmit={this.choreSubmit}>
				<input
					type="text"
					onChange={this.handleChanges}
					task="chore"
					//value={this.state.chore}
				/>
				<button>Add +</button>
				<button>Clear Complete</button>
			</form>
		);
	}
}

export default TodoForm;
