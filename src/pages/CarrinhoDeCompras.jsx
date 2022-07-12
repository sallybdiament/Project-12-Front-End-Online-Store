import React from 'react';
import { Link } from 'react-router-dom';
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

  handleClickAument = () => {
    this.setState((state) => ({ quantityProduct: state.quantityProduct + 1 }));
  }

  handleClickDiminui = () => {
    const { quantityProduct } = this.state;
    const min = 1;
    if (quantityProduct > min) {
      this.setState((state) => ({ quantityProduct: state.quantityProduct - 1 }));
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
        <div>
          <label htmlFor="product-increase-quantity">
            <input
              id="search"
              name="search"
              type="number"
              value={ quantityProduct }
              min="1"
              data-testid="product-increase-quantity"
            />
          </label>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.handleClickAument }
          >
            +
          </button>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.handleClickDiminui }
          >
            -
          </button>
        </div>
        <Link to="/Checkout" data-testid="checkout-products">Checkout</Link>
      </div>
    );
  }
}

export default CarrinhoDeCompras;
