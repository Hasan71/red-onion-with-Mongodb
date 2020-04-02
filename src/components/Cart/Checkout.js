import React from 'react';
import OrderImage from '../../images/ordercomplete.png'
const Checkout = () => {
    return (
        <div className="container">
      <h1 className="text-center">Thanks for Order Confirmation</h1>
      <img src={OrderImage} className="w-100" alt="ordercomplete" border="0"></img>
    </div>
    );
};

export default Checkout;