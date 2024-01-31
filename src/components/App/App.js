import './App.css';

import GroceryItem from '../GroceryItem/GroceryItem';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Grocery Smart Mart</h1>
      </header>
      <div className="flexContainer">
        <GroceryItem name="Eggs"/>
        <GroceryItem name="Bananas"/>
        <GroceryItem name="Strawberries"/>
        <GroceryItem name="Bread"/>
      </div>
    </div>
  );
}

export default App;
