import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Switch, Route} from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import Signup from '../src/components/Auth/Signup/Signup'
import Login from '../src/components/Auth/Login/Login'
import Cart from './components/Cart/Cart';
import PageNotFound from './components/Pages/PageNotFound';
import FoodDetails from './components/Food/FoodDetails';
import { UserProvider } from './components/Auth/useAuth';
import UserProfile from './components/Pages/UserProfile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Cart/Checkout';
import Foods from './components/Pages/Foods';

function App() {
  return (
   <UserProvider>
       <Header/>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={Signup} />  
        <Route path="/login" component={Login} />

        <PrivateRoute path="/cart">
              <Cart />
        </PrivateRoute>

        <PrivateRoute path="/checkout">
              <Checkout />
        </PrivateRoute>

        <Route exact path="/foods/" component={Foods} />
        <Route path="/foods/:id" component={FoodDetails} />

        <PrivateRoute path="/user/profile">
              <UserProfile />
        </PrivateRoute>

        <Route path="*" component={PageNotFound} />
      </Switch>
      
   </UserProvider>
  );
}

export default App;