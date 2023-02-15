import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import Sidenav from '../../components/Sidenav/Sidenav';

import './Homepage.css';

class Homepage extends Component {
 constructor(props) {
  super(props);
  this.state = {
   cart_value: 0
  };
  this.onCartAdded = this.onCartAdded.bind(this);
 }

 onCartAdded(newValue) {
  console.log("newvalue-->", newValue);
  this.setState({ cart_value: newValue });
 }
 render() {
  return (
   <div className='app-main'>
    <Header cart_value={this.state.cart_value}></Header>
    <div className='sidenav-and-main'>
     <Sidenav></Sidenav>
     <MainContent cart_value={this.state.cart_value} onCartAdded={this.onCartAdded}></MainContent>
    </div>
   </div>
  );
 }
}

export default Homepage;