import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromProductId } from '../services/api';

class DetalhesProduto extends React.Component {
  state = {
    titleProduct: '',
    priceProduct: '',
    imgProduct: '',
    soldQuantityProduct: '',
  }

  componentDidMount = async () => {
    const { match } = this.props;
    const productId = match.params.id;
    const product = await getProductsFromProductId(productId);
    console.log(product);
    this.setState({
      titleProduct: product.title,
      priceProduct: product.price,
      imgProduct: product.thumbnail,
      soldQuantityProduct: product.sold_quantity,
    });
  }

  render() {
    const { titleProduct, priceProduct, imgProduct, soldQuantityProduct } = this.state;
    // console.log(infoProduto);
    return (
      <div>
        <p data-testid="product-detail-name">{titleProduct}</p>
        <p>{priceProduct}</p>
        <img src={ imgProduct } alt={ titleProduct } />
        <p>
          Quantidade vendida até o momento:
          {soldQuantityProduct}
        </p>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

DetalhesProduto.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DetalhesProduto;
