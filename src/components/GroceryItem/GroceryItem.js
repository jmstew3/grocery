import React from 'react';

import styles from './GroceryItem.module.css';


function GroceryItem(props) {
    return (
        <button className={styles.flexItem} onClick={() => alert(`You've added ${props.name} to your cart!`)}>{props.name}</button>
    );
}

export default GroceryItem;