import React from 'react';
// import PropTypes from 'prop-types';
// import { getProductsFromProductId } from '../services/api';

class CarrinhoDeCompras extends React.Component {
  state = {
    titleProduct: '',
    priceProduct: '',
    imgProduct: '',
  }

  render() {
    const { titleProduct, priceProduct, imgProduct } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <p data-testid="shopping-cart-product-name">{titleProduct}</p>
        <p>{priceProduct}</p>
        <img src={ imgProduct } alt={ titleProduct } />
      </div>
    );
  }
}

export default CarrinhoDeCompras;
