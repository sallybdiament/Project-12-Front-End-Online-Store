import React from 'react';
// import PropTypes from 'prop-types';
// import { getProductsFromProductId } from '../services/api';

class CarrinhoDeCompras extends React.Component {
  state = {
    titleProduct: '',
    priceProduct: '',
    // imgProduct: '',
    quantityProduct: 0,
    idProduct: '',
  }

  componentDidMount() {
    this.showProducts();
  }

  showProducts = () => {
    const objProduct = JSON.parse(localStorage.getItem('user'));
    // console.log(objProduct.length);
    if (objProduct) {
      this.setState({
        titleProduct: objProduct.titleProduct,
        priceProduct: objProduct.priceProduct,
        quantityProduct: objProduct.quantityProduct,
        idProduct: objProduct.productId,
      });
    }
  }

  render() {
    const { titleProduct, priceProduct, quantityProduct, idProduct } = this.state;
    console.log(localStorage.getItem('user'));
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
        {/* {quantityProduct.length > 0
        && (
          <div key={ idProduct }>
            <p data-testid="shopping-cart-product-name">{titleProduct}</p>
            <p>{priceProduct}</p>
            <p data-testid="shopping-cart-product-quantity">{quantityProduct}</p>
          </div>)} */}
        <div key={ idProduct }>
          <p data-testid="shopping-cart-product-name">{titleProduct}</p>
          <p>{priceProduct}</p>
          <p data-testid="shopping-cart-product-quantity">{quantityProduct}</p>
        </div>

      </div>
    );
  }
}

export default CarrinhoDeCompras;
