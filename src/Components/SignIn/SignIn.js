import React from 'react';
import './SignIn.scss'
import FormInput from '../FormInput/FormInput.js'
import CustomButton from '../CustomButton/CustomButton.js'

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			email:'',
			password:''
		}
	}

	handleSubmit=(event)=> {
		event.preventDefault();
		this.setState({email:'',password:''})
	}

	handleChange=(event)=> {
		const {value,name}=event.target
		this.setState({[name]:value});
	}
	render() {
		return (
			<div className='sign-in'>
				<h2 className='title'>I aldready have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput name='email' type='email' label='Email'
					value={this.state.email} handleChange={this.handleChange} required/>
					
					<FormInput name='password' type='password' label='Password'
					value={this.state.password} handleChange={this.handleChange} required/>

					<CustomButton type='submit'>Sign In</CustomButton>
					

					{/*<input type='submit' value='Submit Form'/>*/}
				</form>
			</div>
			)
	}
}

export default SignIn;