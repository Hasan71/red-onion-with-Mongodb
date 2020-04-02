import React, { useContext, useState, useEffect } from 'react';
import './Header.css'
import { Link, withRouter } from 'react-router-dom'
import { UserContext } from '../Auth/useAuth';
import Logo2 from '../../images/logo2.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginUser = ({route}) => {
    const {logout} = useContext(UserContext)
    const logOutHandler = () => {
        logout();
        route.history.push('/login');
    }
    return (
        <>
            <Link to="/user/profile"><button className="btn signup-btn primary-btn">Profile</button></Link>
            <button className="btn" onClick={logOutHandler}>Logout</button>
        </>
    )
}
const LogoutUser = () => {
    return (
        <>
            <Link to="/signup"><button className="btn signup-btn primary-btn">Sign up</button></Link>
            <Link to="/login"><button className="btn">Login</button></Link>
        </>
    )
}

const Header = (props) => {
    const {user, cart} = useContext(UserContext);
    const [cartItem, setCartItem] = useState('');
    useEffect(()=>{
        if(cart.length > 0 ) {
            setCartItem(cart.length);
        } else {
            setCartItem('');
        }

        
    }, [cart])

    return (
        <header>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col">
                        <div className="logo-area">
                            <Link to="/"> <img src={Logo2 } alt="hot onion"/> </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="header-right">
                            <div className="d-flex">
                                {user ? <LoginUser route={props} /> : <LogoutUser/> }
                            <Link to="/cart">
                                <button className="btn"> 
                                        <i className="fa fa-cart-plus" aria-hidden="true">
                                        </i> <span style={{color:'red'}}> {cart && cartItem}</span>
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default withRouter(Header);