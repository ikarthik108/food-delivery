import React from 'react';
import './SignIn.scss'
import FormInput from '../FormInput/FormInput.js'
import CustomButton from '../CustomButton/CustomButton.js'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js'


class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			email:'alex@gmail.com',
			password:'123456',
			displayName:'Alex'
		}
	}

	handleSubmit=async event=> {
		event.preventDefault();
		const {email,password}=this.state;
		try {

			await auth.signInWithEmailAndPassword(email,password);
			this.setState({email:'',password:'',displayName:''})


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
			<div className='sign-in'>
				<h2 className='title'>I aldready have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput name='email' type='email' label='Email'
					value={this.state.email} handleChange={this.handleChange} required/>
					
					<FormInput name='password' type='password' label='Password'
					value={this.state.password} handleChange={this.handleChange} required/>

					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
					</div>
				</form>
			</div>
			)
	}
}



export default SignIn;