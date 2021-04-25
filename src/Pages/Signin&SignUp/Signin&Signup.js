import React from 'react';
import SignIn from '../../Components/SignIn/SignIn.js'
import SignUp from '../../Components/SignUp/SignUp.js'
import './Signin&Signup.scss'


const SignInAndSignUp=()=> {
	return (
		<div className='sign-in-and-sign-up'>
			<SignIn/>
			<SignUp/>
		</div>
		)
}

export default SignInAndSignUp;