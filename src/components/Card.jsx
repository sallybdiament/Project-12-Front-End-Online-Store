import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import createUser from '../services/localStorage';

class Card extends React.Component {
  handleClick = () => {
    const { produtoId, preco } = this.props;
    const { nome } = this.props;
    createUser({
      titleProduct: nome,
      priceProduct: preco,
      quantityProduct: 1,
      productId: produtoId });
    console.log('clicou');
  }

  render() {
    const { nome, imagem, preco, produtoId } = this.props;
    return (
      <div data-testid="product">
        <Link
          to={ `/DetalhesProduto/${produtoId}` }
          data-testid="product-detail-link"
        >
          <p>{nome}</p>
          <img src={ imagem } alt={ nome } />
          <p>{ preco }</p>
        </Link>
        {/* <Link to={ `/CarrinhoDeCompras/${produtoId}` }> */}
        <button
          type="button"
          data-testid="product-add-to-cart"
          // data-testid="shopping-cart-button"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
        {/* </Link> */}
      </div>
    );
  }
}

Card.propTypes = {
  nome: PropTypes.string,
  imagem: PropTypes.string,
  preco: PropTypes.number,
  produtoId: PropTypes.string,
}.isRequired;

export default Card;
