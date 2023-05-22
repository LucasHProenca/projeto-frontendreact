import logo from './logo.svg';
import './App.css';
import Filters from './Components/Filters/Filters';
import Home from './Components/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import styled, { createGlobalStyle } from 'styled-components';
import { Principal, } from './styleApp';
import ProductsList from './assets/productsList';
import { useEffect, useState } from 'react';

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



  const [minFilter, setMinFilter] = useState(-Infinity)

  const onChangeMinFilter = (event) => {
    setMinFilter(event.target.value)
  }

  const [maxFilter, setMaxFilter] = useState(Infinity)

  const onChangeMaxFilter = (event) => {
    setMaxFilter(event.target.value)
  }

  const [searchFilter, setSearchFilter] = useState("")

  const onChangeSearchFilter = (event) => {
    setSearchFilter(event.target.value)
  }

  const [cart, setCart] = useState([])
  const onChangeCart = (event) => {
    setCart(event.target.value)
  }

  const [amount, setAmount] = useState("")

  const onChangeAmount = (event) => {
    setAmount(event.target.value)
  }

  const adicionaProduto = (produto) => {
    const newProduct = cart.find((item) => item.id === produto.id)
    if (newProduct === undefined) {
      setCart([...cart, { ...produto, amount: 1 }])
    } else {
      const newCart = cart.map((item) => {
        if (item.id === produto.id) {
          return { ...newProduct, amount: newProduct.amount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
      console.log(setCart)
    }
  }

  const removeProduto = (produto) => {
    const ProdutosToDelete = cart.find((item) => item.id === produto.id)
    if (ProdutosToDelete.amount > 1) {
      const newCart = cart.map((item) => {
        if (item.id === produto.id) {
          return { ...ProdutosToDelete, amount: ProdutosToDelete.amount - 1 }
        } else {
          return item
        }
      })

      setCart(newCart)

    } else {
      const newCart = cart.filter((item) => {
        return item.id !== produto.id
      })
      setCart(newCart)
    }
  }

  function salvarLocalStorage() {
    const listaString = JSON.stringify(cart);
    localStorage.setItem("lista", listaString);
  }

  function pegaItensLocalStorage() {
    // recebe o valor do local storage em formato de string
    const listaString = localStorage.getItem("lista");
    // transforma o valor de volta
    const listaArray = JSON.parse(listaString);
    // salvo o valor no estado
    if (listaArray) {
      setCart(listaArray);
    }
  }

  function removeItemLocalStorage() {
    localStorage.removeItem("lista");
  }
  
  useEffect(() => {
    pegaItensLocalStorage();
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      salvarLocalStorage();
    }
  }, [cart]);
  

  return (
    <>
      <GlobalStyle />
      <Principal>
        <Filters
          minFilter={minFilter}
          onChangeMinFilter={onChangeMinFilter}
          maxFilter={maxFilter}
          onChangeMaxFilter={onChangeMaxFilter}
          searchFilter={searchFilter}
          onChangeSearchFilter={onChangeSearchFilter}
        />
        <Home
          lista={ProductsList}
          cart={cart}
          onChangeCart={onChangeCart}
          amount={amount}
          onChangeAmount={onChangeAmount}
          adicionaProduto={adicionaProduto}
          minFilter = {minFilter}
          maxFilter = {maxFilter}
          searchFilter = {searchFilter}
        />
        <Cart
          cart={cart}
          onChangeCart={onChangeCart}
          amount={amount}
          onChangeAmount={onChangeAmount}
          removeProduto={removeProduto}
          removeItem = {removeItemLocalStorage}
        />
      </Principal>
    </>
  );
}

export default App;
