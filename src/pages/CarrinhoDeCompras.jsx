import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromProductId } from '../services/api';

class CarrinhoDeCompras extends React.Component {
  state = {
    titleProduct: '',
    priceProduct: '',
    imgProduct: '',
  }

  componentDidMount = async () => {
    const { match } = this.props;
    const productId = match.params.id;
    const product = await getProductsFromProductId(productId);
    // console.log(product);
    this.setState({
      titleProduct: product.title,
      priceProduct: product.price,
      imgProduct: product.thumbnail,
    });
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

CarrinhoDeCompras.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CarrinhoDeCompras;
