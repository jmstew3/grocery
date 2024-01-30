import React from 'react';

const groceryList = ['eggs', 'milk', 'bread'];

const GroceryItems = () => {
    const items = groceryList.map((item, index) =>
        <button key={index}>{item}</button>);
    
    return (
        <div>{items}</div>
    );
}

export default GroceryItems;