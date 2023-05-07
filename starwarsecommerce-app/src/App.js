import logo from './logo.svg';
import './App.css';
import Filters from './Components/Filters/Filters';
import Home from './Components/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import styled, {createGlobalStyle} from 'styled-components';
import { Principal } from './styleApp';

const GlobalStyle = createGlobalStyle`
html{
  font-size = 62.5%
}

*{
  box-sizing = border-box
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`

function App() {
  return (
    <>
    <GlobalStyle/>
    <Principal>
      <Filters/>
      <Home/>
      <Cart/>
    </Principal>
    </>
  );
}

export default App;
