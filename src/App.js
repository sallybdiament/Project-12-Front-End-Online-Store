import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CarrinhoDeCompras from './pages/CarrinhoDeCompras';
import DetalhesProduto from './pages/DetalhesProduto';
import Checkout from './pages/Checkout';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/CarrinhoDeCompras/" component={ CarrinhoDeCompras } />
          <Route path="/DetalhesProduto/:id" component={ DetalhesProduto } />
          <Route path="/Checkout/" component={ Checkout } />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
