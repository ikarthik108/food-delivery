import React from 'react';
import './SignUp.scss'
import FormInput from '../FormInput/FormInput.js'
import CustomButton from '../CustomButton/CustomButton.js'
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils.js'
//import {signInWithGoogle} from '../../firebase/firebase.utils.js'

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			displayName:'',
			email:'',
			password:'',
			confirmPassword:''
		}
	}

	handleSubmit=async event=> {
		event.preventDefault();
		const {displayName,email,password,confirmPassword}=this.state;
		if(password!==confirmPassword) {
			alert(`Passwords Don't Match!`);
			return;
		}

		try {

			const {user}= await auth.createUserWithEmailAndPassword(email,password);

			await createUserProfileDocument(user,{displayName});

			this.setState(
				{displayName:'',
				email:'',
				password:'',
				confirmPassword:''})

		} catch(error) {
			console.log(error);
		}
		
	}

	handleChange=(event)=> {
		const {value,name}=event.target
		this.setState({[name]:value});
	}
	render() {
		return (
			<div className='sign-up'>
				<h2 className='title'>I do not have an account</h2>
				<span>Register with your email and password</span>

				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput name='displayName' type='text' label='Display Name'
					value={this.state.displayName} handleChange={this.handleChange} required/>

					<FormInput name='email' type='email' label='Email'
					value={this.state.email} handleChange={this.handleChange} required/>
					
					<FormInput name='password' type='password' label='Password(Min 6 Characters)'
					value={this.state.password} handleChange={this.handleChange} required/>

					<FormInput name='confirmPassword' type='password' label='Confirm Password'
					value={this.state.confirmPassword} handleChange={this.handleChange} required/>

					<CustomButton type='submit'>Sign Up</CustomButton>
				</form>
			</div>
			)
	}
}

export default SignUp;