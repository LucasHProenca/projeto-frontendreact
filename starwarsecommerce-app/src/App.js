import Filters from './Components/Filters/Filters';
import Home from './Components/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import { createGlobalStyle } from 'styled-components';
import { Principal, Corpo } from './styleApp';
import ProductsList from './assets/productsList';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import InformacoesUsuario from './Components/InformacoesUsuario/InformacoesUsuario';
import Sugestoes from './Components/Sugestoes/Sugestoes';

const GlobalStyle = createGlobalStyle`
html{
  font-size: 62.5%;
}

*{
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Fantasy'
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
    } else if(cart.length === 1){
      const newCart = cart.filter((item) => {
        return item.id !== produto.id
      })
      removeItemLocalStorage()
      setCart(newCart)
      console.log("oxeee")
    }else {
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

  const [telaAtual, setTelaAtual] = useState("Home")

  const mudarTela = (novaTela) => {
    setTelaAtual(novaTela)
  }

  const renderizaTela = () => {
    switch (telaAtual) {
      case "Home":
        return <Principal>
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
            minFilter={minFilter}
            maxFilter={maxFilter}
            searchFilter={searchFilter}
            mudarTela={mudarTela}
          />
        </Principal>

      case "Cart":
        return <Principal>
          <Cart
            cart={cart}
            onChangeCart={onChangeCart}
            setCart = {setCart}
            amount={amount}
            onChangeAmount={onChangeAmount}
            removeProduto={removeProduto}
            removeItem={removeItemLocalStorage}
            adicionaProduto={adicionaProduto}
            mudarTela={mudarTela}
          />
        </Principal>

      case "Informações":
        return (
          <InformacoesUsuario mudarTela={mudarTela} setCart = {setCart} removeItem = {removeItemLocalStorage} />
        )

      case "Sugestões":
        return (
          <Sugestoes mudarTela={mudarTela} />
        )
    }
  }
 
  return (
    <>
      <GlobalStyle />
      <Corpo>
        <Header mudarTela={mudarTela} cart={cart} />
        {renderizaTela()}
        <Footer mudarTela={mudarTela} />
      </Corpo>
    </>
  );
}

export default App;
