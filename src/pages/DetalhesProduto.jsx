import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromProductId } from '../services/api';
import createUser from '../services/localStorage';
import BotaoCarrinho from '../components/BotaoCarrinho';

class DetalhesProduto extends React.Component {
  state = {
    titleProducts: '',
    priceProducts: '',
    imgProducts: '',
    soldQuantityProducts: '',
    productIds: '',
  }

  componentDidMount = async () => {
    const { match } = this.props;
    const productId = match.params.id;
    const product = await getProductsFromProductId(productId);
    console.log(product);
    this.setState({
      titleProducts: product.title,
      priceProducts: product.price,
      imgProducts: product.thumbnail,
      soldQuantityProducts: product.sold_quantity,
      productIds: product.id,
    });
  }

  render() {
    const { titleProducts, priceProducts,
      imgProducts, soldQuantityProducts, productIds } = this.state;
    return (
      <div>
        <BotaoCarrinho />
        <p data-testid="product-detail-name">{titleProducts}</p>
        <p>{priceProducts}</p>
        <img src={ imgProducts } alt={ titleProducts } />
        <p>
          Quantidade vendida até o momento:
          {soldQuantityProducts}
        </p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ createUser({
            titleProduct: titleProducts,
            priceProduct: priceProducts,
            quantityProduct: 1,
            productId: productIds,
          }) }
        >
          Adicionar ao carrinho
        </button>
        <br />
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

DetalhesProduto.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
  priceProducts: PropTypes.string,
  titleProducts: PropTypes.string,
}.isRequired;

export default DetalhesProduto;
