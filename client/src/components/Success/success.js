import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsBagCheckFill } from 'react-icons/bs';
import './success.scss';
// import { useStateContext } from '../context/StateContext';
import { runFireworks } from './runFireworks';

const Success = () => {
//   const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    // localStorage.clear();
    // setCartItems([]);
    // setTotalPrice(0);
    // setTotalQuantities(0);
    runFireworks();
  }, []);



  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            store@gyzmo.com
          </a>
        </p>
        <Link to="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success