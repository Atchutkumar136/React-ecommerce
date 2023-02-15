import React, { Component } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './Header.css'
class Header extends Component {
 constructor(props) {
  super(props);
 }
 render() {
  return (
   <div className='header'>
    <div className='header-title'>E-commerce</div>
    <div className='cart-container'>
     <ShoppingCartOutlinedIcon className='cart-icon' />
     <span className='cart-value'>{this.props.cart_value}</span>
    </div>
   </div>
  );
 }
}

export default Header;