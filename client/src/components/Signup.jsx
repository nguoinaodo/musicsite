import React from 'react';
import { Modal, FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';

class Signup extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			displayName: '',
			gender: 0,
			birthday: '1950-01-01',
			livingIn: ''
		};
		this.submit = this.submit.bind(this);
		this.doSignup = this.doSignup.bind(this);
		this.close = this.close.bind(this);
	}

	submit(e) {
		e.preventDefault();
		this.doSignup();
	}

	close() {
		this.props.doClose();
	}

	doSignup() {
		let info = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
			displayName: this.state.displayName,
			gender: this.state.gender,
			birthday: this.state.birthday,
			livingIn: this.state.livingIn
		}
		this.props.setInfo(info);
		this.props.doSignup();
	}
	
	render() {
		return (
			<div className="Signup">
				<div>Signup</div>
				<div>{this.props.status}</div>
				<Modal show={this.props.show}>
					<Modal.Header><h2>Signup</h2></Modal.Header>
					<Modal.Body>
						<form onSubmit={this.submit} id="signup-form">
							<FormGroup>
								<ControlLabel>Username</ControlLabel>
								<FormControl type="text" required placeholder="Enter username.." 
										onChange={(e)=> this.setState({
												username: e.target.value
										})} value={this.state.username} />
								<br/>
								<ControlLabel>Email</ControlLabel>
								<FormControl type="text" required placeholder="Enter email.." 
										onChange={(e)=> this.setState({
												email: e.target.value
										})} value={this.state.email} />
								<br/>
								<ControlLabel>Fullname</ControlLabel>
								<FormControl type="text" placeholder="Enter fullname.." required 
										onChange={(e)=> this.setState({
												displayName: e.target.value
										})} value={this.state.displayName} />
								<br/>
								<ControlLabel>Password</ControlLabel>
								<FormControl type="password" placeholder="Enter password.." required 
										onChange={(e)=> this.setState({
												password: e.target.value
										})} value={this.state.password} />
								<br/>
								<ControlLabel>Gender</ControlLabel>
								<select onChange={(e) => this.setState({
									gender: e.target.value
								})} value={this.state.gender}>
									<option value="0">Male</option>
					                <option value="1">Female</option>
					                <option value="2">Other</option>
								</select>
								<br/>
								<ControlLabel>Birthday</ControlLabel>
								<FormControl type="date" required 
										onChange={(e)=> this.setState({
												birthday: e.target.value
										})} value={this.state.birthday} />
								<br/>
								<ControlLabel>Address</ControlLabel>
								<FormControl type="text" placeholder="Enter address.."  required 
										onChange={(e)=> this.setState({
												livingIn: e.target.value
										})} value={this.state.livingIn} />
								<br/>
								<Button type="submit">Submit</Button>
							</FormGroup>
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close}>Close</Button>
					</Modal.Footer>
				</Modal>				
			</div>
		);
	}
}

import { connect } from 'react-redux';
import { doSignup, setInfo, doClose } from '../actions/signup';

export default connect(
	(state) => ({
		// Map state to props
		status: state.signup.status,
		info: state.signup.info,
		show: state.signup.show
	}), {
		// Map dispatch to props
		doSignup: () => doSignup,
		setInfo,
		doClose: () => doClose
	}
)(Signup);