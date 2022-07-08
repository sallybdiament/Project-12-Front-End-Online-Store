import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CarrinhoDeCompras from './pages/CarrinhoDeCompras';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/CarrinhoDeCompras" component={ CarrinhoDeCompras } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
