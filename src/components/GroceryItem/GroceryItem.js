import React from 'react';


function GroceryItem(props) {
    return (
        <button onClick={() => alert(`You've added ${props.name} to your cart!`)}>{props.name}</button>
    );
}

export default GroceryItem;