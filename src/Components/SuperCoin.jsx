import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';  // Import useSelector

const SuperCoins = () => {
  const [superCoins, setSuperCoins] = useState(0);

  // Access cartItems from the Redux store
  const cartItems = useSelector(state => state.cart.cartItems);

  // Calculate total amount from cart items
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    // Update super coins based on totalAmount
    if (totalAmount >= 100 && totalAmount < 200) {
      setSuperCoins(10);
    } else if (totalAmount >= 200 && totalAmount < 300) {
      setSuperCoins(20);
    } else if (totalAmount >= 300) {
      setSuperCoins(30);
    } else {
      setSuperCoins(0);
    }
  }, [totalAmount]);  // Dependency array: runs when totalAmount changes

  return (
    <>
      <div className="super-coins" style={{ textAlign: 'center' }}>
        <h2 className="super-coins-title">Super Coins</h2>
        <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
      </div>
    </>
  );
}

export default SuperCoins;