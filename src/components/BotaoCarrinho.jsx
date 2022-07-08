import React from 'react';
import { Link } from 'react-router-dom';

class BotaoCarrinho extends React.Component {
  render() {
    return (
      <div>
        <Link to="/CarrinhoDeCompras" data-testid="shopping-cart-button">Carrinho</Link>
      </div>
    );
  }
}

export default BotaoCarrinho;
