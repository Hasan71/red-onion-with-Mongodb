import React, { useState, useContext } from 'react';
import './Login.css'
import Inputitem from '../Inputitem/Inputitem';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { UserContext } from '../useAuth';
import Logo2 from '../../../images/logo2.png';
const Login = (props) => {
  const auth = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})

  const onchangeHandler = e => {
    const {name, value} = e.target;
     
    if(name==='email') {
      setEmail(value)
    }    
    if(name==='password') {
      setPassword(value)
    }    
       
  }

  const loginUser = e => {
    e.preventDefault()
  console.log(email, password);
  
    auth.login(email, password)
    .then(res => {
      if(res) {
       if(res.user) {
          props.history.push('/')
       } else {
        setError(res)
       }     
        
      }
    })
  }
 
  if(auth.user) {
    return Redirect('/')
  } else {

        return (
            <section className="login">
            <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-3 m-auto">
                <div className="login-aria-logo py-5 m-auto">
                    <img className="w-50 d-block m-auto" src={Logo2} alt="logo"/>
                </div>
                <form onSubmit={loginUser}>
                    <Inputitem name="email" type="email" onchangeHandler={onchangeHandler} placeholder="Email" value={email} />
                    <Inputitem name="password" type="password" onchangeHandler={onchangeHandler} placeholder="Password" value={password} />
                    <button type="submit" className="btn login-btn w-100">Log In</button>
                </form>
                    {error.message && <p className="py-2">{error.message}</p>}
                <p className="text-center py-2 no-account">Don't have an account? <Link to="/signup"> Sign up</Link></p>
                </div>
            </div>
            </div>
        </section>
        );
  }
};

export default withRouter(Login);
