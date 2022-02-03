import React, { Component } from 'react';
// import { findUser } from './services/LeadService';

const Login = ({onChangeForm, findUser}) => {

	return (
		<section>
			<form>
                <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="firstname" id="firstname" aria-describedby="email" placeholder="Your email address" />
                <button type="button" onClick= {(e) => findUser()} className="btn btn-danger">Login</button>
			</form>
		</section>
	)
};

export default Login;