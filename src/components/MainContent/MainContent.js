import React, { Component } from 'react';
import './MainContent.css';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Item from '../Item/Item';
import items from '../../data/items.json';
import categories from '../../data/categories.json';

class MainContent extends Component {
 constructor(props) {
  super(props);
 }

 render() {
  return (
   <div className='main-content'>
    {categories.map(category => {
     return <div key={category.id} className='category-items-container'>
      <div className='category-viewall'>
       <div className='category-title'>
        <span className='category-name'>{category.value}</span>
        <ChevronRightOutlinedIcon />
       </div>
       <span className='viewall'>View all</span>
      </div>
      <ul className='items-list'>
       {items.map(item => {
        return <Item cart_value={this.props.cart_value} onCartAdded={this.props.onCartAdded} key={item.name} item={item}></Item>
       })}
      </ul>
     </div>
    })}
   </div>
  );
 }
}


export default MainContent;