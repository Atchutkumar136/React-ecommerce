import React, { Component } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import './Item.css'

class Item extends Component {
 constructor(props) {
  super(props);
  this.state = {
   added: true
  }
 }

 updateCart = () => {
  const value = this.state.added ? 1 : -1;
  this.props.onCartAdded(this.props.cart_value + value);
  this.setState({ added: !this.state.added });
 }

 render() {
  return (
   <div className='item'>
    <div className='add-item' onClick={() => this.updateCart()}>
     {this.state.added ? <AddOutlinedIcon /> : <RemoveOutlinedIcon />}
    </div>
    <img src={this.props.item.image}></img>
    <span className='item-price'>{this.props.item.price}</span>
    <span className='item-name'>{this.props.item.title}</span>
    <span className='item-quantity'>{this.props.item.quantity}</span>
   </div>
  );
 }
}

export default Item;