import './App.css';

import GroceryItem from '../GroceryItem/GroceryItem';
import GroceryItems from '../GroceryItems/GroceryItems';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Grocery Smart Mart</h1>
      </header>
      <body>
        <GroceryItem />
        <GroceryItems />
      </body>
    </div>
  );
}

export default App;