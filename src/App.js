import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CarrinhoDeCompras from './pages/CarrinhoDeCompras';
import DetalhesProduto from './pages/DetalhesProduto';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/CarrinhoDeCompras" component={ CarrinhoDeCompras } />
          <Route path="/DetalhesProduto/:id" component={ DetalhesProduto } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
