import logo from './logo.svg';
import './App.css';
import Filters from './Components/Filters/Filters';
import Home from './Components/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Filters/>
      <Home/>
      <Cart/>
    </div>
  );
}

export default App;
