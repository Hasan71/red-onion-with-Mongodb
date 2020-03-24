import React, { useState, useContext } from 'react';
import Inputitem from '../Inputitem/Inputitem';
import './Signup.css'
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../useAuth';

const Signup = (props) => {
  const auth = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onchangeHandler = e => {
    const {name, value} = e.target;
    if(name==='name') {
      setName(value);
    }    
    if(name==='email') {
      setEmail(value);
    }    
    if(name==='password') {
      setPassword(value);
    }    
    if(name==='confirmPassword') {
      setConfirmPassword(value);
    }    
  }

  const registerUser = e => {
    e.preventDefault();

    if(password === confirmPassword) {
      auth.registerUserWithEmailPassword(email, password, name)
      .then(res => {
        if(res) {
          props.history.push('/');
        }
      })
    } 
	else {
      alert('Password should be match');
    }
  }

  if(auth.user) {
    return Redirect('/');
  } 
  
  else {
	  
	  return (
		<section className="sign-up" id="sign-up-aria-bg">
		
		<div className="container">
		
		  <div className="row">
			<div className="col-md-4 col-md-offset-3 m-auto">
			  <div className="sign-up-aria-logo py-5 m-auto">
				<img className="w-50 d-block m-auto" src="../../../images/logo2.png" alt=""/>
			  </div>
			  
			  <form onSubmit={registerUser}>
			  
				<Inputitem name="name" type="text" placeholder="Name" onchangeHandler={onchangeHandler} value={name} />
				<Inputitem name="email" type="email" placeholder="Email" onchangeHandler={onchangeHandler} value={email} />
				<Inputitem name="password" type="password" placeholder="Password" onchangeHandler={onchangeHandler} value={password} />
				<Inputitem name="confirmPassword" type="password" placeholder="Confirm Password" onchangeHandler={onchangeHandler} value={confirmPassword} />
				<button type="submit" className="btn sign-up-btn w-100">Submit</button>
				
			  </form>
			  <p className="text-center py-2 has-account"><Link to="/login">Already have an account</Link></p>
			</div>
		  </div>
		  
		</div>
	  </section>
	  );
  }
};

export default Signup;