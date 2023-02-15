import React, { Component } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Sidenav.css'

import categories from '../../data/categories.json';

class Sidenav extends Component {
 constructor(props) {
  super(props)
  this.state = {
   selected_category: 0,
  }
 }

 changeCategory = (id) => {
  this.setState({ selected_category: id });
 }

 render() {
  return (
   <div className='sidenav-container'>
    <ul className='category-list'>
     {categories.map((category) => {
      return (
       <>
        <li key={category.id} className={this.state.selected_category === category.id ? 'selected' : ''} onClick={() => this.changeCategory(category.id)}>
         <span className='category-icon'><ShoppingCartOutlinedIcon /></span>
         <span className='category-name-media'>{category.value}</span>
         <span className={this.state.selected_category === category.id ? 'category-value-abs selected' : 'category-value-abs'}>{category.value}</span>
        </li>
       </>)
     })}
    </ul>
   </div>
  );
 }
}

export default Sidenav;